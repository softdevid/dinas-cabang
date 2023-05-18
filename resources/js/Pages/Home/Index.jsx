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
    <>
      <Head title={title} />
      {/* <div className="bg-white w-full overflow-auto h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${''})` }}>
        <div className="hidden lg:block bg-white border-4 border-sky-500 z-50 w-[500px] h-56 float-right mt-[20vh] mr-10">
          <img className="object-cover w-full h-full" src="" />
        </div>
      </div> */}

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
            className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
            style={{
              backgroundImage: `url("https://source.unsplash.com/1000x600?nature")`,
            }}
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
        )}
      </div>

      <div className="bg-sky-600 h-48 grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center justify-center">
        <div className="ml-16">
          <p className="text-white text-center text-3xl">
            Lihat apa yang terjadi dengan baca berita terbaru
          </p>
        </div>
        <div className="">
          <Link
            as="button"
            href="/berita"
            className="py-2 px-4 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 text-xl"
          >
            Semua Berita
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8 mb-10 bg-slate-50">
          <div className="-mt-10  ml-32 z-50">
            <div className="mb-4">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center"
                id="tabVMO"
                data-tabs-toggle="#tabVMO"
                role="tablist"
              >
                <li
                  className="mr-2 bg-green-500 rounded-t-lg text-white"
                  role="presentation"
                >
                  <button
                    onClick={() => handleVisiMisi({ data: "visi" })}
                    className="inline-block py-4 px-6 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
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
                <li
                  className="mr-2 bg-yellow-300 rounded-t-lg"
                  role="presentation"
                >
                  <button
                    onClick={() => handleVisiMisi({ data: "misi" })}
                    className="inline-block py-4 px-6 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
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
                <li
                  className="mr-2 bg-cyan-500 rounded-t-lg text-white"
                  role="presentation"
                >
                  <button
                    onClick={() => handleVisiMisi({ data: "organisasi" })}
                    className="inline-block py-4 px-6 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"
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
            <div id="tabVMO" className="mb-5">
              {visiMisi.data === "visi" ? (
                <>
                  <div
                    className="hidden md:block w-full h-auto lg:max-w-2xl lg:h-auto rounded-lg bg-green-500 text-white"
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
                      <q className="text-center text-lg">{superadmin.visi}</q>
                    </div>
                  </div>
                </>
              ) : visiMisi.data === "misi" ? (
                <>
                  <div
                    className="hidden md:block w-full h-auto lg:max-w-2xl lg:h-auto rounded-lg bg-yellow-500"
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
                            src="https://source.unsplash.com/1000x600?office"
                            className="w-full object-cover h-[250px] rounded-lg"
                          />
                        )}
                      </div>
                      <p>{superadmin.misi}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="hidden md:block w-full h-[250px] lg:max-w-2xl lg:h-auto rounded-lg bg-cyan-500"
                    id="organisasi"
                    role="tabpanel"
                    aria-labelledby="organisasi-tab"
                  >
                    <div className="m-3">
                      <h1 className="text-2xl text-center text-white pt-2">
                        Organisasi
                      </h1>
                      <div className="py-2">
                        {superadmin.organisasiImgUrl ? (
                          <img
                            src={superadmin.organisasiImgUrl}
                            className="w-full h-[250px] object-cover rounded-b-lg"
                          />
                        ) : (
                          <img
                            src="https://source.unsplash.com/1000x600?office"
                            className="w-full h-[250px] object-cover rounded-b-lg"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="w-9/12 min-h-[470px] lg:max-w-2xl lg:h-auto rounded-lg mt-7 mr-5 shadow-xl">
              <div className="bg-white p-4">
                <h1 className="text-2xl text-center">Berita Terbaru</h1>
                <div className="border-2 border-black w-[75%] mx-auto my-3"></div>
                {berita != null ? (
                  <>
                    <div className="bg-gray-500 h-[250px] m-3 rounded-md overflow-hidden">
                      <img
                        className="object-cover w-full h-full"
                        src={berita.imgUrl}
                      />
                    </div>
                    <div className="mx-3">
                      <h1 className="text-2xl font-bold">
                        {berita.judulBerita}
                      </h1>
                      <p>
                        {berita &&
                          berita.deskripsi.slice(0, 100)}
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
        </div>
      </div>

      {/* //mobile desain */}
      <div className="block md:hidden">
        <div>
          <div className="mb-4">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center items-center justify-center mt-2"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li
                className="mr-2 bg-green-500 text-white rounded-lg"
                role="presentation"
              >
                <button
                  onClick={() => handleVisiMisi({ data: "visi" })}
                  className="inline-block p-2 border-b-2 rounded-t-lg font-bold text-xl"
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
              <li className="mr-2 bg-yellow-300 rounded-lg" role="presentation">
                <button
                  onClick={() => handleVisiMisi({ data: "misi" })}
                  className="inline-block p-2 border-b-2 border-transparent font-bold text-xl rounded-t-lg hover:text-gray-600 hover:border-gray-300"
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
              <li
                onClick={() => handleVisiMisi({ data: "organisasi" })}
                className="mr-2 bg-cyan-500 text-black rounded-lg font-bold text-xl"
                role="presentation"
              >
                <button
                  className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
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
          <div id="myTabContent" className="mb-5 m-2">
            {visiMisi.data === "visi" ? (
              <>
                <div
                  className="block md:hidden w-full h-auto border-2 rounded-lg bg-green-500 text-white"
                  id="visi"
                  role="tabpanel"
                  aria-labelledby="visi-tab"
                >
                  <div className=" rounded-t-lg m-3">
                    <h1 className="text-2xl text-center">Visi</h1>
                    {superadmin.visiImgUrl ? (
                      <img
                        src={superadmin.visiImgUrl}
                        className="w-full max-h-[250px] rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/1000x600?office"
                        className="w-full max-h-[250px] object-cover rounded-lg"
                      />
                    )}
                    <q className="text-center text-lg">{superadmin.visi}</q>
                  </div>
                </div>
              </>
            ) : visiMisi.data === "misi" ? (
              <>
                <div
                  className="block md:hidden w-full h-auto border-2 rounded-lg bg-yellow-500"
                  id="misi"
                  role="tabpanel"
                  aria-labelledby="misi-tab"
                >
                  <div className=" rounded-t-lg m-3">
                    <h1 className="text-2xl text-center">Misi</h1>
                    {superadmin.misiImgUrl ? (
                      <img
                        src={superadmin.misiImgUrl}
                        className="w-full max-h-[250px] rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://unsplash.com/random"
                        className="w-full max-h-[250px] object-cover rounded-lg"
                      />
                    )}
                    {superadmin.misi}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="block md:hidden w-full h-auto border-2 rounded-lg bg-cyan-500 text-white"
                  id="organisasi"
                  role="tabpanel"
                  aria-labelledby="organisasi-tab"
                >
                  <div className=" rounded-t-lg m-3">
                    <h1 className="text-2xl text-center">Organisasi</h1>
                    {superadmin.organisasiImgUrl ? (
                      <img
                        src={superadmin.organisasiImgUrl}
                        className="w-full max-h-[250px] rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://source.unsplash.com/1000x600?office"
                        className="w-full max-h-[250px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="m-2">
          <div className="w-full h-auto rounded-lg border-2 mt-7 mr-5 shadow-lg">
            <div className="bg-white">
              <h1 className="text-2xl text-center">Berita Terbaru</h1>
              {berita != null ? (
                <>
                  <div className="border-2 border-black w-[75%] mx-auto my-3"></div>
                  <div className="bg-gray-500 max-h-[250px] m-3 rounded-md overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={berita.imgUrl}
                    />
                  </div>
                  <div className="mx-3">
                    <h1 className="text-2xl font-bold">
                      {berita.judulBerita}
                    </h1>
                    <p>{berita.deskripsi.slice(0, 100)}</p>

                    <div className="my-5 justify-between mx-auto">
                      <Link
                        href={`/berita/${berita.slug}`}
                        className="p-2 bg-gray-500 text-white rounded-lg
                                    "
                      >
                        Lanjut membaca...
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <h1 className="font-bold text-xl text-blue-500 text-center">
                  Belum ada berita
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl">Galeri</h1>
        <div className="border-[1px] border-black w-[6%] mx-auto mb-3"></div>
        {galeri.data.length > 0 ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 md:mx-[90px]">
            {galeri.data.map((data, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  >
                    <img
                      className="rounded-lg border sm:h-[200px] sm:w-[350px] md:h-[200px] md:w-[250px] lg:h-[260px] lg:w-[400px] object-cover object-center mx-auto"
                      src={data.imgUrl}
                    />
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <p className="text-blue-500 text-xl text-center mx-auto font-bold">
            Belum ada foto di galeri yang ditambahkan
          </p>
        )}
      </div>

      <div className="md:bg-gray-100 mx-2 h-auto">
        <div className="mt-5 md:my-16 md:mb-3 h-auto md:mx-[100px]">
          <h1 className="text-center text-3xl">Event</h1>
          <div className="border-[1px] border-black w-[6%] mx-auto mb-3"></div>
          {event.length > 0 ? (
            <>
              {event.map((data, i) => {
                return (
                  <>
                    <div key={i} className="block md:flex mb-2">
                      <div className="md:w-[40%] w-full h-auto">
                        <h1 className="text-lg font-bold md:text-3xl">
                          {data.judul}
                        </h1>
                        <p className="whitespace-pre-wrap">{data.deskripsi}</p>
                      </div>
                      <div className="md:w-[60%] w-full h-auto justify-center items-center flex">
                        <img
                          src={data.imgUrl1}
                          className="md:max-w-[500px] max-w-[300px] rounded-lg h-auto mb-3"
                        />
                      </div>
                    </div>
                  </>
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
    </>
  );
};

Index.layout = (page) => <HomeLayout children={page} />;
export default Index;
