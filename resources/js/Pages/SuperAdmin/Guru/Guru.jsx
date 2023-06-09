import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Guru = ({ title, guru }) => {

  const handleDelete = (data) => {
    axios
      .delete(`/super-admin/guru/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get(`/super-admin/guru`);
        }, 1000);
      })
  }

  const [search, setSearch] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [mapel, setMapel] = useState('');

  const filteredGuru = guru.filter(guru =>
    guru.namaGuru.toLowerCase().includes(search.toLowerCase())
    && guru.mapel.toLowerCase().includes(mapel.toLowerCase())
    && guru.jabatan.toLowerCase().includes(jabatan.toLowerCase())
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredGuru.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredGuru.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredGuru.length > 0 ? getPageItems(currentPage) : [];

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
          <div className="grid grid-cols-2 mb-4">
            <div>
              <h1 className="text-lg md:text-2xl">{title}</h1>
            </div>
            <div className="justify-end items-end flex">
              <Link href="/super-admin/guru/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
            </div>
          </div>

          <input placeholder="Cari Nama Guru" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg" />
          <input placeholder="Cari Mapel" type="text" value={mapel} onChange={e => setMapel(e.target.value)} className="rounded-lg ml-2" />
          <input placeholder="Cari Jabatan" type="text" value={mapel} onChange={e => setJabatan(e.target.value)} className="rounded-lg ml-2" />

          <div className="text-right">Total: {guru.length}</div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-4">
                    #
                  </th>
                  <th scope="col" className="px-2 py-4">
                    NIP
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Nama
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Mengampu
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Jabatan
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageItems.map((data, i) => {
                  return (
                    <>
                      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {i + 1}
                        </th>
                        <td className="px-2 py-4">
                          {data.nip}
                        </td>
                        <td className="px-2 py-4">
                          {data.namaGuru}
                        </td>
                        <td className="px-2 py-4">
                          {data.mapel}
                        </td>
                        <td className="px-2 py-4">
                          {data.jabatan}
                        </td>
                        <td className="px-2 py-4">
                          <Link href={`/super-admin/guru/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-1">Edit</Link>
                          <button onClick={() => handleOpen(data)} className="bg-sky-500 text-white p-2 rounded-lg mx-1">Detail</button>
                          <button onClick={() => handleDelete(data)} className="bg-red-500 mx-1 text-white p-2 rounded-lg">Hapus</button>
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
        <h1 className="text-bold font-lg">NIP: {data.nip}</h1>
        <h1 className="text-bold font-lg">Nama: {data.namaGuru}</h1>
        <h1 className="text-bold font-lg">Tanggal Lahir: {data.tglLahir}</h1>
        <h1 className="text-bold font-lg">Jenis Kelamin: {data.jenisKelamin}</h1>
        <h1 className="text-bold font-lg">Mengampu mapel: {data.mapel}</h1>
        <h1 className="text-bold font-lg">Agama: {data.agama}</h1>
        <h1 className="text-bold font-lg">No Hp: {data.noHp}</h1>
        <h1 className="text-bold font-lg">Dari Sekolah: {data.namaSekolah}</h1>
      </div>
      <h1 className="text-bold font-lg mt-4 whitespace-pre-wrap">Alamat Lengkap: {data.alamatLengkap}</h1>
    </>
  )
}

Guru.layout = (page) => <SuperAdminTemplate children={page} />
export default Guru;
