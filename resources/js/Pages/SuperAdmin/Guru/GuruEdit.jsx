import { Head, router, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";


const GuruEdit = ({ title, guru, dataSekolah }) => {
  const [errors, setErorrs] = useState({});

  const [values, setValues] = useState({
    idSekolah: guru.idSekolah,
    namaGuru: guru.namaGuru,
    nip: guru.nip,
    mapel: guru.mapel,
    jabatan: guru.jabatan,
    tglLahir: guru.tglLahir,
    jenisKelamin: guru.jenisKelamin,
    agama: guru.agama,
    email: guru.email,
    noHp: guru.noHp,
    alamatLengkap: guru.alamatLengkap,
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
      .patch(`/super-admin/guru/${guru.id}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/super-admin/guru`);
        }, 2000);
      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />

      <div>
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        </div>
        <div className="mb-7">
          <div className="mx-auto max-w-3xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
              <div>
                <label htmlFor="idSekolah" className="block text-sm font-semibold leading-6 text-gray-900">Asal Sekolah</label>
                <div className="mt-2.5">
                  <select value={values.idSekolah} onChange={handleChange} id="idSekolah" className="block w-full overflow-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>Pilih sekolah</option>
                    {dataSekolah.map((data) => {
                      return (
                        <>
                          <option value={data.id}>{data.namaSekolah} - {data.jenjang}</option>
                        </>
                      )
                    })}
                  </select>
                </div>
                {errors.idSekolah && (
                  <span style={{ color: "red" }}>{errors.idSekolah[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="namaGuru" className="block text-sm font-semibold leading-6 text-gray-900">Nama Guru</label>
                <div className="mt-2.5">
                  <input value={values.namaGuru} onChange={handleChange} type="text" name="namaGuru" id="namaGuru" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.namaGuru && (
                  <span style={{ color: "red" }}>{errors.namaGuru[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="nip" className="block text-sm font-semibold leading-6 text-gray-900">NIP</label>
                <div className="mt-2.5">
                  <input value={values.nip} onChange={handleChange} type="text" name="nip" id="nip" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.nip && (
                  <span style={{ color: "red" }}>{errors.nip[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="mapel" className="block text-sm font-semibold leading-6 text-gray-900">
                  Mengampu Mapel
                </label>
                <div className="mt-2.5">
                  <input value={values.mapel} onChange={handleChange} type="text" name="mapel" id="mapel" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.mapel && (
                  <span style={{ color: "red" }}>{errors.mapel[0]}</span>
                )}
              </div>



              <div>
                <label htmlFor="jabatan" className="block text-sm font-semibold leading-6 text-gray-900">Jabatan</label>
                <div className="mt-2.5">
                  <input value={values.jabatan} onChange={handleChange} type="text" name="jabatan" id="jabatan" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.jabatan && (
                  <span style={{ color: "red" }}>{errors.jabatan[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input value={values.email} onChange={handleChange} type="text" name="email" id="email" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="noHp" className="block text-sm font-semibold leading-6 text-gray-900">No Handphone</label>
                <div className="mt-2.5">
                  <input value={values.noHp} onChange={handleChange} type="text" name="noHp" id="noHp" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.noHp && (
                  <span style={{ color: "red" }}>{errors.noHp[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="tglLahir" className="block text-sm font-semibold leading-6 text-gray-900">Tanggal Lahir</label>
                <div className="mt-2.5">
                  <input value={values.tglLahir} onChange={handleChange} type="date" name="tglLahir" id="tglLahir" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.tglLahir && (
                  <span style={{ color: "red" }}>{errors.tglLahir[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="jenisKelamin" className="block text-sm font-semibold leading-6 text-gray-900">
                  Jenis Kelamin
                </label>
                <div className="mt-2.5">
                  <select id="jenisKelamin" value={values.jenisKelamin} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                {errors.jenisKelamin && (
                  <span style={{ color: "red" }}>{errors.jenisKelamin[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="agama" className="block text-sm font-semibold leading-6 text-gray-900">
                  Agama
                </label>
                <div className="mt-2.5">
                  <select id="agama" value={values.agama} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih Agama</option>
                    <option value="Islam">Islam</option>
                    <option value="Katholik">Katholik</option>
                    <option value="Kristen Protestan">Kristen Protestan</option>
                    <option value="Buddha">Buddha</option>
                    <option value="Hindhu">Hindhu</option>
                    <option value="Konghucu">Konghucu</option>
                  </select>
                </div>
                {errors.agama && (
                  <span style={{ color: "red" }}>{errors.agama[0]}</span>
                )}
              </div>
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

GuruEdit.layout = (page) => <SuperAdminTemplate children={page} />;
export default GuruEdit;
