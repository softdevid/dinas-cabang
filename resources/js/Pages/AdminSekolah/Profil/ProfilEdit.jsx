import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const ProfilEdit = ({ title, dataSiswa, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErorrs] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const [values, setValues] = useState({
    idUser: dataSekolah.idUser,
    idSekolah: dataSekolah.id,
    namaSekolah: dataSekolah.namaSekolah,
    visi: dataSekolah.visi,
    misi: dataSekolah.misi,
    noHp: dataSekolah.noHp,
    email: dataSekolah.email,
    password: "",
    jenjang: dataSekolah.jenjang,
    alamatLengkap: dataSekolah.alamatLengkap,
    imgName: dataSekolah.imgName,
    imgUrl: dataSekolah.imgUrl,
  });
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
      .post(`/admin-sekolah/${values.idSekolah}/profil/update`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.id}/profil`);
        }, 2000);
      })
      .catch((err) => setErorrs(err.response.data.errors));
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
      .catch((err) => console.log(err))
  }

  console.log(values)

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />

      <div className="mt-14">
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        </div>
        <div className="mb-7">

          <div
            className="mx-auto mt-16 max-w-3xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              <div>
                <label htmlFor="namaSekolah" className="block text-sm font-semibold leading-6 text-gray-900">Nama Sekolah</label>
                <div className="mt-2.5">
                  <input value={values.namaSekolah} onChange={handleChange} type="text" name="namaSekolah" id="namaSekolah" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.namaSekolah && (
                  <span style={{ color: "red" }}>{errors.namaSekolah[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="noHp" className="block text-sm font-semibold leading-6 text-gray-900">No Hp</label>
                <div className="mt-2.5">
                  <input value={values.noHp} onChange={handleChange} type="text" name="noHp" id="noHp" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.noHp && (
                  <span style={{ color: "red" }}>{errors.noHp[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input value={values.email} onChange={handleChange} type="text" name="email" id="email" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                  Password Baru?
                </label>
                <div className="mt-2.5">
                  <input value={values.password} onChange={handleChange} type="password" name="password" id="password" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="jenjang" className="block text-sm font-semibold leading-6 text-gray-900">
                  Jenjang
                </label>
                <div className="mt-2.5">
                  <select value={values.jenjang} id="jenjang" onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih jenjang sekolah</option>
                    <option value="SD">SD</option>
                    <option value="SMP">SMP</option>
                    <option value="SMA/SMK">SMA/SMK</option>
                  </select>
                </div>
                {errors.jenjang && (
                  <span style={{ color: "red" }}>{errors.jenjang[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="logo" className="block text-sm font-semibold leading-6 text-gray-900">
                  Logo
                </label>
                <div className="mt-2.5">
                  {values.imgName ? (
                    <>
                      <img src={values.imgUrl} className="object-cover object-center w-30 h-30" />
                      <button onClick={deleteImage}>Hapus</button>
                    </>
                  ) : (
                    <button onClick={uploadImage} type="button" name="logo" id="logo" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Upload</button>
                  )}
                </div>
                {errors.imgName && (
                  <span style={{ color: "red" }}>{errors.imgName[0]}</span>
                )}
              </div>
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="visi"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Visi
              </label>
              <div className="mt-2.5">
                <textarea value={values.visi} onChange={handleChange}
                  name="visi"
                  id="visi"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.visi && (
                <span style={{ color: "red" }}>{errors.visi[0]}</span>
              )}
            </div>
            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="visi"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Misi
              </label>
              <div className="mt-2.5">
                <textarea value={values.misi} onChange={handleChange}
                  name="misi"
                  id="misi"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.misi && (
                <span style={{ color: "red" }}>{errors.misi[0]}</span>
              )}
            </div>

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="alamatLengkap"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Alamat Lengkap
              </label>
              <div className="mt-2.5">
                <textarea value={values.alamatLengkap} onChange={handleChange}
                  name="alamatLengkap"
                  id="alamatLengkap"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.alamatLengkap && (
                <span style={{ color: "red" }}>{errors.alamatLengkap[0]}</span>
              )}
            </div>
            <div className="mt-10">
              <button onClick={handleSubmit}
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProfilEdit.layout = (page) => <AdminSekolahLayout children={page} />;
export default ProfilEdit;
