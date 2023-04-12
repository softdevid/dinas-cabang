import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Guru = ({ title, guru }) => {

  const handleDelete = ({ id }) => {
    axios
      .delete(`/super-admin/berita/${id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get(`/super-admin/berita`);
        }, 1000);
      })
  }

  const [search, setSearch] = useState('');
  const [jabatan, setJabatan] = useState('all');
  const [mapel, setMapel] = useState('');

  const filteredGuru = guru.filter(guru =>
    guru.namaGuru.toLowerCase().includes(search.toLowerCase())
    && (jabatan === 'all' || guru.jabatan === jabatan)
    && guru.mapel.toLowerCase().includes(mapel.toLowerCase())
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredGuru.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredGuru.slice(startIndex, endIndex);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = getPageItems(currentPage);

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2 mb-4">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        {/* <div className="justify-end items-end flex">
          <Link href="/super-admin/berita/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
        </div> */}
      </div>

      <input placeholder="Cari Nama Guru" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg" />
      <input placeholder="Cari Mapel" type="text" value={mapel} onChange={e => setMapel(e.target.value)} className="rounded-lg ml-2" />
      <select value={jabatan} onChange={e => setJabatan(e.target.value)} className="rounded-lg ml-2">
        <option value="all">Semua Jabatan</option>
        <option value="kepala sekolah">Kepala Sekolah</option>
        <option value="guru">Guru</option>
      </select>
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
                      <Link href={`/super-admin/berita/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-1">Edit</Link>
                      <button className="bg-sky-500 text-white p-2 rounded-lg mx-1">Detail</button>
                      <button onClick={() => handleDelete({ id: data.id })} className="bg-red-500 mx-1 text-white p-2 rounded-lg">Hapus</button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>

    </>
  )
}


Guru.layout = (page) => <SuperAdminTemplate children={page} />
export default Guru;
