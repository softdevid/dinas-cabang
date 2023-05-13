import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, Link, router } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";

const SiswaIndex = ({ title, dataSiswa, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const urlCreate = `/admin-sekolah/${dataSekolah.kode}/siswa/create`

  const handleDelete = (data) => {
    axios
      .delete(`/admin-sekolah/${dataSekolah.id}/siswa/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.kode}/siswa`);
        }, 2000);
      })
      .catch((err) => setErrors(err));
  }

  const [namaSiswa, setNamaSiswa] = useState('');

  const filteredSiswa = dataSiswa.filter(siswa =>
    siswa.namaSiswa.toLowerCase().includes(namaSiswa.toLowerCase())
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredSiswa.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredSiswa.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredSiswa.length > 0 ? getPageItems(currentPage) : [];

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="mt-14">
        <div className="mb-3 grid grid-cols-2">
          <h1 className="text-xl md:text-2xl font-bold mr-4">{title}</h1>
          <div className="flex justify-end items-end">
            <Link href={urlCreate} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Tambah</Link>
          </div>
        </div>

        <input placeholder="Cari Nama Siswa" type="text" value={namaSiswa} onChange={e => setNamaSiswa(e.target.value)} className="rounded-lg" />

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-2">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  NIS
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Kelas
                </th>
                <th scope="col" className="px-6 py-3">
                  Jurusan
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Lahir
                </th>
                <th scope="col" className="px-6 py-3">
                  Jenis Kelamin
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Aksi</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageItems ? (
                currentPageItems.map((data, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{data.nis}</td>
                    <td className="px-6 py-4">{data.namaSiswa}</td>
                    <td className="px-6 py-4">{data.kelas}</td>
                    <td className="px-6 py-4">{data.jurusan}</td>
                    <td className="px-6 py-4">{data.tglLahir}</td>
                    <td className="px-6 py-4">{data.jenisKelamin}</td>
                    <td className="px-6 py-4 text-center">
                      <Link
                        as="button"
                        href={`siswa/${data.id}/edit`}
                        className="text-lg font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(data)}
                        as="button"
                        className="ml-2 text-lg font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">tidak ada data siswa</td>
                </tr>
              )}
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

      </div>
    </>
  );
};

SiswaIndex.layout = (page) => <AdminSekolahLayout children={page} />;
export default SiswaIndex;
