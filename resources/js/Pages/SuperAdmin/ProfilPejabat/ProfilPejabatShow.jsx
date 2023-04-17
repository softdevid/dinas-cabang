import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilPejabatShow = ({ title, profilPejabat }) => {
  const [profil, setProfil] = useState(false);
  const openProfil = () => {
    setProfil(!profil);
  }

  const [karir, setKarir] = useState(false);
  const openKarir = () => {
    setKarir(!karir);
  }

  const [pendidikan, setPendidikan] = useState(false);
  const openPendidikan = () => {
    setPendidikan(!pendidikan);
  }

  const [penghargaan, setPenghargaan] = useState(false);
  const openPenghargaan = () => {
    setPenghargaan(!penghargaan);
  }
  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/pejabat" className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      {/* kepala dinas desktop */}
      <div className="hidden md:block">
        <h1 className="text-4xl text-center text-blue-600">
          {profilPejabat.jabatan}
        </h1>
        <div className="flex m-5">
          <div className="w-[40%] m-3">
            <div className="h-auto w-full justify-center items-center flex">
              <img
                src="https://source.unsplash.com/600x400?random"
                className="w-[250px] h-[350px] object-cover object-top rounded-lg"
              />
            </div>
          </div>
          <div className="w-[60%] m-3 justify-start items-start flex">
            <div className="h-64 w-full">
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1" onClick={openProfil}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>Profil</span>
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
                {profil && (
                  <div
                    id="accordion-flush-body-1"
                    aria-labelledby="accordion-flush-heading-1"
                  >
                    <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {profilPejabat.profil}
                      </p>
                    </div>
                  </div>
                )}

                <h2 id="accordion-flush-heading-2" onClick={openKarir}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>Karir</span>
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
                {karir && (
                  <div
                    id="accordion-flush-body-2"
                    aria-labelledby="accordion-flush-heading-2"
                  >
                    <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {profilPejabat.karir}
                      </p>
                    </div>
                  </div>
                )}

                <h2 id="accordion-flush-heading-3" onClick={openPendidikan}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>Pendidikan</span>
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
                {pendidikan && (
                  <div
                    id="accordion-flush-body-3"
                    aria-labelledby="accordion-flush-heading-3"
                  >
                    <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {profilPejabat.pendidikan}
                      </p>
                    </div>
                  </div>
                )}

                <h2 id="accordion-flush-heading-4" onClick={openPenghargaan}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>Penghargaan</span>
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
                {penghargaan && (
                  <div
                    id="accordion-flush-body-4"
                    aria-labelledby="accordion-flush-heading-4"
                  >
                    <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {profilPejabat.penghargaan}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end kepala dinas desktop */}

      {/* kepala dinas mobile */}
      <div className="block md:hidden">
        <h1 className="text-3xl text-center text-blue-600">
          {profilPejabat.jabatan}
        </h1>
        <div className="grid grid-cols-1 gap-8 m-5">
          <img
            src="https://source.unsplash.com/600x400?random"
            className="w-[250px] h-[400px] object-cover object-top mx-auto"
          />
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1" onClick={openProfil}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Profil</span>
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
            {profil && (
              <div
                id="accordion-flush-body-1"
                aria-labelledby="accordion-flush-heading-1"
              >
                <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {profilPejabat.profil}
                  </p>
                </div>
              </div>
            )}

            <h2 id="accordion-flush-heading-2" onClick={openKarir}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Karir</span>
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
            {karir && (
              <div
                id="accordion-flush-body-2"
                aria-labelledby="accordion-flush-heading-2"
              >
                <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {profilPejabat.karir}
                  </p>
                </div>
              </div>
            )}

            <h2 id="accordion-flush-heading-3" onClick={openPendidikan}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>Pendidikan</span>
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
            {pendidikan && (
              <div
                id="accordion-flush-body-3"
                aria-labelledby="accordion-flush-heading-3"
              >
                <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {profilPejabat.pendidikan}
                  </p>
                </div>
              </div>
            )}

            <h2 id="accordion-flush-heading-4" onClick={openPenghargaan}>
              <button
                type="button"
                className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>Penghargaan</span>
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
            {penghargaan && (
              <div
                id="accordion-flush-body-4"
                aria-labelledby="accordion-flush-heading-4"
              >
                <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {profilPejabat.penghargaan}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* end kepala dinas mobile */}

    </>
  )
}


ProfilPejabatShow.layout = (page) => <SuperAdminTemplate children={page} />
export default ProfilPejabatShow;
