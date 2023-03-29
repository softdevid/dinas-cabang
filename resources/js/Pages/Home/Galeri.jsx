import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Galeri = (props) => {
  const [galeri, setGaleri] = useState({ data: "" });
  const openGaleri = (data) => {
    setGaleri(data);
  };

  return (
    <>
      <Head title={props.title} />
      <div className="bg-black">
        <div
          className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
          style={{
            backgroundImage: `url(${"https://source.unsplash.com/600x400?random"})`
          }}
        >
          <div className="items-center justify-center flex h-[40vh] md:h-[60vh]">
            <div className="h-auto w-full text-center md:text-left md:ml-32">
              <h1 className="text-6xl sm:text-center md:text-left text-white z-50">
                {props.title}
              </h1>
              <b className="text-2xl text-white">
                Selamat datang di {props.title}
              </b>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-5">
        <button
          onClick={() => openGaleri({ data: "foto" })}
          className="bg-blue-600 text-white p-3 mx-5 rounded-lg"
        >
          Foto
        </button>
        <button
          onClick={() => openGaleri({ data: "video" })}
          className="bg-red-600 text-white p-3 mx-5 rounded-lg"
        >
          Video
        </button>
        <button
          onClick={() => openGaleri({ data: "infografis" })}
          className="bg-green-600 text-white p-3 mx-5 rounded-lg"
        >
          Infografis
        </button>
      </div>

      <div>
        {galeri.data === "video" ? (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-5 md:mx-[90px]">
              {/* <div className="object-cover mx-3">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/4EE0TlFBXMM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div> */}
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
            </div>
          </>
        ) : galeri.data === "infografis" ? (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-[90px]">
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-[90px]">
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
              <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-lg sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                  src="https://source.unsplash.com/600x400?random"
                  alt=""
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

Galeri.layout = (page) => <HomeLayout children={page} />;
export default Galeri;
