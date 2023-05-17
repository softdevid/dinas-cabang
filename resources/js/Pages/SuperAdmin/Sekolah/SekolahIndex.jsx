import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from 'react-paginate';
import axios from "axios";


const SekolahIndex = ({ title, sekolah }) => {
  const [errors, setErrors] = useState({});
  const handleDelete = (data) => {
    axios
      .delete(`/super-admin/sekolah/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/super-admin/sekolah`);
        }, 2000);
      })
      .catch((err) => setErrors(err));
    // router.delete(`/super-admin/sekolah/${data.id}`)
    // toast.success(res.data.data, {
    //   position: toast.POSITION.TOP_CENTER
    // });
  }

  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [jenjang, setJenjang] = useState('all');

  const filteredSekolah = sekolah.filter(sekolah =>
    sekolah.namaSekolah.toLowerCase().includes(search.toLowerCase())
    && sekolah.email.toLowerCase().includes(email.toLowerCase())
    && (jenjang === 'all' || sekolah.jenjang === jenjang)
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredSekolah.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredSekolah.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredSekolah.length > 0 ? getPageItems(currentPage) : [];

  const [data, setData] = useState({})
  const [open, setOpen] = useState(false)
  function handleOpen(data) {
    setData(data)
    setOpen(true)
  }

  function handleClose() {
    setData({})
    setOpen(false)
  }

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />

      {!open ? (
        <>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-lg md:text-2xl">{title}</h1>
            </div>
            <div className="justify-end items-end flex">
              <Link href="/super-admin/sekolah/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
            </div>
          </div>

          <input placeholder="Cari Nama Sekolah" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg" />
          <input placeholder="Cari Email" type="text" value={email} onChange={e => setEmail(e.target.value)} className="rounded-lg md:ml-2" />
          <select value={jenjang} onChange={e => setJenjang(e.target.value)} className="rounded-lg md:ml-2">
            <option value="all">Semua Kategori</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA/SMK">SMA/SMK</option>
          </select>
          <div className="text-right">Total: {sekolah.length}</div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Logo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Sekolah
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenjang
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kontak
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
                          {data.namaSekolah}
                        </td>
                        <td className="px-6 py-4">
                          {data.jenjang}
                        </td>
                        <td className="px-6 py-4">
                          {data.email} <br />
                          {data.noHp}
                        </td>
                        <td className="px-6 py-4">
                          <Link href={`/super-admin/sekolah/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-2">Edit</Link>
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
            activeClassName={"text-red-500"}
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
  console.log(data)
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">Detail Guru</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={handleClose} className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg">Kembali</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
        <h1>Nama Sekolah: {data.namaSekolah}</h1>
        <h1>Email: {data.email}</h1>
        <h1>noHp: {data.jadwalPelaksanaan}</h1>
        <h1>Jenjang: {data.jenjang}</h1>
      </div>
      <div className="my-2">
        <h1 className=" text-center">Visi</h1>
        <p className="block text-center justify-center items-center whitespace-pre-wrap">{data.visi}</p>
      </div>
      <div className="my-2">
        <h1 className=" text-center">Misi</h1>
        <p className="flex justify-center items-center whitespace-pre-wrap">{data.misi}</p>
      </div>
      <div className="my-2">
        <h1 className=" text-center">Alamat Lengkap</h1>
        <p className="flex justify-center items-center whitespace-pre-wrap">{data.alamatLengkap}</p>
      </div>
    </>
  )
}

SekolahIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default SekolahIndex;
