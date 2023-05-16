// import { SuperAdminContext } from "@/context/admin-sekolah-context";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";


const ProfilEdit = ({ title, dataSiswa, profil }) => {
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    idUser: profil.idUser,
    namaSuperAdmin: profil.namaSuperAdmin,
    alamatLengkap: profil.alamatLengkap,
    noHp: profil.noHp,
    email: profil.email,
    password: "",
    lingkupKegiatan: profil.lingkupKegiatan,
    visi: profil.visi,
    misi: profil.misi,
    tugasPokok: profil.tugasPokok,
    fungsi: profil.fungsi,
    unitKerjaDibawahnya: profil.unitKerjaDibawahnya,
    organisasiImgName: profil.organisasiImgName,
    organisasiImgUrl: profil.organisasiImgUrl,
    visiImgName: profil.visiImgName,
    visiImgUrl: profil.visiImgUrl,
    misiImgName: profil.misiImgName,
    misiImgUrl: profil.misiImgUrl,
    logoImgUrl: profil.logoImgUrl,
    logoImgName: profil.logoImgName,
  });

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
      .patch(`/super-admin/profil/${profil.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/super-admin/profil`);
        }, 2000);
      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  const uploadImageLogo = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'super admin'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValues({
          ...values,
          logoImgUrl: result.info.url,
          logoImgName: result.info.public_id,
        });
      }
    })
    myWidget.open();
  }

  const uploadImageVisi = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'super admin'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValues({
          ...values,
          visiImgUrl: result.info.url,
          visiImgName: result.info.public_id,
        });
      }
    })
    myWidget.open();
  }

  const uploadImageMisi = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'super admin'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValues({
          ...values,
          misiImgUrl: result.info.url,
          misiImgName: result.info.public_id,
        });
      }
    })
    myWidget.open();
  }

  const uploadImageOrganisasi = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'super admin'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setValues({
          ...values,
          organisasiImgUrl: result.info.url,
          organisasiImgName: result.info.public_id,
        });
      }
    })
    myWidget.open();
  }

  //delete gambar logo, organisasi, visi, misi cover
  function deleteImageLogo() {
    setValues({
      ...values,
      logoImgUrl: "",
      logoImgName: "",

    })
  }

  function deleteImageVisi() {
    setValues({
      ...values,
      visiImgName: "",
      visiImgUrl: "",
    })
  }

  function deleteImageMisi() {
    setValues({
      ...values,
      misiImgName: "",
      misiImgUrl: "",
    })
  }

  function deleteImageOrganisasi() {
    setValues({
      ...values,
      organisasiImgName: "",
      organisasiImgUrl: "",

    })
  }

  function handleKembali() {
    router.get('/super-admin/profil')
  }

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />

      <div className="mt-5">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          </div>
          <div className="flex items-end justify-end">
            <button onClick={handleKembali} className="bg-gray-500 text-white hover:bg-gray-600 p-2 rounded-lg">Kembali</button>
          </div>
        </div>

        <div className="mb-7">
          <div className="mx-auto max-w-3xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              <div>
                <label htmlFor="namaSuperAdmin" className="block text-sm font-semibold leading-6 text-gray-900">Nama Sekolah</label>
                <div className="mt-2.5">
                  <input value={values.namaSuperAdmin} onChange={handleChange} type="text" name="namaSuperAdmin" id="namaSuperAdmin" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.namaSuperAdmin && (
                  <span style={{ color: "red" }}>{errors.namaSuperAdmin[0]}</span>
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
                <label htmlFor="logo" className="block text-sm font-semibold leading-6 text-gray-900">
                  Organisasi Cover
                </label>
                <div className="mt-2.5">
                  {values.organisasiImgName ? (
                    <>
                      <img src={values.organisasiImgUrl} className="object-cover object-center w-30 h-30" />
                      <button onClick={deleteImageOrganisasi}>Hapus</button>
                    </>
                  ) : (
                    <button onClick={uploadImageOrganisasi} type="button" name="organisasiImg" id="organisasiImg" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Upload</button>
                  )}
                </div>
                {errors.organisasiImgName && (
                  <span style={{ color: "red" }}>{errors.organisasiImgName[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="visi" className="block text-sm font-semibold leading-6 text-gray-900">
                  Visi Cover
                </label>
                <div className="mt-2.5">
                  {values.visiImgName ? (
                    <>
                      <img src={values.visiImgUrl} className="object-cover object-center w-30 h-30" />
                      <button onClick={deleteImageVisi}>Hapus</button>
                    </>
                  ) : (
                    <button onClick={uploadImageVisi} type="button" name="organisasiImg" id="organisasiImg" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Upload</button>
                  )}
                </div>
                {errors.visiImgName && (
                  <span style={{ color: "red" }}>{errors.visiImgName[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="misi" className="block text-sm font-semibold leading-6 text-gray-900">
                  Misi Cover
                </label>
                <div className="mt-2.5">
                  {values.misiImgName ? (
                    <>
                      <img src={values.misiImgUrl} className="object-cover object-center w-30 h-30" />
                      <button onClick={deleteImageMisi}>Hapus</button>
                    </>
                  ) : (
                    <button onClick={uploadImageMisi} type="button" name="organisasiImg" id="organisasiImg" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Upload</button>
                  )}
                </div>
                {errors.misiImgName && (
                  <span style={{ color: "red" }}>{errors.misiImgName[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="logo" className="block text-sm font-semibold leading-6 text-gray-900">
                  Logo
                </label>
                <div className="mt-2.5">
                  {values.logoImgName ? (
                    <>
                      <img src={values.logoImgUrl} className="object-cover object-center w-30 h-30" />
                      <button onClick={deleteImageLogo}>Hapus</button>
                    </>
                  ) : (
                    <button onClick={uploadImageLogo} type="button" name="logo" id="logo" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Upload</button>
                  )}
                </div>
                {errors.logoImgName && (
                  <span style={{ color: "red" }}>{errors.logoImgName[0]}</span>
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
            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="fungsi"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Fungsi
              </label>
              <div className="mt-2.5">
                <textarea value={values.fungsi} onChange={handleChange}
                  name="fungsi"
                  id="fungsi"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.fungsi && (
                <span style={{ color: "red" }}>{errors.fungsi[0]}</span>
              )}
            </div>
            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="tugasPokok"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Tugas Pokok
              </label>
              <div className="mt-2.5">
                <textarea value={values.tugasPokok} onChange={handleChange}
                  name="tugasPokok"
                  id="tugasPokok"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.tugasPokok && (
                <span style={{ color: "red" }}>{errors.tugasPokok[0]}</span>
              )}
            </div>
            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="unitKerjaDibawahnya"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Unit kerja dibawahnya
              </label>
              <div className="mt-2.5">
                <textarea value={values.unitKerjaDibawahnya} onChange={handleChange}
                  name="unitKerjaDibawahnya"
                  id="unitKerjaDibawahnya"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.unitKerjaDibawahnya && (
                <span style={{ color: "red" }}>{errors.unitKerjaDibawahnya[0]}</span>
              )}
            </div>
            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="lingkupKegiatan"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Lingkup kegiatan
              </label>
              <div className="mt-2.5">
                <textarea value={values.lingkupKegiatan} onChange={handleChange}
                  name="lingkupKegiatan"
                  id="lingkupKegiatan"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.lingkupKegiatan && (
                <span style={{ color: "red" }}>{errors.lingkupKegiatan[0]}</span>
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

ProfilEdit.layout = (page) => <SuperAdminTemplate children={page} />;
export default ProfilEdit;
