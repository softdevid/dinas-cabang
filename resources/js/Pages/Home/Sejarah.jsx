import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

const Sejarah = ({ title, sejarah, banner }) => {
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
      {/* <h1 className="text-5xl text-center mt-5">{title}</h1>
            <div className="border-2 border-black w-[7%] mx-auto my-2"></div> */}
      <div className="hidden md:block lg:my-5 ml-14" id="sejarah">
        <div className="flex">
          <div className="w-[35%] m-5 flex justify-end items-end">
            <div className="grid-cols-1 gap-8 grid">
              <img
                src={sejarah.imgUrl}
                className="w-[500px] h-[250px] object-cover object-center relative rounded-lg shadow-lg"
              />
              {sejarah.imgUrl2 && (
                <img
                  src={sejarah.imgUrl2}
                  className="w-[500px] h-[200px] lg:h-[350px] object-cover object-center rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
          <div className="w-[65%] m-5">
            <p className="whitespace-pre-wrap">
              {sejarah.deskripsi}
            </p>
          </div>
        </div>
      </div>
      <div className="block md:hidden m-5">
        <div className="mx-auto justify-center items-center">
          <img
            src={sejarah.imgUrl}
            className="w-full max-h-[300px] object-cover object-center mx-auto rounded-md shadow-lg"
          />
          <p className="mt-5 whitespace-pre-wrap">
            {sejarah.deskripsi}
          </p>
        </div>
      </div>
    </>
  );
};

Sejarah.layout = (page) => <HomeLayout children={page} />;

export default Sejarah;
