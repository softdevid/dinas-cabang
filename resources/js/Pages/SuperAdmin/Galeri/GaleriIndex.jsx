import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/20/solid";
import { Head, Link, router } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GaleriIndex = ({ title, galeri }) => {
  function handleDelete(data) {
    axios
      .delete(`/super-admin/galeri/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get('/super-admin/galeri')
        }, 2000);
      })
  }
  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-md md:text-2xl">{title}</h1>
        </div>
        <div className="flex items-end justify-end">
          <Link href={`/super-admin/galeri/create`} className="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Tambah</Link>
        </div>
      </div>

      <table className="w-full table-auto">
        <thead>
          <tr className="font-bold">
            <th>Gambar</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {galeri.map((data, i) => {
            return (
              <>
                <tr key={i} className="text-center">
                  <td className="justify-center items-center flex">
                    <img src={data.imgUrl} className="max-w-52 max-h-32 object-cover object-center" />
                  </td>
                  <td>{data.deskripsi}</td>
                  <td>
                    <div className="flex">
                      <Link href={`/super-admin/galeri/${data.id}/edit`} className="text-black bg-yellow-500 p-2 rounded-lg flex"><PencilSquareIcon className="w-5 h-5" />Edit</Link>
                      <button onClick={() => handleDelete(data)} className="text-white bg-red-500 p-2 rounded-lg flex ml-1"><TrashIcon className="w-5 h-5" />Hapus</button>
                    </div>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

GaleriIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default GaleriIndex;
