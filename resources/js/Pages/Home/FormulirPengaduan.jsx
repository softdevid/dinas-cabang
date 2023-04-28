import HomeLayout from "@/Layouts/HomeLayout";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormulirPengaduan = (props) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    judulLaporan: "",
    isiLaporan: "",
    asalPelapor: "",
    jenisLaporan: "",
    imgName: "",
    imgUrl: "",
    statusLaporan: "terima",
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
      .post(`/formulir-pengaduan`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setValues({
          judulLaporan: "",
          isiLaporan: "",
          asalPelapor: "",
          jenisLaporan: "",
          imgName: "",
          imgUrl: "",
          statusLaporan: "terima",
        })

      })
      .catch((err) => setErrors(err.response.data.errors));
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
      folder: 'pengaduan'
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
      <Head title={props.title} />
      <ToastContainer autoClose={2000} />
      <h1 className="text-4xl text-center mt-8">{props.title}</h1>
      <div className="border-[1px] border-black w-[6%] mx-auto"></div>

      <div className="md:mx-[200px] mx-3 my-5">
        <div className="border-2 rounded-lg">
          <div className="m-3">
            <input type="text" id="judulLaporan" onChange={handleChange} value={values.judulLaporan} placeholder="Ketik judul Laporan anda" className="w-full" />
            {errors.judulLaporan && (
              <span style={{ color: "red" }}>{errors.judulLaporan[0]}</span>
            )}
            <textarea id="isiLaporan" onChange={handleChange} value={values.isiLaporan} placeholder="ketik isi Laporan Anda" className="w-full h-40 my-2"></textarea>
            {errors.isiLaporan && (
              <span style={{ color: "red" }}>{errors.isiLaporan[0]}</span>
            )}
            <input id="asalPelapor" onChange={handleChange} value={values.asalPelapor} type="text" placeholder="Ketik asal pelapor" className="w-full" />
            {errors.asalPelapor && (
              <span style={{ color: "red" }}>{errors.asalPelapor[0]}</span>
            )}
            <div>
              <select id="jenisLaporan" onChange={handleChange} value={values.jenisLaporan} className="w-full my-2">
                <option value="">Pilih jenis Pelaporan</option>
                <option value="pengaduan">Pengaduan</option>
                <option value="aspirasi">Aspirasi</option>
              </select>
            </div>
            {errors.jenisLaporan && (
              <span style={{ color: "red" }}>{errors.jenisLaporan[0]}</span>
            )}
            <div className="grid grid-cols-2 mt-4">
              <div className="my-2">
                <label>Upload Lampiran</label><br />
                {!values.imgName && (
                  <button onClick={uploadImage} className="p-2 bg-blue-500 rounded-lg">Upload</button>
                )}

                {values.imgName && (
                  <>
                    <img src={values.imgUrl} className="max-w-[200px] max-h-[200px]" />
                    <button onClick={deleteImage}>Hapus</button>
                  </>
                )}
              </div>
              <div className="justify-end items-end flex">
                <button onClick={handleSubmit} className="p-2 mt-4 bg-red-600 text-white rounded-lg text-right mx-auto">Lapor!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

FormulirPengaduan.layout = (page) => <HomeLayout children={page} />
export default FormulirPengaduan;
