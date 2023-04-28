import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Prestasi = ({ prestasiOlahraga, prestasiSenibudaya, prestasiTeknologi, prestasiIlmusosial, title }) => {
  console.log(prestasiOlahraga)
  const [olahraga, setOlahraga] = useState(false);
  const openOlahraga = () => {
    setOlahraga(!olahraga);
    setSenibudaya(false);
    setTeknologi(false);
    setSosial(false);
  }

  const [senibudaya, setSenibudaya] = useState(false);
  const openSenibudaya = () => {
    setSenibudaya(!senibudaya);
    setOlahraga(false);
    setTeknologi(false);
    setSosial(false);
  }

  const [teknologi, setTeknologi] = useState(false);
  const openTeknologi = () => {
    setTeknologi(!teknologi);
    setSenibudaya(false);
    setOlahraga(false);
    setSosial(false);
  }

  const [sosial, setSosial] = useState(false);
  const openSosial = () => {
    setSosial(!sosial);
    setSenibudaya(false);
    setOlahraga(false);
    setTeknologi(false);
  }

  return (
    <>
      <Head title={title} />
      <div>
        <div className="w-full h-64 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="items-center justify-center flex h-64">
              <b className="text-3xl">{title}</b>
            </div>
            <div className="hidden md:block">
              <div className="items-center justify-center h-64 flex">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="w-32 h-32"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black w-[10%] mx-auto mb-7 hidden md:block"></div>
        <div className="w-full h-64 block md:hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="items-center justify-center flex h-64">
              <b className="text-3xl text-blue-600">{title}</b>
            </div>
            <div className=" items-center justify-center flex">
              <div className="border-[1px] border-black w-[10%] -mt-52"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[200px] mx-3">
        {/* prestasi olahraga */}
        <h2 id="accordion-flush-heading-2" onClick={openOlahraga}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Prestasi Olahraga</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        {olahraga && (
          <div
            id="accordion-flush-body-2"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="overflow-x-auto py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <table>
                <tr>
                  <th className="px-4 py-2 text-sm">#</th>
                  <th className="px-4 py-2 text-sm">Nama Lomba</th>
                  <th className="px-4 py-2 text-sm">Kategori Lomba</th>
                  <th className="px-4 py-2 text-sm">Nama Peserta</th>
                  <th className="px-4 py-2 text-sm">Status Peserta</th>
                  <th className="px-4 py-2 text-sm">Asal Instansi</th>
                  <th className="px-4 py-2 text-sm">Penanggung jawab dan pelaksana</th>
                  <th className="px-4 py-2 text-sm">Target Capaian</th>
                  <th className="px-4 py-2 text-sm">Jadwal Pelaksanaan</th>
                  <th className="px-4 py-2 text-sm">Sumber Anggaran</th>
                  <th className="px-4 py-2 text-sm">Tingkat prestasi</th>
                </tr>
                {prestasiOlahraga.data.length > 0 ? (
                  <>
                    {prestasiOlahraga.data.map((data, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td className="px-4 py-2 text-sm">{data.namaLomba}</td>
                          <td className="px-4 py-2 text-sm">{data.kategoriLomba}</td>
                          <td className="px-4 py-2 text-sm">{data.namaPeserta}</td>
                          <td className="px-4 py-2 text-sm">{data.statusPeserta}</td>
                          <td className="px-4 py-2 text-sm">{data.asalInstansi}</td>
                          <td className="px-4 py-2 text-sm">{data.penanggungJawab}</td>
                          <td className="px-4 py-2 text-sm">{data.targetCapaian}</td>
                          <td className="px-4 py-2 text-sm">{data.jadwalPelaksana}</td>
                          <td className="px-4 py-2 text-sm">{data.sumberAnggaran}</td>
                          <td className="px-4 py-2 text-sm">{data.tingkatPrestasi}</td>
                        </tr>
                      )
                    })}
                  </>
                ) : (
                  <span>Belum ada prestasi yang ditambah</span>
                )}
              </table>
            </div>
          </div>
        )}
        {/* end prestasi olahraga */}

        {/* prestasi seni budaya */}
        <h2 id="accordion-flush-heading-2" onClick={openSenibudaya}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Prestasi Seni Budaya</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        {senibudaya && (
          <div
            id="accordion-flush-body-2"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="overflow-x-auto py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <table>
                <tr>
                  <th className="px-2">#</th>
                  <th className="px-2">Nama Lomba</th>
                  <th className="px-2">Kategori Lomba</th>
                  <th className="px-2">Nama Peserta</th>
                  <th className="px-2">Status Peserta</th>
                  <th className="px-2">Asal Instansi</th>
                  <th className="px-2">Penanggung jawab dan pelaksana</th>
                  <th className="px-2">Target Capaian</th>
                  <th className="px-2">Jadwal Pelaksanaan</th>
                  <th className="px-2">Sumber Anggaran</th>
                  <th className="px-3 text-sm">Tingkat prestasi</th>
                </tr>
              </table>
            </div>
          </div>
        )}
        {/* end prestasi seni budaya */}

        {/* prestasi Teknologi */}
        <h2 id="accordion-flush-heading-2" onClick={openTeknologi}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Prestasi Teknologi</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        {teknologi && (
          <div
            id="accordion-flush-body-2"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="overflow-x-auto py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <table>
                <tr>
                  <th className="px-2">#</th>
                  <th className="px-2">Nama Lomba</th>
                  <th className="px-2">Kategori Lomba</th>
                  <th className="px-2">Nama Peserta</th>
                  <th className="px-2">Status Peserta</th>
                  <th className="px-2">Asal Instansi</th>
                  <th className="px-2">Penanggung jawab dan pelaksana</th>
                  <th className="px-2">Target Capaian</th>
                  <th className="px-2">Jadwal Pelaksanaan</th>
                  <th className="px-2">Sumber Anggaran</th>
                  <th className="px-3 text-sm">Tingkat prestasi</th>
                </tr>
              </table>
            </div>
          </div>
        )}
        {/* end prestasi Teknologi */}


        {/* prestasi sosial */}
        <h2 id="accordion-flush-heading-2" onClick={openSosial}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Prestasi Ilmu Sosial</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        {sosial && (
          <div
            id="accordion-flush-body-2"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="overflow-x-auto py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <table>
                <tr>
                  <th className="px-2">#</th>
                  <th className="px-2">Nama Lomba</th>
                  <th className="px-2">Kategori Lomba</th>
                  <th className="px-2">Nama Peserta</th>
                  <th className="px-2">Status Peserta</th>
                  <th className="px-2">Asal Instansi</th>
                  <th className="px-2">Penanggung jawab dan pelaksana</th>
                  <th className="px-2">Target Capaian</th>
                  <th className="px-2">Jadwal Pelaksanaan</th>
                  <th className="px-2">Sumber Anggaran</th>
                  <th className="px-3 text-sm">Tingkat prestasi</th>
                </tr>
              </table>
            </div>
          </div>
        )}
        {/* end prestasi Sosial */}
      </div>
    </>
  )
}

Prestasi.layout = (page) => <HomeLayout children={page} />
export default Prestasi;
