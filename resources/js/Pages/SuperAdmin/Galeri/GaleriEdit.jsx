import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GaleriEdit = ({ title, galeri }) => {
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    judul: galeri.judul,
    deskripsi: galeri.deskripsi,
    jenis: galeri.jenis,
    imgName: galeri.imgName,
    imgUrl: galeri.imgUrl,
    imgName2: galeri.imgName2,
    imgUrl2: galeri.imgUrl2,
    imgName3: galeri.imgName3,
    imgUrl3: galeri.imgUrl3,
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
      .patch(`/super-admin/galeri/${galeri.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/galeri`);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  //gambar 1
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
      sources: ['local', 'camera', 'unsplash'],
      folder: 'galeri'
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

  //gambar 2
  function deleteImage2() {
    axios
      .post('/delete-image', values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setValues({
          ...values,
          imgUrl2: "",
          imgName2: "",
        })
      })
  }

  const uploadImage2 = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'galeri'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setValues({
          ...values,
          imgUrl2: result.info.url,
          imgName2: result.info.public_id,
        });
      }
    }
    )
    myWidget.open();
  }

  //gambar 3
  function deleteImage3() {
    axios
      .post('/delete-image', values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setValues({
          ...values,
          imgUrl3: "",
          imgName3: "",
        })
      })
  }

  const uploadImage3 = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'galeri'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        setValues({
          ...values,
          imgUrl3: result.info.url,
          imgName3: result.info.public_id,
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
          <Link href="/super-admin/galeri" className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar Utama (wajib)</label>
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
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar 2</label>
          {values.imgName2 ? (
            <>
              <img src={values.imgUrl2} className="w-32 h-32 object-cover" />
              <button onClick={deleteImage2}>Hapus</button>
              {errors.imgName2 && (
                <span style={{ color: "red" }}>{errors.imgName2[0]}</span>
              )}
            </>
          ) : (
            <>
              <button onClick={uploadImage2} as="button" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required>Upload</button>
              {errors.imgName2 && (
                <span style={{ color: "red" }}>{errors.imgName2[0]}</span>
              )}
            </>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar 3</label>
          {values.imgName3 ? (
            <>
              <img src={values.imgUrl3} className="w-32 h-32 object-cover" />
              <button onClick={deleteImage3}>Hapus</button>
              {errors.imgName3 && (
                <span style={{ color: "red" }}>{errors.imgName3[0]}</span>
              )}
            </>
          ) : (
            <>
              <button onClick={uploadImage3} as="button" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required>Upload</button>
              {errors.imgName3 && (
                <span style={{ color: "red" }}>{errors.imgName3[0]}</span>
              )}
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-6">
          <label htmlFor="judul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Judul (optional)</label>
          <input value={values.judul} onChange={handleChange} type="text" id="judul" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul" required />
          {errors.judul && (
            <span style={{ color: "red" }}>{errors.judul[0]}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="jenis" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori Artikel</label>
          <select value={values.jenis} onChange={handleChange} id="jenis" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Pilih Kategori Galeri</option>
            <option value="foto">Foto</option>
            <option value="infografis">Infografis</option>
          </select>
          {errors.jenis && (
            <span style={{ color: "red" }}>{errors.jenis[0]}</span>
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

GaleriEdit.layout = (page) => <SuperAdminTemplate children={page} />
export default GaleriEdit;
