import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SiswaTambah = ({ title, dataSiswa, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErorrs] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const [values, setValues] = useState({
    idSekolah: dataSekolah.id,
    namaSiswa: "",
    nis: "",
    nisn: "",
    kelas: "",
    tglLahir: "",
    jurusan: "",
    jenisKelamin: "",
    alamatLengkap: "",
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
      .post(`/admin-sekolah/${dataSekolah.id}/siswa`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.id}/siswa`);
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
                <label htmlFor="namaSiswa" className="block text-sm font-semibold leading-6 text-gray-900">Nama Siswa</label>
                <div className="mt-2.5">
                  <input value={values.namaSiswa} onChange={handleChange} type="text" name="namaSiswa" id="namaSiswa" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.namaSiswa && (
                  <span style={{ color: "red" }}>{errors.namaSiswa[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="nisn" className="block text-sm font-semibold leading-6 text-gray-900">NISN</label>
                <div className="mt-2.5">
                  <input value={values.nisn} onChange={handleChange} type="text" name="nisn" id="nisn" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.nisn && (
                  <span style={{ color: "red" }}>{errors.nisn[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="nis" className="block text-sm font-semibold leading-6 text-gray-900">
                  NIS
                </label>
                <div className="mt-2.5">
                  <input value={values.nis} onChange={handleChange} type="text" name="nis" id="nis" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.nis && (
                  <span style={{ color: "red" }}>{errors.nis[0]}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-5">
              <div>
                <label htmlFor="kelas" className="block text-sm font-semibold leading-6 text-gray-900">Kelas</label>
                <div className="mt-2.5">
                  <input value={values.kelas} onChange={handleChange} type="text" name="kelas" id="kelas" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.kelas && (
                  <span style={{ color: "red" }}>{errors.kelas[0]}</span>
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
                <label htmlFor="jurusan" className="block text-sm font-semibold leading-6 text-gray-900">Jurusan</label>
                <div className="mt-2.5">
                  <input value={values.jurusan} onChange={handleChange} type="text" name="jurusan" id="jurusan" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.jurusan && (
                  <span style={{ color: "red" }}>{errors.jurusan[0]}</span>
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

SiswaTambah.layout = (page) => <AdminSekolahLayout children={page} />;
export default SiswaTambah;
