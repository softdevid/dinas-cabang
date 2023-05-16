import HomeLayout from "@/Layouts/HomeLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const LayananPublik = ({ title, layanan }) => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState({})

  function handleOpen(data) {
    setOpen(true)
    setData(data)
  }

  function handleClose() {
    setOpen(false)
    setData({})
  }
  return (
    <>
      {!open ? (
        <>
          <Head title={title} />
          <div>
            <div className="w-full md:h-64 mx-2">
              <div className="items-center justify-center flex h-32 md:h-64">
                <b className="text-2xl md:text-5xl text-center">{title}</b>
              </div>
              <div className="items-center justify-center flex">
                <div className="border-[1px] border-black w-[6%] -mt-20 md:-mt-48"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layanan.map((data, i) => {
              return (
                <>
                  <div key={i} className="w-60 h-96 border-2 mx-auto">
                    <img src={data.imgUrl} className="w-full h-36 object-cover" />
                    <div className="mt-3 mx-3">
                      {data.namaLayanan}
                    </div>
                    <div className="mx-3 my-3 whitespace-pre-wrap">{data.deskripsiLayanan.slice(0, 100)}</div>
                    <div className="mx-3 my-3 text-blue-600">- Layanan {data.jenisLayanan}</div>
                    <div className="justify-center items-center flex">
                      <button onClick={() => handleOpen(data)} as="button" className="rounded-lg p-2 bg-blue-600 text-white">Selengkapnya</button>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </>
      ) : (
        <>
          <Show data={data} handleClose={handleClose} />
        </>
      )}
    </>
  )
}

function Show({ handleClose, data }) {
  return (
    <>
      <Head title={data.namaLayanan} />
      <div className="mx-2 md:mx-[110px]">
        <button onClick={handleClose} className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg mb-2">Kembali</button>
        <img src={data.imgUrl} className="w-full h-24 md:h-96 object-cover object-center rounded-lg" />
        <div>
          <h1 className="font-bold text-2xl">{data.namaLayanan}</h1>
          <p className="whitespace-pre-wrap">{data.deskripsiLayanan}</p>
        </div>
        <div className="grid grid-cols-3">
          {data.imgUrl1 && (
            <img className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
              src={data.imgUrl1}
              alt={data.namaLayanan}
            />
          )}

          {data.imgUrl2 && (
            <img className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
              src={data.imgUrl2}
              alt={data.namaLayanan}
            />
          )}

          {data.imgUrl3 && (
            <img className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
              src={data.imgUrl3}
              alt={data.namaLayanan}
            />
          )}
        </div>
      </div>
    </>
  )
}


LayananPublik.layout = (page) => <HomeLayout children={page} />
export default LayananPublik;
