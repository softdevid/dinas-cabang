import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const GuruTambah = ({ title, dataGuru, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErorrs] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const [values, setValues] = useState({
    idSekolah: dataSekolah.id,
    namaGuru: dataGuru.namaGuru,
    nip: dataGuru.nip,
    mapel: dataGuru.mapel,
    jabatan: dataGuru.jabatan,
    tglLahir: dataGuru.tglLahir,
    jenisKelamin: dataGuru.jenisKelamin,
    alamatLengkap: dataGuru.alamatLengkap,
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
    // router.patch(`/admin-sekolah/${dataSekolah.id}/guru/${dataGuru.nip}`, values)
    // toast.success(res.data.data, {
    //   position: toast.POSITION.TOP_CENTER
    // });

    axios
      .patch(`/admin-sekolah/${dataSekolah.id}/guru/${dataGuru.nip}`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.id}/guru`);
        }, 2000);
        console.log(res)
      })
      .catch((err) => setErorrs(err.response.data.errors));
  }

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
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-5">
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

GuruTambah.layout = (page) => <AdminSekolahLayout children={page} />;
export default GuruTambah;