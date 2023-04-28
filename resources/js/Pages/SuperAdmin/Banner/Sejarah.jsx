import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate"
import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import TabBanner from "./TabBanner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Sejarah = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const handleOpen = (data) => {
    setOpen(true);
    setData(data);
  }

  const handleClose = () => {
    if (values.imgName) {
      deleteImage();
    }
    setOpen(false);
    setData({});
  }

  const [errors, setErorrs] = useState({});
  const [values, setValues] = useState({
    imgName: "",
    imgUrl: "",
    deskripsi: "",
    jenisBanner: "sejarah",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
      ...values,
      [key]: value,
    }))
  }

  function handleChangeEdit(e) {
    const key = e.target.id;
    const value = e.target.value
    setValuesEdit(values => ({
      ...values,
      [key]: value,
    }))
  }

  //tambah
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
      folder: 'banner'
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

  function handleDelete(data) {
    axios
      .delete(`/super-admin/banner/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/banner-sejarah`);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  return (
    <>
      {data.status === "tambah" ? (
        <Add open={open} data={data} handleClose={handleClose} props={props} deleteImage={deleteImage} uploadImage={uploadImage} errors={errors} handleChange={handleChange} values={values} setErorrs={setErorrs} />
      ) : data.status === "edit" ? (
        <Edit open={open} data={data} handleClose={handleClose} props={props} errors={errors} handleChange={handleChangeEdit} setErorrs={setErorrs} />
      ) : (
        <>
          <Head title={props.title} />
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-xl md:text-2xl">{props.title}</h1>
            </div>
            <div className="justify-end items-end flex">
              <button onClick={() => handleOpen({ status: "tambah" })} className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">Tambah</button>
            </div>
          </div>

          <TabBanner />
          <table className="w-full table-auto">
            <thead>
              <tr className="font-bold">
                <th>Gambar</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.banner.map((data, i) => {
                return (
                  <>
                    <tr key={i} className="text-center">
                      <td className="justify-center items-center flex">
                        <img src={data.imgUrl} className="max-w-52 max-h-32 object-cover object-center" />
                      </td>
                      <td>{data.deskripsi}</td>
                      <td>
                        <div className="flex">
                          <button onClick={() => handleOpen({ status: "edit", data: data })} className="text-black bg-yellow-500 p-2 rounded-lg flex"><PencilSquareIcon className="w-5 h-5" />Edit</button>
                          <button onClick={() => handleDelete(data)} className="text-white bg-red-500 p-2 rounded-lg flex ml-1"><TrashIcon className="w-5 h-5" />Hapus</button>
                        </div>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

function Add({ handleClose, props, uploadImage, deleteImage, setErorrs, errors, handleChange, values }) {
  function handleSubmit() {
    axios
      .post(`/super-admin/banner`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/super-admin/banner-sejarah`);
        }, 2000);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Head title={props.title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-xl md:text-2xl">Edit Banner</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={() => handleClose()} className="text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-lg">Kembali</button>
        </div>
      </div>

      <div>
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
              <button onClick={uploadImage} as="button" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required>Upload</button>
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

    </>
  )
}

function Edit({ data, handleClose, props, setErorrs, errors }) {

  function handleChangeEdit(e) {
    const key = e.target.id;
    const value = e.target.value
    setValuesEdit(valuesEdit => ({
      ...valuesEdit,
      [key]: value,
    }))
  }

  const [valuesEdit, setValuesEdit] = useState({
    imgName: data.data.imgName,
    imgUrl: data.data.imgUrl,
    deskripsi: data.data.deskripsi,
    jenisBanner: data.data.jenisBanner,
  })

  //edit
  function deleteImageEdit() {
    axios
      .post('/delete-image', valuesEdit)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setValuesEdit({
          ...valuesEdit,
          imgUrl: "",
          imgName: "",
        })
      })
  }

  const uploadImageEdit = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'banner'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValuesEdit({
          ...valuesEdit,
          imgUrl: result.info.url,
          imgName: result.info.public_id,
        });
      }
    }
    )
    myWidget.open();
  }

  function handleSubmit() {
    axios
      .patch(`/super-admin/banner/${data.data.id}`, valuesEdit)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/banner-sejarah`);

      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  return (
    <>
      <ToastContainer autoClose={2000} />
      <Head title={props.title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-xl md:text-2xl">Edit Banner</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={() => handleClose()} className="text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-lg">Kembali</button>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gambar</label>
          {valuesEdit.imgName ? (
            <>
              <img src={valuesEdit.imgUrl} className="w-32 h-32 object-cover" />
              <button onClick={deleteImageEdit}>Hapus</button>
              {errors.imgName && (
                <span style={{ color: "red" }}>{errors.imgName[0]}</span>
              )}
            </>
          ) : (
            <>
              <button onClick={uploadImageEdit} as="button" type="text" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Judul Artikel" required>Upload</button>
              {errors.imgName && (
                <span style={{ color: "red" }}>{errors.imgName[0]}</span>
              )}
            </>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
        <textarea id="deskripsi" value={valuesEdit.deskripsi} onChange={handleChangeEdit} type="text" className="w-full min-h-[50vh] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" />
        {errors.deskripsi && (
          <span style={{ color: "red" }}>{errors.deskripsi[0]}</span>
        )}
      </div>
      <button onClick={handleSubmit} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </>
  )
}

Sejarah.layout = (page) => <SuperAdminTemplate children={page} />
export default Sejarah;
