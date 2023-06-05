import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const FormulirAdd = (props) => {
  const [values, setValues] = useState({
    namaFormulir: "",
    file: null,
    jenis: "tambah",
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


  console.log(usePage().props)

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/super-admin/formulir', values)
  }

  return (
    <>
      <div>
        <label>Nama Formulir</label>
        <input onChange={handleChange} type="text" className="block p-2" />
        {props.errors.namaFormulir && <span className="text-red-500">{props.errors.namaFormulir}</span>}
      </div>
      <div>
        <label>File</label>
        <input onChange={handleChangeFile} type="file" className="block p-2" />
      </div>
      <button onClick={handleSubmit} type="submit">SImpan</button>
    </>
  )
}

FormulirAdd.layout = (page) => <SuperAdminTemplate children={page} />
export default FormulirAdd;
