import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Link, router } from "@inertiajs/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormulirIndex = (props) => {
  function handleDelete(data) {
    router.delete(`/super-admin/formulir/${data.id}`)
  }

  const message = () => {
    toast.success(props.flash.message, {
      position: toast.POSITION.TOP_CENTER
    })
  }

  return (
    <>
      {props.flash.message && (
        <>
          {message()}
        </>
      )}
      <ToastContainer autoClose={2000} />
      <div>
        <table>
          <thead>
            <tr>
              <th>Nama Formulir</th>
              <th>Nama File</th>
            </tr>
          </thead>
          <tbody>
            {props.formulir.map((data, i) => {
              return (
                <>
                  <tr key={i}>
                    <td>{data.namaFormulir}</td>
                    <td>{data.file}</td>
                    <td>
                      <Link href={`/super-admin/formulir/${data.id}/edit`}>Edit</Link>
                      <button onClick={() => handleDelete(data)}>Hapus</button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

FormulirIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default FormulirIndex;
