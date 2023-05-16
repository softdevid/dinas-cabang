import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LayananPublikTambah = ({ title }) => {
  const [errors, setErrors] = useState({})
  const [values, setValues] = useState(
    {
      namaLayanan: "",
      deskripsiLayanan: "",
      jenisLayanan: "",
      imgName: "",
      imgUrl: "",
      imgName1: "",
      imgUrl1: "",
      imgName2: "",
      imgUrl2: "",
      imgName3: "",
      imgUrl3: "",
    }
  );
  console.log(values)

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
      .post(`/super-admin/layanan-publik`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get('/super-admin/layanan-publik')
        }, 2000);
      })
      .catch((err) => setErrors(err.response.data.errors))
  }

  function handleKembali() {
    if (values.imgName != "") {
      deleteImageCover()
    }

    if (values.imgName1 != "") {
      deleteImage1()
    }

    if (values.imgName2 != "") {
      deleteImage2()
    }

    if (values.imgName3 != "") {
      deleteImage3()
    }

    router.get('/super-admin/layanan-publik')
  }

  function deleteImageCover() {
    axios
      .post('/super-admin/delete-image-cover', values)
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

  function deleteImage1() {
    axios
      .post('/super-admin/delete-image1', values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setValues({
          ...values,
          imgUrl1: "",
          imgName1: "",
        })
      })
  }

  function deleteImage2() {
    axios
      .post('/super-admin/delete-image2', values)
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

  function deleteImage3() {
    axios
      .post('/super-admin/delete-image3', values)
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

  const uploadImageCover = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'layanan publik'
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

  const uploadImage1 = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'layanan publik'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValues({
          ...values,
          imgUrl1: result.info.url,
          imgName1: result.info.public_id,
        });
      }
    }
    )
    myWidget.open();
  }

  const uploadImage2 = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'layanan publik'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
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

  const uploadImage3 = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'layanan publik'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
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
          <h1 className="text-md md:text-2xl">{title}</h1>
        </div>
        <div className="flex items-end justify-end">
          <button onClick={handleKembali} className="bg-gray-500 p-2 rounded-lg hover:bg-gray-600 text-white">Kembali</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="mb-2">
          <label>Nama Layanan</label><br />
          <div className="flex items-center">
            <div className="relative w-full">
              <input type="text" id="namaLayanan" className="p-2 rounded-md block w-full" value={values.namaLayanan} onChange={handleChange} />
              {errors.namaLayanan && (<span className="text-red-600">{errors.namaLayanan}</span>)}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label>Jenis Layanan</label><br />
          <div className="flex items-center">
            <div className="relative w-full">
              <select id="jenisLayanan" className="p-2 rounded-md block w-full" value={values.jenisLayanan} onChange={handleChange}>
                <option value="">Pilih jenis layanan</option>
                <option value="gratis">Gratis</option>
                <option value="berbayar">Berbayar</option>
              </select>
              {errors.jenisLayanan && (<span className="text-red-600">{errors.jenisLayanan}</span>)}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label>Gambar Cover (wajib)</label><br />
          <div className="flex items-center">
            <div className="relative w-full">
              {values.imgName ? (
                <>
                  <img src={values.imgUrl} className="max-w-[200px] max-h-[200px]" />
                  <button onClick={deleteImageCover}>Hapus</button>
                </>
              ) : (
                <>
                  <button onClick={uploadImageCover} type="text" className="p-2 rounded-md block w-full">Upload</button>
                  {errors.imgName && (<span className="text-red-600">{errors.imgName}</span>)}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label>Gambar 1 (optional)</label><br />
          <div className="flex items-center">
            <div className="relative w-full">
              {values.imgName1 ? (
                <>
                  <img src={values.imgUrl1} className="max-w-[200px] max-h-[200px]" />
                  <button onClick={deleteImage1}>Hapus</button>
                </>
              ) : (
                <button onClick={uploadImage1} type="text" className="p-2 rounded-md block w-full">Upload</button>
              )}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label>Gambar 2 (optional)</label><br />
          <div className="flex items-center">
            <div className="relative w-full">
              {values.imgName2 ? (
                <>
                  <img src={values.imgUrl2} className="max-w-[200px] max-h-[200px]" />
                  <button onClick={deleteImage2}>Hapus</button>
                </>
              ) : (
                <button onClick={uploadImage2} type="text" className="p-2 rounded-md block w-full">Upload</button>
              )}
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label>Gambar 3 (optional)</label><br />
          <div className="flex items-center">
            <div className="relative w-full">
              {values.imgName3 ? (
                <>
                  <img src={values.imgUrl3} className="max-w-[200px] max-h-[200px]" />
                  <button onClick={deleteImage3}>Hapus</button>
                </>
              ) : (
                <button onClick={uploadImage3} type="text" className="p-2 rounded-md block w-full">Upload</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <label>Deskripsi Layanan</label><br />
        <div className="flex items-center">
          <div className="relative w-full">
            <textarea type="text" id="deskripsiLayanan" className="h-32 rounded-md block w-full" value={values.deskripsiLayanan} onChange={handleChange} />
            {errors.deskripsiLayanan && (<span className="text-red-600">{errors.deskripsiLayanan}</span>)}
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">Simpan</button>
    </>
  )
}

LayananPublikTambah.layout = (page) => <SuperAdminTemplate children={page} />
export default LayananPublikTambah;
