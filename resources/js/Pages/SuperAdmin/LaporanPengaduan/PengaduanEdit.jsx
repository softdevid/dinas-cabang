import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PengaduanEdit = ({ data, handleClose }) => {
  const [errors, setErrors] = useState({})
  const [statusLaporan, setStatusLaporan] = useState(data.data.statusLaporan)

  function handleSubmit() {
    axios
      .patch(`/super-admin/pengaduan/${data.data.id}`, { statusLaporan: statusLaporan })
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
      <Head title="Detail Pengaduan" />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div className="text-md md:text-2xl">Detail Pengaduan</div>
        <div className="flex items-end justify-end">
          <button onClick={handleClose} className="text-white bg-gray-500 hover:bg-gray-600 rounded-lg p-2">Kembali</button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-bold text-xl">Judul Laporan:</h1>
          <p className="text-bold text-xl ml-4">{data.data.judulLaporan}</p>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-bold text-xl">Asal Pelapor:</h1>
          <p className="text-bold text-xl ml-4">{data.data.asalPelapor}</p>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-bold text-xl">Jenis Laporan:</h1>
          <p className="text-bold text-xl ml-4">{data.data.jenisLaporan}</p>
        </div>
        <h1 className="text-bold text-xl text-center">Isi Laporan:</h1>
        <div className="flex items-center justify-center">
          <p className="text-bold text-md ml-4 whitespace-pre-wrap">{data.data.isiLaporan}</p>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-bold text-xl">Status Laporan:</h1>
          <select value={statusLaporan} onChange={e => setStatusLaporan(e.target.value)}>
            <option value="">Pilih Status Laporan</option>
            <option value="terima">Diterima</option>
            <option value="tunda">Ditunda</option>
            <option value="selesai">Selesai</option>
          </select>
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-yellow-500 text-black hover:bg-yellow-600 p-2 rounded-lg">Update</button>
    </>
  )
}

PengaduanEdit.layout = (page) => <SuperAdminTemplate title={page} />
export default PengaduanEdit;
