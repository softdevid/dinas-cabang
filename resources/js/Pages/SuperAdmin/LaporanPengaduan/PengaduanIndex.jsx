import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import PengaduanEdit from "./PengaduanEdit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PengaduanIndex = ({ title, pengaduan }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})

  function handleOpen(data) {
    setData(data)
    setOpen(true)
  }

  function handleClose() {
    setData({})
    setOpen(false)
  }

  function handleDelete(data) {
    axios
      .delete(`/super-admin/pengaduan/${data.id}`, data)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        })
        setTimeout(() => {
          router.get('/super-admin/pengaduan')
        }, 2000);
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div>
        <h1 className="text-md md:text-2xl">{title}</h1>
      </div>

      {data.status === "edit" ? (
        <>
          <PengaduanEdit data={data} handleClose={handleClose} />
        </>
      ) : (
        <>
          <table className="overflow-x-auto mx-auto my-5">
            <thead>
              <tr className="border-b">
                <th className="text-bold px-4 py-2">#</th>
                <th className="text-bold px-4 py-2">Judul Laporan</th>
                <th className="text-bold px-4 py-2">Asal Pelapor</th>
                <th className="text-bold px-4 py-2">Jenis Laporan</th>
                <th className="text-bold px-4 py-2">Isi laporan</th>
                <th className="text-bold px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pengaduan.length > 0 ? (
                <>
                  {pengaduan.map((data, i) => {
                    return (
                      <>
                        <tr className="text-center" key={i}>
                          <td>{i + 1}</td>
                          <td className="text-bold px-4 py-2">{data.judulLaporan}</td>
                          <td className="text-bold px-4 py-2">{data.asalPelapor}</td>
                          <td className="text-bold px-4 py-2">{data.jenisLaporan}</td>
                          <td className="text-bold px-4 py-2">{data.isiLaporan.slice(0, 100, "...")}</td>
                          <td className="text-bold px-4 py-2">
                            <button onClick={() => handleOpen({ status: "edit", data })}>Update</button>
                            <button onClick={() => handleDelete(data)}>Hapus</button>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </>
              ) : (
                <td colSpan={5} className="text-center">Tidak ada laporan pengaduan</td>
              )}
              <tr></tr>
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

PengaduanIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default PengaduanIndex;
