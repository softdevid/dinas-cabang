import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const GaleriFoto = ({ title, banner, foto }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState("")

  function handleOpen(data) {
    setOpen(true)
    setData({ data })
  }

  function handleClose() {
    setOpen(false)
    setData({})
  }

  return (
    <>
      <Head title={title} />
      <div className="bg-black">
        <div
          className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
          style={{
            backgroundImage: `url(${banner.imgUrl})`
          }}
        >
          <div className="items-center justify-center flex h-[40vh] md:h-[60vh]">
            <div className="h-auto w-full text-center md:text-left md:ml-32">
              <h1 className="text-6xl sm:text-center md:text-left text-white z-50">
                {title}
              </h1>
              <b className="text-2xl text-white">
                Selamat datang di {title}
              </b>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-5">
        <Link href="/galeri"
          className="bg-blue-600 text-white p-3 mx-5 rounded-lg"
        >
          Foto
        </Link>
        <Link href="/galeri-infografis"
          className="bg-green-600 text-white p-3 mx-5 rounded-lg"
        >
          Infografis
        </Link>
      </div>

      {!open ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-[90px]">
          {foto.map((data, i) => {
            return (
              <>
                <div key={i} className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <img onClick={() => handleOpen(data)} title="Klik untuk melihat detail galeri"
                    className="hover:cursor-pointer rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                    src={data.imgUrl}
                    alt={data.judul}
                  />
                </div>
              </>
            )
          })}
        </div>
      ) : (
        <>
          <Show data={data} handleClose={handleClose} />
        </>
      )}
    </>
  )
}

function Show({ data, handleClose }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5 md:mx-[90px]">
        <img
          className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
          src={data.data.imgUrl}
          alt={data.data.judul}
        />
        <img
          className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
          src={data.data.imgUrl2}
          alt={data.data.judul}
        />
        <img
          className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
          src={data.data.imgUrl3}
          alt={data.data.judul}
        />
      </div>
      <div className="mx-5 md:mx-[90px]">
        <h1 className="font-bold text-xl">{data.data.judul}</h1>
        <p className="whitespace-pre-wrap">{data.data.deskripsi}</p>
      </div>
    </>
  )
}

GaleriFoto.layout = (page) => <HomeLayout children={page} />
export default GaleriFoto;
