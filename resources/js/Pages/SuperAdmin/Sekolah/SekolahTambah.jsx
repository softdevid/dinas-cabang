import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SekolahTambah = (profil) => {
  // const { errors } = usePage().props
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    namaSekolah: "",
    email: "",
    jenjang: "",
    password: "",
  })
  // console.log(values);

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
      .post(`/super-admin/sekolah`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get(`/super-admin/sekolah`);
        }, 2000);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  return (
    <>
      <Head title="Tambah Artikel" />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">Tambah Akun Sekolah</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={() => closeOpen()} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="namaSekolah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Sekolah</label>
          <input value={values.namaSekolah} onChange={handleChange} type="text" id="namaSekolah" className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Sekolah" required />
          {errors.namaSekolah && (
            <span style={{ color: "red" }}>{errors.namaSekolah[0]}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="jenjang" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori Artikel</label>
          <select value={values.jenjang} onChange={handleChange} id="jenjang" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Pilih Jenjang Sekolah</option>
            <option value="SD">SD</option>
            <option value="SMP">SMP</option>
            <option value="SMA/SMK">SMA/SMK</option>
          </select>
          {errors.jenjang && (
            <span style={{ color: "red" }}>{errors.jenjang[0]}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input value={values.email} onChange={handleChange} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="softdev@gmail.com" required />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input value={values.password} onChange={handleChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password[0]}</span>
          )}
        </div>
      </div>
      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}


    </>
  )
}

SekolahTambah.layout = (page) => <SuperAdminTemplate children={page} />
export default SekolahTambah;
