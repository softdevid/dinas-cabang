import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayananPublikIndex = ({ title, layananPublik }) => {
  const [search, setSearch] = useState('');

  const filteredlayananPublik = layananPublik.filter(layanan =>
    layanan.namaLayanan.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredlayananPublik.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredlayananPublik.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredlayananPublik.length > 0 ? getPageItems(currentPage) : [];


  function handleDelete(data) {
    if (confirm("Yakin hapus?")) {
      axios
        .delete(`/super-admin/layanan-publik/${data.id}`)
        .then((res) => {
          toast.success(res.data.data, {
            position: toast.POSITION.TOP_CENTER
          });

          setTimeout(() => {
            router.get('/super-admin/layanan-publik')
          }, 2000);
        })
    }
  }

  const [open, setOpen] = useState(false)
  const [data, setData] = useState("")
  function handleOpen(data) {
    setOpen(true)
    setData({ data })
  }

  function handleClose() {
    setOpen(false);
    setData({})
  }

  console.log(open, data)

  return (
    <>
      {!open ? (
        <>
          <Head title={title} />
          <ToastContainer autoClose={2000} />
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-md md:text-2xl">{title}</h1>
            </div>
            <div className="flex items-end justify-end">
              <Link href="/super-admin/layanan-publik/create" className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 text-white">Tambah</Link>
            </div>
          </div>

          <input placeholder="Cari Layanan Publik" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg" />
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cover
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Layanan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Layanan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageItems.map((data, i) => {
                  return (
                    <>
                      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {i + 1}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img src={data.imgUrl} className="w-10 h-10 object-cover" />
                        </th>
                        <td className="px-6 py-4">
                          {data.namaLayanan}
                        </td>
                        <td className="px-6 py-4">
                          {data.jenisLayanan}
                        </td>
                        <td className="px-6 py-4">
                          <Link href={`/super-admin/layanan-publik/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-2">Edit</Link>
                          <button onClick={() => handleOpen(data)} className="bg-sky-500 text-white p-2 rounded-lg mx-2">Detail</button>
                          <button onClick={() => handleDelete(data)} className="bg-red-500 mx-2 text-white p-2 rounded-lg">Hapus</button>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>

          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center mt-8"}
            pageClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"}
            breakClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-not-allowed text-lg p-2"}
            activeClassName={"bg-blue-500 text-red-500 rounded-full"}
            previousClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"}
            nextClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"}
            disabledClassName={"mx-2 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed text-lg p-2"}
          />
        </>
      ) : (
        <>
          <Show data={data} handleClose={handleClose} />
        </>
      )}

    </>
  )
}

function Show({ data, handleClose }) {
  return (
    <>
      <Head title="Detail" />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-md md:text-2xl">Detail</h1>
        </div>
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="bg-gray-500 p-2 rounded-lg hover:bg-gray-600 text-white">Kembali</button>
        </div>
      </div>

      <div className="md:grid-cols-2 grid-cols-1 grid gap-4">
        <div>
          <img src={data.data.imgUrl} className="max-w-[300px] max-h-[300px] mx-auto" />
        </div>
        <div>
          <p>Nama Layanan: {data.data.namaLayanan}</p>
          <p>Jenis Layanan: {data.data.jenisLayanan}</p>
          <p>Jenis Layanan: {data.data.deskripsiLayanan}</p>
        </div>
      </div>
    </>
  )
}

LayananPublikIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default LayananPublikIndex;
