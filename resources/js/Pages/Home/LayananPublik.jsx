import Main from "@/Components/HomePage/Main"
import { Head } from "@inertiajs/react";

const LayananPublik = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div>
        <div className="w-full h-64">
          <div className="items-center justify-center flex h-64">
            <b className="text-5xl">{props.title}</b>
          </div>
          <div className=" items-center justify-center flex">
            <div className="border-[1px] border-black w-[6%] -mt-48"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="w-60 h-96 border-2 mx-auto">
          <img src="https://source.unsplash.com/600x400?random" />
          <div className="mt-3 mx-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maxime?
          </div>
          <div className="mx-3 my-3 text-blue-600">- Layanan Tanpa Biaya (Gratis)</div>
          <div className="justify-center items-center flex">
            <button as="button" className="rounded-lg p-2 bg-blue-600 text-white">Selengkapnya</button>
          </div>
        </div>
        <div className="w-60 h-96 border-2 mx-auto">
          <img src="https://source.unsplash.com/600x400?random" />
          <div className="mt-3 mx-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maxime?
          </div>
          <div className="mx-3 my-3 text-blue-600">- Layanan Tanpa Biaya (Gratis)</div>
          <div className="justify-center items-center flex">
            <button as="button" className="rounded-lg p-2 bg-blue-600 text-white">Selengkapnya</button>
          </div>
        </div>
        <div className="w-60 h-96 border-2 mx-auto">
          <img src="https://source.unsplash.com/600x400?random" />
          <div className="mt-3 mx-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, maxime?
          </div>
          <div className="mx-3 my-3 text-blue-600">- Layanan Tanpa Biaya (Gratis)</div>
          <div className="justify-center items-center flex">
            <button as="button" className="rounded-lg p-2 bg-blue-600 text-white">Selengkapnya</button>
          </div>
        </div>
      </div>
    </>
  )
}

LayananPublik.layout = (page) => <Main children={page} />
export default LayananPublik;
