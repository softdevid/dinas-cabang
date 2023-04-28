import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KalenderPendidikanIndex = ({ title, kalenderPendidikan }) => {
  const [data, setData] = useState({})
  const [open, setOpen] = useState(false)
  const handleOpen = (data) => {
    setData(data)
    setOpen(true)
  }

  const handleClose = () => {
    setData({})
    setOpen(false)
  }

  function handleDelete(data) {
    axios
      .delete(`/super-admin/kalender-pendidikan/${data.id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get(`/super-admin/kalender-pendidikan`);
        }, 2000);

      })
  }
  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      {data.status == "tambah" ? (
        <Add handleClose={handleClose} />
      ) : data.status === "edit" ? (
        <Edit handleClose={handleClose} data={data} />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-md md:text-2xl">{title}</h1>
            </div>
            <div className="flex justify-end items-end">
              <button onClick={() => handleOpen({ status: "tambah" })} className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Tambah</button>
            </div>
          </div>
          {kalenderPendidikan.length <= 0 && <b className="text-center items-center justify-center flex my-5 text-2xl font-bold">Tidak ada kalender PENDIDIKAN</b>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kalenderPendidikan.map((data, i) => {
              return (
                <>
                  <div className="max-h-[500px]">
                    <img key={i} src={data.imgUrl} className="max-w-[200px] max-h-[200px] mx-auto" />
                    <div className="p-3 flex justify-center items-center">
                      <button onClick={() => handleOpen({ status: "edit", data })} className="text-black bg-yellow-500 p-2 mx-1 rounded-lg">Edit</button>
                      <button onClick={() => handleDelete(data)} className="text-white bg-red-500 p-2 mx-1 rounded-lg">Hapus</button>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </>
      )
      }
    </>
  )
}

function Add({ handleClose }) {
  const [errors, setErorrs] = useState({});
  const [values, setValues] = useState({
    imgName: "",
    imgUrl: "",
    statusKalender: "",
  })
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
      .post(`/super-admin/kalender-pendidikan`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        router.get(`/super-admin/kalender-pendidikan`);

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
      folder: 'kalender pendidikan'
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-md md:text-2xl">Tambah Kalender</h1>
        </div>
        <div className="flex justify-end items-end">
          <button onClick={handleClose} className="p-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600">Batal</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="mb-2">
          <label>Pilih Status Kalender</label>
          <select id="statusKalender" onChange={handleChange} value={values.statusKalender} className="w-full h-auto block">
            <option value="">Status Kalender</option>
            <option value="Aktif">Aktif</option>
            <option value="Diarsipkan">Diarsipkan</option>
          </select>
          {errors.statusKalender && (
            <span className="text-red">{errors.statusKalender[0]}</span>
          )}
        </div>
        <div className="mb-2">
          <label>Upload Gambar</label>
          {!values.imgName && (
            <>
              <button onClick={uploadImage} className="p-2 block bg-gray-400 text-black hover:text-white hover:bg-gray-500 rounded-lg">Upload</button>
              {errors.imgName && (
                <span className="text-red">{errors.imgName[0]}</span>
              )}
            </>
          )}
          {values.imgName && (
            <>
              <img src={values.imgUrl} className="max-w-[200px} max-h-[200px]" />
              <button onClick={deleteImage}>Hapus</button>
            </>
          )}
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Simpan</button>
    </>
  )
}

function Edit({ handleClose, data }) {
  console.log(data)
  const [errors, setErorrs] = useState({});
  const [values, setValues] = useState({
    imgName: data.data.imgName,
    imgUrl: data.data.imgUrl,
    statusKalender: data.data.statusKalender,
  })
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
      .patch(`/super-admin/kalender-pendidikan/${data.data.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get(`/super-admin/kalender-pendidikan`);
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
      folder: 'kalender pendidikan'
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
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-md md:text-2xl">Edit Kalender</h1>
        </div>
        <div className="flex justify-end items-end">
          <button onClick={handleClose} className="p-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600">Batal</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="mb-2">
          <label>Pilih Status Kalender</label>
          <select id="statusKalender" onChange={handleChange} value={values.statusKalender} className="w-auto h-auto block">
            <option value="">Status Kalender</option>
            <option value="Aktif">Aktif</option>
            <option value="Diarsipkan">Diarsipkan</option>
          </select>
          {errors.statusKalender && (
            <span className="text-red">{errors.statusKalender[0]}</span>
          )}
        </div>
        <div className="mb-2">
          <label>Upload Gambar</label>
          {!values.imgName && (
            <>
              <button onClick={uploadImage} className="p-2 block bg-gray-400 text-black hover:text-white hover:bg-gray-500 rounded-lg">Upload</button>
              {errors.imgName && (
                <span className="text-red">{errors.imgName[0]}</span>
              )}
            </>
          )}
          {values.imgName && (
            <>
              <img src={values.imgUrl} className="max-w-[200px} max-h-[200px]" />
              <button onClick={deleteImage}>Hapus</button>
            </>
          )}
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Simpan</button>
    </>
  )
}
KalenderPendidikanIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default KalenderPendidikanIndex;
