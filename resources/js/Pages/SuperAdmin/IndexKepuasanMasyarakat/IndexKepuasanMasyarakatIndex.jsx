import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router } from "@inertiajs/react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndexKepuasanMasyarakatIndex = ({ title, ikm }) => {
  const [errors, setErorrs] = useState({})
  const [values, setValues] = useState({
    dasarHukum: ikm.dasarHukum,
    pengertian: ikm.pengertian,
    imgName: ikm.imgName,
    imgUrl: ikm.imgUrl,
  })
  console.log(ikm)

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
      .patch(`/super-admin/index-kepuasan-masyarakat/${ikm.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/super-admin/index-kepuasan-masyarakat`);
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
      <ToastContainer autoClose={2000} />
      <Head title={title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-md md:text-2xl">{title}</h1>
        </div>
      </div>

      <div className="grid-cols-1 md:grid-cols-2 grid gap-8">
        <div>
          <label>Dasar Hukum</label>
          <textarea type="text" value={values.dasarHukum} onChange={handleChange} id="dasarHukum" className="block bg-gray-50 rounded-lg border p-2 w-full h-20" />
        </div>
        <div>
          <label>Pengertian</label>
          <textarea type="text" value={values.pengertian} onChange={handleChange} id="pengertian" className="block bg-gray-50 rounded-lg border p-2 w-full h-20" />
        </div>
        <div>
          <label>Upload Gambar Index Kepuasan Masyarakat</label>
          {values.imgName ? (
            <>
              <img src={values.imgUrl} className="max-w-[200px] max-h-[200px]" />
              <button onClick={deleteImage}>Hapus</button>
            </>
          ) : (
            <button onClick={uploadImage} className="block p-2 bg-black text-white rounded-lg">Upload gambar</button>
          )}
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-yellow-500 p-2 rounded-lg text-black mt-4">Update</button>
    </>
  )
}

IndexKepuasanMasyarakatIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default IndexKepuasanMasyarakatIndex;
