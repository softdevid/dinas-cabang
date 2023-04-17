import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SekolahEdit = ({ title, sekolah }) => {
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    namaSekolah: sekolah.namaSekolah,
    email: sekolah.email,
    jenjang: sekolah.jenjang,
    password: "",
    visi: sekolah.visi,
    misi: sekolah.misi,
    noHp: sekolah.noHp,
    alamatLengkap: sekolah.alamatLengkap,
    imgName: sekolah.imgName,
    imgUrl: sekolah.imgUrl,
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
      .patch(`/super-admin/sekolah/${sekolah.id}`, values)
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
      folder: 'logo sekolah'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log('Done! Here is the image info: ', result.info);
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
          <Link href="/super-admin/sekolah" className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4 md:mb-6">
          <label htmlFor="namaSekolah" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Sekolah</label>
          <input value={values.namaSekolah} onChange={handleChange} type="text" id="namaSekolah" className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Sekolah" required />
          {errors.namaSekolah && (
            <span style={{ color: "red" }}>{errors.namaSekolah[0]}</span>
          )}
        </div>

        <div className="mb-4 md:mb-6">
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

        <div className="mb-4 md:mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input value={values.email} onChange={handleChange} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="softdev@gmail.com" required />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email[0]}</span>
          )}
        </div>
        <div className="mb-4 md:mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password baru?</label>
          <input value={values.password} onChange={handleChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password[0]}</span>
          )}
        </div>

        <div className="mb-4 md:mb-6">
          <label htmlFor="noHp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No Hp</label>
          <input value={values.noHp} onChange={handleChange} type="text" id="noHp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(+62) 8...." required />
          {errors.noHp && (
            <span style={{ color: "red" }}>{errors.noHp[0]}</span>
          )}
        </div>
        <div className="mb-4 md:mb-6">
          {values.imgName ? (
            <>
              <label htmlFor="imgName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
              <img src={values.imgUrl} className="w-20 h-20 object-cover object-center" />
              <button onClick={deleteImage}>Hapus</button>
            </>
          ) : (
            <>
              <label htmlFor="imgName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
              <button onClick={uploadImage} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Upload</button>
            </>
          )}

          {errors.imgName && (
            <span style={{ color: "red" }}>{errors.imgName[0]}</span>
          )}
        </div>
      </div>

      <div className="mb-4 md:mb-6">
        <label htmlFor="visi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visi</label>
        <textarea value={values.visi} onChange={handleChange} id="visi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-4 md:mb-6">
        <label htmlFor="misi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Misi</label>
        <textarea value={values.misi} onChange={handleChange} id="misi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div className="mb-4 md:mb-6">
        <label htmlFor="alamatLengkap" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat Lengkap</label>
        <textarea value={values.alamatLengkap} onChange={handleChange} id="alamatLengkap" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>

      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}


    </>
  )
}

SekolahEdit.layout = (page) => <SuperAdminTemplate children={page} />
export default SekolahEdit;
