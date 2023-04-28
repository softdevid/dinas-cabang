import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router, usePage } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SejarahEdit = ({ title, sejarah }) => {

  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    deskripsi: sejarah.deskripsi,
    imgUrl: sejarah.imgUrl,
    imgName: sejarah.imgName,
    imgName2: sejarah.imgName2,
    imgUrl2: sejarah.imgUrl2,
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
      .patch(`/super-admin/sejarah/${sejarah.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/super-admin/sejarah`);
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
        })
        setValues({
          ...values,
          imgUrl: "",
          imgName: "",
        })
      })
      .catch((err) => "")
  }

  function deleteImage2() {
    axios
      .post('/delete-image-sejarah', values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        })
        setValues({
          ...values,
          imgUrl2: "",
          imgName2: "",
        })
      })
      .catch((err) => "")
  }

  const uploadImage = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'foto sejarah'
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

  const uploadImage2 = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'foto sejarah'
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
  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/sejarah" className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="mb-6">
          <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi Sejarah</label>
          <textarea id="deskripsi" placeholder="Deskripsi sejarah" value={values.deskripsi} onChange={handleChange} type="text" className="w-full min-h-[50vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
          {errors.deskripsi && (
            <span style={{ color: "red" }}>{errors.deskripsi[0]}</span>
          )}
        </div>

        <div className="flex gap-10">
          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover 1 (wajib)</label>
            {values.imgName ? (
              <>
                <img src={values.imgUrl} className="w-52 h-32 object-cover" />
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
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover 2 (optional)</label>
            {values.imgName2 ? (
              <>
                <img src={values.imgUrl2} className="w-52 h-32 object-cover" />
                <button onClick={deleteImage2}>Hapus</button>
              </>
            ) : (
              <>
                <button onClick={uploadImage2} as="button" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required>Upload</button>
              </>
            )}
          </div>
        </div>
      </div>

      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      {/* </form> */}


    </>
  )
}

SejarahEdit.layout = (page) => <SuperAdminTemplate children={page} />
export default SejarahEdit;
