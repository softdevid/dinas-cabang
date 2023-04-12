import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Siswa = ({ title, siswa }) => {
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
  const [kategoriBerita, setKategoriBerita] = useState('all');

  const filteredSiswa = siswa.filter(data =>
    data.namaSiswa.toLowerCase().includes(search.toLowerCase())
    // && (kategoriBerita === 'all' || data.kategoriBerita === kategoriBerita)
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredSiswa.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredSiswa.slice(startIndex, endIndex);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = getPageItems(currentPage);

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/berita/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
        </div>
      </div>

      <input placeholder="Cari Nama Siswa" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg" />
      <span className="text-end">Total: {currentPageItems.length}</span>
      {/* <select value={kategoriBerita} onChange={e => setKategoriBerita(e.target.value)} className="rounded-lg ml-2">
        <option value="all">Semua Kategori</option>
        <option value="Berita">Berita</option>
        <option value="Informasi">Informasi</option>
      </select> */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Kelas
              </th>
              <th scope="col" className="px-6 py-3">
                Sekolah
              </th>
              <th scope="col" className="px-6 py-3">
                Tanggal Lahir
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
                    <td className="px-6 py-4">
                      {data.namaSiswa}
                    </td>
                    <td className="px-6 py-4">
                      {data.kelas}
                    </td>
                    <td className="px-6 py-4">
                      {/* {data.sekolah} */}
                    </td>
                    <td className="px-6 py-4">
                      {data.tglLahir}
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/super-admin/berita/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-2">Edit</Link>
                      <button className="bg-sky-500 text-white p-2 rounded-lg mx-2">Detail</button>
                      <button onClick={() => handleDelete({ id: data.id })} className="bg-red-500 mx-2 text-white p-2 rounded-lg">Hapus</button>
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


Siswa.layout = (page) => <SuperAdminTemplate children={page} />
export default Siswa;
