import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head } from "@inertiajs/react";
import { useContext, useEffect } from "react";

const Index = ({
  title,
  dataSekolah,
  prestasiCount,
  guruCount,
  siswaCount,
}) => {
  const context = useContext(AdminSekolahContext);

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  return (
    <>
      <Head title={title} />
      <div className="mt-14">
        <div className="mb-3">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-3">
          <div className="col-span-2 md:col-span-1 text-white bg-purple-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Prestasi
            </h1>
            <p className="text-center">{prestasiCount}</p>
          </div>
          <div className="text-white bg-red-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Guru
            </h1>
            <p className="text-center">{guruCount}</p>
          </div>
          <div className="text-white bg-green-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Siswa
            </h1>
            <p className="text-center">{siswaCount}</p>
          </div>
        </div>
        {/* <div>
          <div className="block max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Info Sekolah
            </h5>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17"
                    </th>
                    <td className="px-4 py-2">Silver</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

Index.layout = (page) => <AdminSekolahLayout children={page} />;
export default Index;
