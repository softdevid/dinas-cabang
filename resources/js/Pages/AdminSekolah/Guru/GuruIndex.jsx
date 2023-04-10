import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, Link } from "@inertiajs/react";
import React, { useContext, useEffect } from "react";

const GuruIndex = ({ title, dataGuru, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  return (
    <>
      <Head title={title} />
      <div className="mt-14">
        <div className="mb-3 flex">
          <h1 className="text-xl md:text-2xl font-bold mr-4">{title}</h1>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Tambah
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  NIP
                </th>
                <th scope="col" className="px-6 py-3">
                  Nama
                </th>
                <th scope="col" className="px-6 py-3">
                  Mengampu
                </th>
                <th scope="col" className="px-6 py-3">
                  Jabatan
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {dataGuru ? (
                dataGuru.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.nip}
                    </th>
                    <td className="px-6 py-4">{data.namaGuru}</td>
                    <td className="px-6 py-4">{data.mapel}</td>
                    <td className="px-6 py-4">{data.jabatan}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        as="button"
                        href={`guru/${data.nip}/edit`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">tidak ada data guru</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

GuruIndex.layout = (page) => <AdminSekolahLayout children={page} />;
export default GuruIndex;
