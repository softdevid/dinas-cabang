import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PermohonanIndex = ({ title, permohonan }) => {
  const handleDelete = (data) => {
    if (confirm("Yakin ingin hapus?")) {
      axios
        .delete(`/super-admin/permohonan-informasi/${data.id}`)
        .then((res) => {
          toast.success(res.data.data, {
            position: toast.POSITION.TOP_CENTER
          });

          setTimeout(() => {
            router.get(`/super-admin/permohonan-informasi`);
          }, 1000);
        })
    }
  }

  const [search, setSearch] = useState('');

  const filteredPermohonan = permohonan.filter(data =>
    data.namaPermohonan.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredPermohonan.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredPermohonan.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }

  const handleDownload = (data) => {
    const link = document.createElement('a');
    link.href = data.pdfUrl;
    link.download = `${data.namaPermohonan}.docx`;
    link.click();
  };


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredPermohonan.length > 0 ? getPageItems(currentPage) : [];

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/permohonan-informasi/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
        </div>
      </div>

      <input placeholder="Cari Nama Permohonan Informasi" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg" />

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
                      {data.namaPermohonan}
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/super-admin/permohonan-informasi/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-2">Edit</Link>
                      <button onClick={() => handleDownload(data)} className="bg-sky-500 text-white p-2 rounded-lg mx-2">Download</button>
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
  )
}


PermohonanIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default PermohonanIndex;
