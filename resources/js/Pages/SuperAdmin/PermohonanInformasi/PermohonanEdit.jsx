import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PermohonanTambah = ({ title, permohonan }) => {
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState({
    namaPermohonan: permohonan.namaPermohonan,
    pdfName: permohonan.pdfName,
    pdfUrl: permohonan.pdfUrl,
  })

  function handleChange(e) {
    const key = e.target.id
    const value = e.target.value
    setValues(values => ({
      ...values,
      [key]: value
    }))
  }

  function handleSubmit() {
    axios
      .patch(`/super-admin/permohonan-informasi/${permohonan.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/permohonan-informasi`);

      })
      .catch((err) => setErrors(err.response.data.errors));
  }

  function deletePDF() {
    axios
      .post('/delete-pdf', values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setValues({
          ...values,
          pdfName: "",
          pdfUrl: "",
        })
      })
  }

  const uploadPDF = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera'],
      folder: 'pdf'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValues({
          ...values,
          pdfUrl: result.info.url,
          pdfName: result.info.public_id,
        });
      }
    }
    )
    myWidget.open();
  }

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/permohonan-informasi" className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="namaPermohonan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Formulir Permohonan Informasi</label>
          <input value={values.namaPermohonan} onChange={handleChange} type="text" id="namaPermohonan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Formulir" required />
          {errors.namaPermohonan && (
            <span style={{ color: "red" }}>{errors.namaPermohonan[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="pdf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File PDF</label>
          {values.pdfName ? (
            <>
              <span>File Sudah diupload</span><br />
              <button onClick={deletePDF}>Hapus</button>
            </>
          ) : (
            <>
              <button type="text" onClick={uploadPDF} id="pdfName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Upload PDF</button>
              {errors.pdfName && (
                <span style={{ color: "red" }}>{errors.pdfName[0]}</span>
              )}
            </>
          )}
        </div>
      </div>
      <button onClick={handleSubmit} className="text-white p-2 bg-blue-500 hover:bg-blue-600 rounded-lg">Simpan</button>
    </>
  )
}

PermohonanTambah.layout = (page) => <SuperAdminTemplate children={page} />
export default PermohonanTambah;
