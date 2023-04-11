import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, Link, router } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrestasiIndex = ({ title, dataPrestasi, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const urlCreate = `/admin-sekolah/${dataSekolah.id}/prestasi/create`

  const handleDelete = (data) => {
    axios
      .delete(`/admin-sekolah/${dataSekolah.id}/prestasi/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.id}/prestasi`);
        }, 2000);
      })
      .catch((err) => setErrors(err));
  }

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="mt-14">
        <div className="mb-3 flex">
          <h1 className="text-xl md:text-2xl font-bold mr-4">{title}</h1>
          <Link href={urlCreate}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Tambah
          </Link>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
              {dataPrestasi ? (
                dataPrestasi.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.namaLomba}
                    </th>
                    <td className="px-6 py-4">{data.kategoriLomba}</td>
                    <td className="px-6 py-4">{data.namaPeserta}</td>
                    <td className="px-6 py-4">{data.statusPeserta}</td>
                    <td className="px-6 py-4">{data.tingkatPrestasi}</td>
                    <td className="px-6 py-4">{data.targetCapaian}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        as="button"
                        href={`prestasi/${data.id}/edit`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(data)}
                        as="button"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ml-2"
                      >
                        Hapus
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
    </>
  );
};

PrestasiIndex.layout = (page) => <AdminSekolahLayout children={page} />;
export default PrestasiIndex;
