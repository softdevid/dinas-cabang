import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PermohonanEdit = (props) => {
  console.log(props)
  const [values, setValues] = useState({
    namaFormulir: props.permohonan.namaFormulir,
    file: null,
    id: props.permohonan.id,
  })

  function handleChange(e) {
    setValues(values => ({
      ...values,
      namaFormulir: e.target.value
    }))
  }

  function handleChangeFile(e) {
    const file = e.target.files[0];
    setValues(values => ({
      ...values,
      file: file
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/super-admin/permohonan-informasi', values)
  }

  return (
    <>
      <Head title={props.title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-md md:text-2xl">{props.title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/permohonan-informasi" className="bg-gray-500  hover:bg-gray-600 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="mb-2">
          <label>Nama Formulir</label>
          <input value={values.namaFormulir} onChange={handleChange} type="text" className="block p-2 w-full border-[1px] rounded-lg" placeholder="Nama Formulir" />
          {props.errors.namaFormulir && <span className="text-red-500">{props.errors.namaFormulir}</span>}
        </div>
        <div className="mb-2">
          <label>File PDF</label>
          <input onChange={handleChangeFile} type="file" className="block rounded-lg p-2 w-full border-[1px]" />
          {props.errors.file && <span className="text-red-500">{props.errors.file}</span>}
        </div>
      </div>
      <button onClick={handleSubmit} type="submit" className="mt-3 hover:border-blue-500 bg-blue-500 text-white hover:bg-blue-600 p-2 rounded-lg">SImpan</button>
    </>
  )
}

PermohonanEdit.layout = (page) => <SuperAdminTemplate children={page} />
export default PermohonanEdit;
