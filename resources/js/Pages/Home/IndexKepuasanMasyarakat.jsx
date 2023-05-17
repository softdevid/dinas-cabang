import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const IndexKepuasanMasyarakat = ({ title, dataIkm, superadmin }) => {
  const [hukum, setHukum] = useState(false);
  const openHukum = () => {
    setHukum(!hukum);
  }

  const [pengertian, setPengertian] = useState(false);
  const openPengertian = () => {
    setPengertian(!pengertian);
  }

  const [ikm, setIkm] = useState(false);
  const openIkm = () => {
    setIkm(!ikm);
  }

  return (
    <>
      <Head title={title} />
      <div>
        <div className="w-full h-64 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="items-center justify-center flex h-64">
              <b className="text-3xl text-center">{title}</b>
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
              <b className="text-3xl text-blue-600 text-center">{title}</b>
            </div>
            <div className=" items-center justify-center flex">
              <div className="border-[1px] border-black w-[6%] -mt-48"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[200px] mx-5">
        {/* Dasar hukum */}
        <h2 id="accordion-flush-heading-1" onClick={openHukum}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Dasar Hukum</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
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
        {hukum && (
          <div
            id="accordion-flush-body-1"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                {dataIkm.dasarHukum}
              </p>
            </div>
          </div>
        )}
        {/* end dasar hukum */}

        {/* Pengertian */}
        <h2 id="accordion-flush-heading-1" onClick={openPengertian}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Pengertian</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
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
        {pengertian && (
          <div
            id="accordion-flush-body-1"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                {dataIkm.pengertian}
              </p>
            </div>
          </div>
        )}
        {/* end pengertian */}

        {/* ikm */}
        <h2 id="accordion-flush-heading-1" onClick={openIkm}>
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Index Kepuasan Masyarakat</span>
            <svg
              data-accordion-icon
              className="w-6 h-6 rotate-180 shrink-0"
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
        {ikm && (
          <div
            id="accordion-flush-body-1"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
              <img src={dataIkm.imgUrl} className="max-w-[500px] max-h-[500px]" />
            </div>
          </div>
        )}
        {/* ikm */}

      </div>
    </>
  )
}

IndexKepuasanMasyarakat.layout = (page) => <HomeLayout children={page} />
export default IndexKepuasanMasyarakat;
