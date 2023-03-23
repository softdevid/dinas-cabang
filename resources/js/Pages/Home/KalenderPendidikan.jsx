import Main from "@/Components/HomePage/Main";
import { Head } from "@inertiajs/react";

const KalenderPendidikan = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div>
        <div className="w-full h-64 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="items-center justify-center flex h-64">
              <b className="text-3xl">{props.title}</b>
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
              <b className="text-3xl">{props.title}</b>
            </div>
            <div className=" items-center justify-center flex">
              <div className="border-[1px] border-black w-[10%] -mt-48"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mx-[95px] mx-5">
        <img src="/kalender1.jpg" className="" />
        <img src="/kalender.jpg" className="" />
      </div>
    </>
  )
}

KalenderPendidikan.layout = (page) => <Main children={page} />
export default KalenderPendidikan;
