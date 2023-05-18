import HomeLayout from "@/Layouts/HomeLayout";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Index = ({ title, banner, superadmin, berita, galeri, event }) => {
  const [visiMisi, setVisiMisi] = useState({ data: "visi" });
  const handleVisiMisi = (data) => {
    setVisiMisi(data);
  };

  const [gambarIndex, setGambarIndex] = useState(0);
  const gambarList = [
    "",
    "https://res.cloudinary.com/cv-mekar-cutting-digital/image/upload/v1661406208/products/jsu1y3fs09bkvgvsxtrq.png",
    "https://res.cloudinary.com/cv-mekar-cutting-digital/image/upload/v1661153096/products/i4xtgsg8zngm5unfbh9e.png",
    // tambahkan gambar lain di sini
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGambarIndex((gambarIndex + 1) % gambarList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [gambarIndex]);

  return (
    <div className="">
      <Head title={title} />

      <div className="bg-black">
        {banner.imgUrl ? (
          <div
            className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
            style={{ backgroundImage: `url(${banner.imgUrl})` }}
          >
            <div className="items-center justify-center flex h-[40vh] md:h-[60vh]">
              <div className="h-auto w-full text-center md:text-left md:ml-32">
                <h1 className="text-lg md:text-6xl sm:text-center md:text-left text-white z-50">
                  {title}
                </h1>
                <b className="text-md md:text-2xl text-white">
                  Selamat datang di {superadmin.namaSuperAdmin}
                </b>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80 flex justify-center items-center"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1000x600?nature")`,
            }}
          >
            <div className="w-full text-center md:text-left px-4 md:ml-20">
              <h1 className="text-3xl md:text-6xl sm:text-center md:text-left text-white font-bold z-50">
                {title}
              </h1>
              <span className="text-xl md:text-2xl text-white font-semibold">
                Selamat datang di {superadmin.namaSuperAdmin}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="bg-sky-600 grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center justify-center">
        <div className="px-4 pt-4 md:pt-7 md:pb-10">
          <p className="text-white text-center md:text-left text-lg md:text-3xl md:ml-16">
            Lihat apa yang terjadi dengan baca berita terbaru
          </p>
        </div>
        <div className="flex justify-center md:justify-start py-4">
          <Link
            as="button"
            href="/berita"
            className="py-2 px-4 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 text-base md:text-xl"
          >
            Semua Berita
          </Link>
        </div>
      </div>

      <div className="block bg-slate-50 md:grid md:grid-cols-2 md:gap-8">
        <div className="py-5">
          <div className="mb-4 md:ml-20 lg:ml-28 md:-mt-10">
            <ul
              className="flex flex-wrap justify-center md:justify-start space-x-4 text-base font-medium text-center"
              id="tabVMO"
              data-tabs-toggle="#tabVMO"
              role="tablist"
            >
              <li className="bg-green-500 rounded-t-lg" role="presentation">
                <button
                  onClick={() => handleVisiMisi({ data: "visi" })}
                  className="py-2 px-4 border-b-2 border-transparent hover:border-slate-800 text-white hover:text-gray-600"
                  id="visi-tab"
                  data-tabs-target="#visi"
                  type="button"
                  role="tab"
                  aria-controls="visi"
                  aria-selected="false"
                >
                  Visi
                </button>
              </li>
              <li className="bg-yellow-300 rounded-t-lg" role="presentation">
                <button
                  onClick={() => handleVisiMisi({ data: "misi" })}
                  className="py-2 px-4 border-b-2 border-transparent hover:border-slate-800 text-slate-900 hover:text-gray-600"
                  id="misi-tab"
                  data-tabs-target="#misi"
                  type="button"
                  role="tab"
                  aria-controls="misi"
                  aria-selected="false"
                >
                  Misi
                </button>
              </li>
              <li className="bg-cyan-500 rounded-t-lg" role="presentation">
                <button
                  onClick={() => handleVisiMisi({ data: "organisasi" })}
                  className="py-2 px-4 border-b-2 border-transparent hover:border-slate-800 text-slate-900 hover:text-gray-600"
                  id="organisasi-tab"
                  data-tabs-target="#organisasi"
                  type="button"
                  role="tab"
                  aria-controls="organisasi"
                  aria-selected="false"
                >
                  Organisasi
                </button>
              </li>
            </ul>
          </div>
          <div id="tabVMO" className="mb-5 px-4">
            {visiMisi.data === "visi" ? (
              <div
                className="md:ml-16 rounded-lg bg-green-500 text-white"
                id="visi"
                role="tabpanel"
                aria-labelledby="visi-tab"
              >
                <div className="m-3">
                  <h1 className="text-2xl text-center pt-2">Visi</h1>
                  <div className="py-2">
                    {superadmin.visiImgUrl ? (
                      <img
                        src={superadmin.visiImgUrl}
                        className="w-full h-[250px] rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/1000x600?office"
                        className="w-full h-[250px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <q className="text-center text-lg px-1">{superadmin.visi}</q>
                </div>
              </div>
            ) : visiMisi.data === "misi" ? (
              <div
                className="rounded-lg bg-yellow-300 text-slate-900"
                id="misi"
                role="tabpanel"
                aria-labelledby="misi-tab"
              >
                <div className="m-3">
                  <h1 className="text-2xl text-center pt-2">Misi</h1>
                  <div className="py-2">
                    {superadmin.misiImgUrl ? (
                      <img
                        src={superadmin.misiImgUrl}
                        className="w-full h-[250px] rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/1000x601?office"
                        className="w-full h-[250px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <q className="text-center text-lg px-1">{superadmin.misi}</q>
                </div>
              </div>
            ) : (
              <div
                className="rounded-lg bg-cyan-500 text-slate-900"
                id="organisasi"
                role="tabpanel"
                aria-labelledby="organisasi-tab"
              >
                <div className="m-3">
                  <h1 className="text-2xl text-center pt-2">Organisasi</h1>
                  <div className="py-2">
                    {superadmin.organisasiImgUrl ? (
                      <img
                        src={superadmin.organisasiImgUrl}
                        className="w-full h-[250px] rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/1000x602?office"
                        className="w-full h-[250px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="px-3 lg:mt-10">
          <div className="bg-white p-4 mb-10 rounded-lg shadow-lg">
            <h1 className="text-center text-xl md:text-3xl py-4">Berita Terbaru</h1>
            <div className="border border-black w-[75%] mx-auto mb-3"></div>
            {berita ? (
              <>
                <div className="bg-gray-500 h-[250px] m-3 rounded-md overflow-hidden">
                  <img
                    className="object-cover w-full h-full"
                    src={berita.imgUrl}
                  />
                </div>
                <div className="px-3">
                  <h1 className="text-lg font-semibold">
                    {berita.judulBerita}
                  </h1>
                  <p className="text-base">
                    {berita && berita.deskripsi.slice(0, 100)}
                  </p>
                  <div className="my-5 justify-between mx-auto">
                    <Link
                      href={`/berita/${berita.slug}`}
                      className="p-2 bg-gray-500 text-white rounded-lg"
                    >
                      Lanjut membaca
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <span className="flex items-center justify-center font-bold text-xl text-blue-500">
                Belum ada berita yang ditambahkan
              </span>
            )}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-xl md:text-3xl py-4">Galeri</h1>
        <div className="border border-black w-[75%] mx-auto mb-3"></div>
        {galeri.data.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 py-3 md:mx-[90px]">
            {galeri.data.map((data, i) => {
              return (
                <div
                  key={i}
                  className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    className="rounded-lg border sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                    src={data.imgUrl}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-blue-500 text-xl text-center mx-auto font-bold">
            Belum ada foto di galeri yang ditambahkan
          </p>
        )}
      </div>

      <div className="md:bg-gray-100">
        <div className="md:my-10 md:mx-[100px]">
          <h1 className="text-center text-xl md:text-3xl py-4">Event</h1>
          <div className="border border-black w-[75%] mx-auto mb-3"></div>
          {event.length > 0 ? (
            <>
              {event.map((data, i) => {
                return (
                  <div key={i} className="flex flex-col-reverse lg:flex-row items-center pb-8 mx-3">
                    <div className="w-auto md:w-1/2  h-auto">
                      <h1 className="text-lg font-bold md:text-3xl mt-2 md:mt-5 mb-2">
                        {data.judul}
                      </h1>
                      <p className="whitespace-pre-wrap">{data.deskripsi}</p>
                    </div>
                    <div className="w-auto md:w-1/2  h-auto flex justify-center items-center">
                      <img
                        src={data.imgUrl1}
                        className="md:max-w-lg lg:max-w-sm xl:max-w-lg rounded-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <p className="text-blue-500 text-xl text-center mx-auto font-bold">
              Belum ada Acara
            </p>
          )}
        </div>
      </div>

      {/* <div className="w-52 h-52 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${gambarList[gambarIndex]})` }}></div> */}
    </div>
  );
};

Index.layout = (page) => <HomeLayout children={page} />;
export default Index;
