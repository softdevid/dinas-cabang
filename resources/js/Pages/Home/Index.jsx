import HomeLayout from "@/Layouts/HomeLayout";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Index = (props) => {
  const [visiMisi, setVisiMisi] = useState({ data: "visi" });
  const handleVisiMisi = (data) => {
    setVisiMisi(data);
  }

  const [gambarIndex, setGambarIndex] = useState(0);
  const gambarList = [
    'https://source.unsplash.com/600x400?random',
    'https://res.cloudinary.com/cv-mekar-cutting-digital/image/upload/v1661406208/products/jsu1y3fs09bkvgvsxtrq.png',
    'https://res.cloudinary.com/cv-mekar-cutting-digital/image/upload/v1661153096/products/i4xtgsg8zngm5unfbh9e.png',
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
      <Head title={props.title} />
      {/* <div className="bg-white w-full overflow-auto h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${'https://source.unsplash.com/600x400?random'})` }}>
        <div className="hidden lg:block bg-white border-4 border-sky-500 z-50 w-[500px] h-56 float-right mt-[20vh] mr-10">
          <img className="object-cover w-full h-full" src="https://source.unsplash.com/600x400?random" />
        </div>
      </div> */}

      <div className="bg-black">
        <div
          className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
          style={{
            backgroundImage: `url(${"https://source.unsplash.com/600x400?random"})`
          }}
        >
          <div className="items-center justify-center flex h-[40vh] md:h-[60vh]">
            <div className="h-auto w-full text-center md:text-left md:ml-32">
              <h1 className="text-lg md:text-6xl sm:text-center md:text-left text-white z-50">
                {props.title}
              </h1>
              <b className="text-md md:text-2xl text-white">
                Selamat datang di {props.title}
              </b>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sky-600 h-48 grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="m-auto">
          <p className="text-white text-center text-3xl font-serif">Lihat apa yang Terjadi Baca Berita Terbaru</p>
        </div>
        <div className="m-auto">
          <Link href="/berita" className="p-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 text-xl">Lihat Semua Berita</Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div className="-mt-10  ml-32 z-50">
            <div className="mb-4">
              <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2 bg-green-500 text-white rounded-lg" role="presentation">
                  <button onClick={() => handleVisiMisi({ data: "visi" })} className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Visi</button>
                </li>
                <li className="mr-2 bg-yellow-300 rounded-lg" role="presentation">
                  <button onClick={() => handleVisiMisi({ data: "misi" })} className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Misi</button>
                </li>
                <li onClick={() => handleVisiMisi({ data: "organisasi" })} className="mr-2 bg-cyan-500 text-white rounded-lg" role="presentation">
                  <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Organisasi</button>
                </li>
              </ul>
            </div>
            <div id="myTabContent" className="mb-5">
              {visiMisi.data === "visi" ? (
                <>
                  <div className="hidden md:block w-full h-auto border-2 rounded-lg bg-green-500 text-white" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className=" rounded-t-lg m-3">
                      <h1 className="text-2xl text-center">Visi</h1>
                      <img src="https://source.unsplash.com/600x400?random" className="w-full h-[250px] rounded-lg" />
                      <q className="text-center text-lg">Terwujudnya Pendidikan Maju di Jawa Barat guna membentuk SDM yang berkarakter, cerdas, mandiri, menguasai IPTEK dan berbasis budaya Jawa Barat</q>
                    </div>
                  </div>
                </>
              ) : visiMisi.data === "misi" ? (
                <>
                  <div className="hidden md:block w-full h-auto border-2 rounded-lg bg-yellow-500" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                    <div className=" rounded-t-lg m-3">
                      <h1 className="text-2xl text-center">Misi</h1>
                      <img src="https://source.unsplash.com/600x400?random" className="w-full h-[250px] rounded-lg" />
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden md:block w-full h-96 border-2 rounded-lg bg-gray-50" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                    <div className="bg-cyan-500 text-white rounded-lg">
                      <h1 className="text-2xl text-center">Organisasi</h1>
                      <img src="https://source.unsplash.com/600x400?random" className="w-full h-full rounded-b-lg" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <div className="w-9/12 min-h-[470px] rounded-lg border-2 mt-7 mr-5 shadow-lg">
              <div className="bg-white">
                <h1 className="text-2xl text-center">Berita Terbaru</h1>
                <div className="border-2 border-black w-[75%] mx-auto my-3"></div>
                <div className="bg-gray-500 h-[250px] m-3 rounded-md overflow-hidden">
                  {/* <p className="text-white text-center">INI FOTO</p> */}
                  <img className="object-cover w-full h-full" src="https://source.unsplash.com/600x400?random" />
                </div>
                <div className="mx-3">
                  <h1 className="text-2xl font-bold">Judul Lorem ipsum dolor sit amet.</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati iste quibusdam delectus fugiat perferendis optio explicabo inventore voluptatem, eveniet doloremque...</p>

                  <div className="my-5 justify-between mx-auto">
                    <Link className="p-2 bg-gray-500 text-white rounded-lg
                                    ">Lanjut membaca...</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div>
          <div className="mb-4">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center items-center justify-center mt-2" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
              <li className="mr-2 bg-green-500 text-white rounded-lg" role="presentation">
                <button onClick={() => handleVisiMisi({ data: "visi" })} className="inline-block p-2 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Visi</button>
              </li>
              <li className="mr-2 bg-yellow-300 rounded-lg" role="presentation">
                <button onClick={() => handleVisiMisi({ data: "misi" })} className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Misi</button>
              </li>
              <li onClick={() => handleVisiMisi({ data: "organisasi" })} className="mr-2 bg-cyan-500 text-white rounded-lg" role="presentation">
                <button className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Organisasi</button>
              </li>
            </ul>
          </div>
          <div id="myTabContent" className="mb-5 m-2">
            {visiMisi.data === "visi" ? (
              <>
                <div className="block md:hidden w-full h-auto border-2 rounded-lg bg-green-500 text-white" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className=" rounded-t-lg m-3">
                    <h1 className="text-2xl text-center">Visi</h1>
                    <img src="https://source.unsplash.com/600x400?random" className="w-full max-h-[250px] rounded-lg" />
                    <q className="text-center text-lg">Terwujudnya Pendidikan Maju di Jawa Barat guna membentuk SDM yang berkarakter, cerdas, mandiri, menguasai IPTEK dan berbasis budaya Jawa Barat</q>
                  </div>
                </div>
              </>
            ) : visiMisi.data === "misi" ? (
              <>
                <div className="block md:hidden w-full h-auto border-2 rounded-lg bg-yellow-500" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <div className=" rounded-t-lg m-3">
                    <h1 className="text-2xl text-center">Misi</h1>
                    <img src="https://source.unsplash.com/600x400?random" className="w-full max-h-[250px] rounded-lg" />
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, totam!</li>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="block md:hidden w-full h-auto border-2 rounded-lg bg-cyan-500 text-white" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <div className=" rounded-t-lg m-3">
                    <h1 className="text-2xl text-center">Organisasi</h1>
                    <img src="https://source.unsplash.com/600x400?random" className="w-full max-h-[250px] rounded-lg" />
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
              <div className="border-2 border-black w-[75%] mx-auto my-3"></div>
              <div className="bg-gray-500 max-h-[250px] m-3 rounded-md overflow-hidden">
                {/* <p className="text-white text-center">INI FOTO</p> */}
                <img className="object-cover w-full h-full" src="https://source.unsplash.com/600x400?random" />
              </div>
              <div className="mx-3">
                <h1 className="text-2xl font-bold">Judul Lorem ipsum dolor sit amet.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati iste quibusdam delectus fugiat perferendis optio explicabo inventore voluptatem, eveniet doloremque...</p>

                <div className="my-5 justify-between mx-auto">
                  <Link className="p-2 bg-gray-500 text-white rounded-lg
                                    ">Lanjut membaca...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h1 className="text-center text-3xl">Galeri</h1>
      <div className="border-[1px] border-black w-[6%] mx-auto mb-3"></div>
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
      </div>

      <div className="mt-5 md:my-16">
        <h1 className="text-center text-3xl">Mitra</h1>
        <div className="border-[1px] border-black w-[6%] mx-auto mb-3"></div>
        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8 mx-5 md:mx-[90px]">
          <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-lg sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px] object-cover object-center mx-auto"
              src="https://source.unsplash.com/600x400?random"
              alt=""
            />
          </div>
          <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-lg sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px] object-cover object-center mx-auto"
              src="https://source.unsplash.com/600x400?random"
              alt=""
            />
          </div>
          <div className="bg-black opacity-[0.9] max-w-sm mx-auto shadow-lg border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-lg sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px] object-cover object-center mx-auto"
              src="https://source.unsplash.com/600x400?random"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className="w-52 h-52 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${gambarList[gambarIndex]})` }}></div> */}
    </>
  )
}

Index.layout = (page) => <HomeLayout children={page} />
export default Index;
