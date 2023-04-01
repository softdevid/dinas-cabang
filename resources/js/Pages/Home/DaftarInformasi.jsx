import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const DaftarInformasi = (props) => {
  const [profil, setProfil] = useState(true);
  const openProfil = () => {
    setProfil(!profil);
  }
  console.log(profil);

  return (
    <>
      <Head title={props.title} />
      <h1 className="text-4xl text-center mt-8">{props.title}</h1>
      <div className="border-[1px] border-black w-[6%] mx-auto"></div>
      <div className="md:mx-[200px] mx-5">
        <h2 id="accordion-flush-heading-2" onClick={() => openProfil()}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Profil Organisasi Perangkat Daerah</span>
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
        {profil && (
          <div
            id="accordion-flush-body-2"
            aria-labelledby="accordion-flush-heading-2"
          >
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                <div className="mb-2">
                  <h1 className="text-lg font-bold">A. Alamat Lengkap:</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="mb-2">
                  <h1 className="text-lg font-bold">B. Lingkup kegiatan:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, laudantium.</p>
                </div>
                <div className="mb-2">
                  <h1 className="text-lg font-bold">C. Maksud dan tujuan:</h1>
                  <div className="ml-3">
                    <h1 className="mt-2 text-md font-bold">Visi</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, temporibus?</p>
                    <h1 className="mt-2 text-md font-bold">Misi</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, consequatur?</p>
                  </div>
                </div>
                <div className="mb-2">
                  <h1 className="text-lg font-bold">D. Tugas dan Fungsi:</h1>
                  <h1 className="mt-2 text-md font-bold">Tugas Pokok</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iste?</p>
                  <h1 className="mt-2 text-md font-bold">Fungsi</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iste?</p>
                </div>
                <div className="mb-2">
                  <h1 className="text-lg font-bold">E. Unit Kerja Dibawahnya</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iste?</p>
                </div>
                <div className="mb-2">
                  <h1 className="text-lg font-bold">F. Struktur Organisasi</h1>
                  <img src="https://source.unsplash.com/600x400?random" width="600" height="400" />
                </div>
              </p>
            </div>
          </div>
        )}

      </div>
    </>
  )
}

DaftarInformasi.layout = (page) => <HomeLayout children={page} />
export default DaftarInformasi;
