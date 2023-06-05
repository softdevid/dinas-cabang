import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const PermohonanInformasi = ({ title, superadmin, permohonan }) => {
  console.log(permohonan)
  const [profil, setProfil] = useState({});
  const openProfil = (i) => {
    setProfil((prevState) => ({
      ...prevState,
      [i]: !prevState[i] // Membalikkan nilai boolean untuk indeks yang diberikan
    }));
  }

  const handleDownload = (data) => {
    const link = document.createElement('a');
    link.href = data.pdfUrl;
    link.download = `${data.namaPermohonan}.pdf`;
    link.click();
  };
  return (
    <>
      <Head title={title} />
      <div>
        <div className="w-full h-64 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="items-center justify-center flex  mx-2 h-64">
              <b className="text-4xl">{title}</b>
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
              <b className="text-3xl">{title}</b>
            </div>
            <div className="items-center justify-center flex">
              <div className="border-2 border-black w-[10%] md:w-[20%] -mt-48"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-52 md:my-20">
        {permohonan.length > 0 ? (
          <>
            {permohonan.map((data, i) => {
              return (
                <>
                  <h2 id="accordion-flush-heading-1" onClick={() => openProfil(i)}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 text-left text-black font-bold border-b border-gray-200 "
                    >
                      <span>{data.namaFormulir}</span>
                      {/* <button onClick={() => handleDownload(data)}>Download PDF</button> */}
                    </button>
                  </h2>
                  {profil[i] && (
                    <div
                      id="accordion-flush-body-1"
                      aria-labelledby="accordion-flush-heading-1"
                    >
                      <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2 max-h-96 overflow-auto">
                          {data.file ? (
                            <div>
                              <iframe src={`/uploads/${data.file}`} type="application/pdf" width="100%" height="600px" />
                              {/* <button onClick={handleDownload}>Download PDF</button> */}
                            </div>
                          ) : (
                            <p>Loading PDF...</p>
                          )}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )
            })}
          </>
        ) : (
          <>
            <span className="text-center text-2xl font-bold">Belum ada formulir permohonan informasi</span>
          </>
        )}
      </div>
    </>
  );
};

PermohonanInformasi.layout = (page) => <HomeLayout children={page} />;
export default PermohonanInformasi;
