import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

const VisiMisi = ({ title, superadmin }) => {
  console.log(superadmin)
  return (
    <>
      <Head title={title} />
      <div>
        <div className="w-full h-64 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="items-center justify-center flex h-64">
              <b className="text-5xl">{title}</b>
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
        <h1 className="text-5xl text-blue-600 text-center my-10">Visi</h1>
        <p className="text-center text-xl md:text-2xl">
          {superadmin.visi}
        </p>
      </div>

      <div className="mx-4 md:mx-52 md:my-28">
        <h1 className="text-5xl text-blue-600 text-center my-10">Misi</h1>
        <p className="whitespace-pre-wrap text-xl md:text-2xl">{superadmin.misi}</p>
      </div>
    </>
  );
};

VisiMisi.layout = (page) => <HomeLayout children={page} />;
export default VisiMisi;
