import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = () => {
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    judulBerita: "",
    namaPenulis: "",
    kategoriBerita: "",
    deskripsi: "",
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
      .post(`/super-admin/berita`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/berita`);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  function handleKembali() {
    if (values.imgName != "") {
      deleteImage()
    }

    router.get('/super-admin/berita')
  }

  function deleteImage() {
    axios
      .post('/delete-image', values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setValues({
          ...values,
          imgUrl: "",
          imgName: "",
        })
      })
  }

  const uploadImage = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera'],
      folder: 'berita'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
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
      <Head title="Tambah Artikel" />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">Tambah Artikel</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={handleKembali} className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul Artikel</label>
          <input value={values.judulBerita} onChange={handleChange} type="text" id="judulBerita" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required />
          {errors.judulBerita && (
            <span style={{ color: "red" }}>{errors.judulBerita[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="namaPenulis" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Penulis</label>
          <input value={values.namaPenulis} onChange={handleChange} type="text" id="namaPenulis" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Penulis" required />
          {errors.namaPenulis && (
            <span style={{ color: "red" }}>{errors.namaPenulis[0]}</span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="kategoriBerita" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori Artikel</label>
          <select value={values.kategoriBerita} onChange={handleChange} id="kategoriBerita" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Pilih Kategori Artikel</option>
            <option value="berita">Berita</option>
            <option value="informasi">Informasi</option>
          </select>
          {errors.kategoriBerita && (
            <span style={{ color: "red" }}>{errors.kategoriBerita[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar</label>
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
      <div className="mb-6">
        <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
        <textarea id="deskripsi" value={values.deskripsi} onChange={handleChange} type="text" className="w-full min-h-[50vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
        {errors.deskripsi && (
          <span style={{ color: "red" }}>{errors.deskripsi[0]}</span>
        )}
      </div>
      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}


    </>
  )
}

Add.layout = (page) => <SuperAdminTemplate children={page} />
export default Add;
