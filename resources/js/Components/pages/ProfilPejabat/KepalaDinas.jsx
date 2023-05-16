import React, { useState } from "react";

const KepalaDinas = (props) => {
  console.log(props)
  const [profil, setProfil] = useState({});
  const openProfil = (i) => {
    setProfil((prevState) => ({
      ...prevState,
      [i]: !prevState[i] // Membalikkan nilai boolean untuk indeks yang diberikan
    }));
  }

  const [karir, setKarir] = useState({});
  const openKarir = (i) => {
    setKarir((prevState) => ({
      ...prevState,
      [i]: !prevState[i] // Membalikkan nilai boolean untuk indeks yang diberikan
    }));
  }

  const [pendidikan, setPendidikan] = useState({});
  const openPendidikan = (i) => {
    setPendidikan((prevState) => ({
      ...prevState,
      [i]: !prevState[i] // Membalikkan nilai boolean untuk indeks yang diberikan
    }));
  }

  const [penghargaan, setPenghargaan] = useState({});
  const openPenghargaan = (i) => {
    setPenghargaan((prevState) => ({
      ...prevState,
      [i]: !prevState[i] // Membalikkan nilai boolean untuk indeks yang diberikan
    }));
  }
  return (
    <>
      {/* kepala dinas desktop */}

      {props.props.pejabat.map((data, i) => {
        return (
          <>
            <div key={i} className="block bg-white">
              <h1 className="text-4xl text-center text-blue-600">
                {data.jabatan}
              </h1>
              <div className="block md:flex m-5">
                <div className="w-[40%] m-3">
                  <div className="h-auto w-full justify-center items-center mx-auto flex">
                    <img
                      src={data.imgUrl}
                      className="md:w-[250px] md:h-[350px] mx-auto w-full h-auto object-cover object-top rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full md:w-[60%] m-3 justify-start items-start block md:flex">
                  <div className="h-64 w-full">
                    <div
                      id="accordion-flush"
                      data-accordion="collapse"
                      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      data-inactive-classes="text-gray-500 dark:text-gray-400"
                    >
                      <h2 id="accordion-flush-heading-1" onClick={() => openProfil(i)}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
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
                      {profil[i] && (
                        <div
                          id="accordion-flush-body-1"
                          aria-labelledby="accordion-flush-heading-1"
                        >
                          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                              {data.profil}
                            </p>
                          </div>
                        </div>
                      )}

                      <h2 id="accordion-flush-heading-2" onClick={() => openKarir(i)}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
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
                      {karir[i] && (
                        <div
                          id="accordion-flush-body-2"
                          aria-labelledby="accordion-flush-heading-2"
                        >
                          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                              {data.karir}
                            </p>
                          </div>
                        </div>
                      )}

                      <h2 id="accordion-flush-heading-3" onClick={() => openPendidikan(i)}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"

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
                      {pendidikan[i] && (
                        <div
                          id="accordion-flush-body-3"
                          aria-labelledby="accordion-flush-heading-3"
                        >
                          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                              {data.pendidikan}
                            </p>
                          </div>
                        </div>
                      )}

                      <h2 id="accordion-flush-heading-4" onClick={() => openPenghargaan(i)}>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
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
                      {penghargaan[i] && (
                        <div
                          id="accordion-flush-body-4"
                          aria-labelledby="accordion-flush-heading-4"
                        >
                          <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400 whitespace-pre-wrap">
                              {data.penghargaan}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      })}

      {/* end kepala dinas desktop */}


    </>
  );
};

export default KepalaDinas;
