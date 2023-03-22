import HomeLayout from "@/Layouts/HomeLayout";
import KepalaDinas from "@/Components/pages/ProfilPejabat/KepalaDinas";
import SekretarisDinas from "@/Components/pages/ProfilPejabat/SekretarisDinas";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const ProfilPejabat = (props) => {
  const [pejabat1, setPejabat1] = useState({ data: "" });

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
              <div className="border-2 border-black w-[20%] -mt-48"></div>
            </div>
          </div>
        </div>
      </div>

      <KepalaDinas />
      <SekretarisDinas />
    </>
  );
};

ProfilPejabat.layout = (page) => <HomeLayout children={page} />;

export default ProfilPejabat;
