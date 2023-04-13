import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilPejabatTambah = ({ title }) => {
  // const { errors } = usePage().props
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    namaPejabat: "",
    jabatan: "",
    profil: "",
    pendidikan: "",
    karir: "",
    penghargaan: "",
    imgName: "",
    imgUrl: "",
  })
  console.log(values);

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
      .post(`/super-admin/pejabat`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/pejabat`);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  function deleteImage() {
    axios
      .post('/delete-image', values)
      .then(setValues({
        ...values,
        imgUrl: "",
        imgName: "",
      }))
      .catch((err) => "")
  }

  const uploadImage = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'foto pejabat'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setValues({
          ...values,
          imgUrl: result.info.url,
          imgName: result.info.public_id,
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
          <button onClick={() => closeOpen()} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="namaPejabat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pejabat</label>
          <input value={values.namaPejabat} onChange={handleChange} type="text" id="namaPejabat" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama pejabat" required />
          {errors.namaPejabat && (
            <span style={{ color: "red" }}>{errors.namaPejabat[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="jabatan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jabatan</label>
          <input value={values.jabatan} onChange={handleChange} type="text" id="jabatan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pejabat" required />
          {errors.jabatan && (
            <span style={{ color: "red" }}>{errors.jabatan[0]}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="profil" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profil</label>
          <textarea id="profil" placeholder="Profil pejabat" value={values.profil} onChange={handleChange} type="text" className="w-full min-h-[20vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
          {errors.profil && (
            <span style={{ color: "red" }}>{errors.profil[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="pendidikan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pendidikan</label>
          <textarea id="pendidikan" placeholder="Pendidikan pejabat" value={values.pendidikan} onChange={handleChange} type="text" className="w-full min-h-[20vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
          {errors.pendidikan && (
            <span style={{ color: "red" }}>{errors.pendidikan[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="karir" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Karir</label>
          <textarea id="karir" placeholder="Karir pejabat" value={values.karir} onChange={handleChange} type="text" className="w-full min-h-[20vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
          {errors.karir && (
            <span style={{ color: "red" }}>{errors.karir[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="penghargaan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Penghargaan</label>
          <textarea id="penghargaan" placeholder="Penghargaan pejabat" value={values.penghargaan} onChange={handleChange} type="text" className="w-full min-h-[20vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
          {errors.penghargaan && (
            <span style={{ color: "red" }}>{errors.penghargaan[0]}</span>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Foto</label>
          {values.imgName ? (
            <>
              <img src={values.imgUrl} className="w-32 h-32 object-cover" />
              <button onClick={deleteImage}>Hapus</button>
              {errors.imgName && (
                <span style={{ color: "red" }}>{errors.imgName[0]}</span>
              )}
            </>
          ) : (
            <>
              <button onClick={uploadImage} as="button" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required>Upload</button>
              {errors.imgName && (
                <span style={{ color: "red" }}>{errors.imgName[0]}</span>
              )}
            </>
          )}
        </div>
      </div>

      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}


    </>
  )
}

ProfilPejabatTambah.layout = (page) => <SuperAdminTemplate children={page} />
export default ProfilPejabatTambah;
