import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, Link, router } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";

const PrestasiIndex = ({ title, dataPrestasi, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const urlCreate = `/admin-sekolah/${dataSekolah.kode}/prestasi/create`;

  const handleDelete = (data) => {
    axios
      .delete(`/admin-sekolah/${dataSekolah.id}/prestasi/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.kode}/prestasi`);
        }, 2000);
      })
      .catch((err) => setErrors(err));
  };

  const [search, setSearch] = useState("");
  const [namaPeserta, setNamaPeserta] = useState("");
  const [kategoriLomba, setKategoriLomba] = useState("all");

  const filteredPrestasi = dataPrestasi.filter(
    (prestasi) =>
      prestasi.namaLomba.toLowerCase().includes(search.toLowerCase()) &&
      prestasi.namaPeserta.toLowerCase().includes(namaPeserta.toLowerCase()) &&
      (kategoriLomba === "all" || prestasi.kategoriLomba === kategoriLomba)
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredPrestasi.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredPrestasi.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems =
    filteredPrestasi.length > 0 ? getPageItems(currentPage) : [];

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="mt-14">
        <div className="mb-3 grid grid-cols-2">
          <h1 className="text-xl md:text-2xl font-bold mr-4">{title}</h1>
          <div className="items-end justify-end flex">
            <Link
              href={urlCreate}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Tambah
            </Link>
          </div>
        </div>

        <div className="flex mb-5">
          <input
            type="text"
            placeholder="Cari Nama Lomba"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg"
          />
          <input
            type="text"
            placeholder="Cari Nama Peserta"
            value={namaPeserta}
            onChange={(e) => setNamaPeserta(e.target.value)}
            className="rounded-lg md:ml-2"
          />
          <select
            className="rounded-lg md:ml-2"
            value={kategoriLomba}
            onChange={(e) => setKategoriLomba(e.target.value)}
          >
            <option value="all">Kategori Lomba</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Seni budaya">Seni budaya</option>
            <option value="Ilmu sosial">Ilmu sosial</option>
            <option value="Olahraga">Olahraga</option>
          </select>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Lomba
                </th>
                <th scope="col" className="px-6 py-3">
                  Kategori Lomba
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama Peserta
                </th>
                <th scope="col" className="px-6 py-3">
                  Status Peserta
                </th>
                <th scope="col" className="px-6 py-3">
                  Tingkat Prestasi
                </th>
                <th scope="col" className="px-6 py-3">
                  Target Capaian
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Aksi</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPageItems ? (
                currentPageItems.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{data.namaLomba}</td>
                    <td className="px-6 py-4">{data.kategoriLomba}</td>
                    <td className="px-6 py-4">{data.namaPeserta}</td>
                    <td className="px-6 py-4">{data.statusPeserta}</td>
                    <td className="px-6 py-4">{data.tingkatPrestasi}</td>
                    <td className="px-6 py-4">{data.targetCapaian}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link
                        as="button"
                        href={`prestasi/${data.id}/edit`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <PencilSquareIcon className="h-7 w-7" />
                      </Link>
                      <button
                        onClick={() => handleDelete(data)}
                        as="button"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ml-4"
                      >
                        <TrashIcon className="h-7 w-7" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">tidak ada data prestasi</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-8"}
        pageClassName={
          "mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"
        }
        breakClassName={
          "mx-2 bg-white text-blue-500 rounded-full cursor-not-allowed text-lg p-2"
        }
        activeClassName={"text-red-500"}
        previousClassName={
          "mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"
        }
        nextClassName={
          "mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"
        }
        disabledClassName={
          "mx-2 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed text-lg p-2"
        }
      />
    </>
  );
};

PrestasiIndex.layout = (page) => <AdminSekolahLayout children={page} />;
export default PrestasiIndex;
