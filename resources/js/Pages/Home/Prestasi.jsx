import PrestasiIlmusosial from "@/Components/Prestasi/PrestasiIlmusosial";
import PrestasiOlahraga from "@/Components/Prestasi/PrestasiOlahraga";
import PrestasiSenibudaya from "@/Components/Prestasi/PrestasiSenibudaya";
import PrestasiTeknologi from "@/Components/Prestasi/PrestasiTeknologi";
import HomeLayout from "@/Layouts/HomeLayout";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Prestasi = ({ title, superadmin }) => {

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
                  src={superadmin.logoImgUrl}
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
        {olahraga &&
          <PrestasiOlahraga olahraga={olahraga} />
        }
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
        <PrestasiSenibudaya senibudaya={senibudaya} />
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
        <PrestasiTeknologi teknologi={teknologi} />
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
        <PrestasiIlmusosial sosial={sosial} />
        {/* end prestasi Sosial */}
      </div>
    </>
  )
}

Prestasi.layout = (page) => <HomeLayout children={page} />
export default Prestasi;
