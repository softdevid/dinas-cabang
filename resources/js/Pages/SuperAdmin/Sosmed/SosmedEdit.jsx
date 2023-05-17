import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SosmedEdit = ({ title, sosmed }) => {
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    namaMedsos: sosmed.namaMedsos,
    urlImage: sosmed.urlImage,
    urlSosmed: sosmed.urlSosmed,
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
      ...values,
      [key]: value,
    }))
  }

  function handleSubmit() {
    axios
      .patch(`/super-admin/sosmed/${sosmed.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/sosmed`);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  function handleKembali() {
    router.get('/super-admin/sosmed')
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
          <button onClick={handleKembali} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Medsos</label>
          <input value={values.namaMedsos} onChange={handleChange} type="text" id="namaMedsos" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Medsos" required />
          {errors.namaMedsos && (
            <span style={{ color: "red" }}>{errors.namaMedsos[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="urlImage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url Logo Sosmed</label>
          <input value={values.urlImage} onChange={handleChange} type="text" id="urlImage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Url logo sosmed" required />
          {errors.urlImage && (
            <span style={{ color: "red" }}>{errors.urlImage[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="urlSosmed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url Sosmed kamu</label>
          <input value={values.urlSosmed} onChange={handleChange} type="text" id="urlSosmed" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Url Sosmed kamu" required />
          {errors.urlSosmed && (
            <span style={{ color: "red" }}>{errors.urlSosmed[0]}</span>
          )}
        </div>
      </div>

      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}


    </>
  )
}

SosmedEdit.layout = (page) => <SuperAdminTemplate children={page} />
export default SosmedEdit;
