import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";
import { Head, router, usePage } from "@inertiajs/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const SiswaTambah = ({ title, dataPrestasi, dataSekolah }) => {
  const context = useContext(AdminSekolahContext);
  const [errors, setErorrs] = useState({});

  useEffect(() => {
    context.setDtSekolah(dataSekolah);
  }, []);

  const [values, setValues] = useState({
    idSekolah: dataSekolah.id,
    namaLomba: "",
    kategoriLomba: "",
    namaPeserta: "",
    statusPeserta: "",
    asalInstansi: dataSekolah.namaSekolah,
    penanggungJawab: "",
    targetCapaian: "",
    jadwalPelaksanaan: "",
    sumberAnggaran: "",
    tingkatPrestasi: "",
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
    console.log(values);
    axios
      .post(`/admin-sekolah/${dataSekolah.id}/prestasi`, values)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });
        setTimeout(() => {
          router.get(`/admin-sekolah/${dataSekolah.id}/prestasi`);
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
                <label htmlFor="namaLomba" className="block text-sm font-semibold leading-6 text-gray-900">Nama Lomba</label>
                <div className="mt-2.5">
                  <input value={values.namaLomba} onChange={handleChange} type="text" name="namaLomba" id="namaLomba" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.namaLomba && (
                  <span style={{ color: "red" }}>{errors.namaLomba[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="kategoriLomba" className="block text-sm font-semibold leading-6 text-gray-900">Kategori Lomba</label>
                <div className="mt-2.5">
                  <select id="kategoriLomba" value={values.kategoriLomba} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih Kategori Lomba</option>
                    <option value="Olahraga">Olahraga</option>
                    <option value="Teknologi">Teknologi</option>
                    <option value="Seni budaya">Seni budaya</option>
                    <option value="Ilmu Sosial">Ilmu Sosial</option>
                  </select>
                </div>
                {errors.kategoriLomba && (
                  <span style={{ color: "red" }}>{errors.kategoriLomba[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="namaPeserta" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nama Peserta
                </label>
                <div className="mt-2.5">
                  <input value={values.namaPeserta} onChange={handleChange} type="text" name="namaPeserta" id="namaPeserta" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.namaPeserta && (
                  <span style={{ color: "red" }}>{errors.namaPeserta[0]}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 mt-5">
              <div>
                <label htmlFor="statusPeserta" className="block text-sm font-semibold leading-6 text-gray-900">Status Peserta</label>
                <div className="mt-2.5">
                  <select id="statusPeserta" value={values.statusPeserta} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih Tingkat Prestasi</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Tidak Aktif">Tidak Aktif</option>
                  </select>
                </div>
                {errors.statusPeserta && (
                  <span style={{ color: "red" }}>{errors.statusPeserta[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="asalInstansi" className="block text-sm font-semibold leading-6 text-gray-900">Asal Instansi</label>
                <div className="mt-2.5">
                  <input value={values.asalInstansi} onChange={handleChange} type="text" name="asalInstansi" id="asalInstansi" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.asalInstansi && (
                  <span style={{ color: "red" }}>{errors.asalInstansi[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="tingkatPrestasi" className="block text-sm font-semibold leading-6 text-gray-900">
                  Tingkat Prestasi
                </label>
                <div className="mt-2.5">
                  <select id="tingkatPrestasi" value={values.tingkatPrestasi} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih Tingkat Prestasi</option>
                    <option value="Kecamatan">Kecamatan</option>
                    <option value="Kabupaten/Kota">Kabupaten/Kota</option>
                    <option value="Provinsi">Provinsi</option>
                    <option value="Nasional">Nasional</option>
                    <option value="Internasional">Internasional</option>
                  </select>
                </div>
                {errors.tingkatPrestasi && (
                  <span style={{ color: "red" }}>{errors.tingkatPrestasi[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="sumberAnggaran" className="block text-sm font-semibold leading-6 text-gray-900">Sumber Anggaran</label>
                <div className="mt-2.5">
                  <input value={values.sumberAnggaran} onChange={handleChange} type="text" name="sumberAnggaran" id="sumberAnggaran" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.sumberAnggaran && (
                  <span style={{ color: "red" }}>{errors.sumberAnggaran[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="targetCapaian" className="block text-sm font-semibold leading-6 text-gray-900">Target Capaian</label>
                <div className="mt-2.5">
                  <select id="targetCapaian" value={values.targetCapaian} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option value="">Pilih Target Capaian</option>
                    <option value="Juara 1">Juara 1</option>
                    <option value="Juara 2">Juara 2</option>
                    <option value="Juara 3">Juara 3</option>
                    <option value="Juara 4">Juara 4</option>
                    <option value="Juara 5">Juara 5</option>
                  </select>
                </div>
                {errors.targetCapaian && (
                  <span style={{ color: "red" }}>{errors.targetCapaian[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="jadwalPelaksanaan" className="block text-sm font-semibold leading-6 text-gray-900">Jadwal Pelaksanaan</label>
                <div className="mt-2.5">
                  <input value={values.jadwalPelaksanaan} onChange={handleChange} type="date" name="jadwalPelaksanaan" id="jadwalPelaksanaan" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.jadwalPelaksanaan && (
                  <span style={{ color: "red" }}>{errors.jadwalPelaksanaan[0]}</span>
                )}
              </div>
              <div>
                <label htmlFor="penanggungJawab" className="block text-sm font-semibold leading-6 text-gray-900">Penanggung Jawab</label>
                <div className="mt-2.5">
                  <input value={values.penanggungJawab} onChange={handleChange} type="text" name="penanggungJawab" id="penanggungJawab" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors.penanggungJawab && (
                  <span style={{ color: "red" }}>{errors.penanggungJawab[0]}</span>
                )}
              </div>
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
