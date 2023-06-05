import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";

const FormulirEdit = ({ title, formulir }) => {
  const [values, setValues] = useState({
    id: formulir.id,
    namaFormulir: formulir.namaFormulir,
    file: null,
  })
  console.log(values)

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

    router.post(`/super-admin/formulir`, values)
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Nama Formulir</label>
          <input value={values.namaFormulir} onChange={handleChange} type="text" className="block p-2" />
        </div>
        <div>
          <label>File</label>
          <input onChange={handleChangeFile} type="file" className="block p-2" />
        </div>
        <button type="submit">SImpan</button>
      </form>
    </>
  )
}

FormulirEdit.layout = (page) => <SuperAdminTemplate children={page} />
export default FormulirEdit;
