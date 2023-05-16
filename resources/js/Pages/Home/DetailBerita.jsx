import HomeLayout from "@/Layouts/HomeLayout";
import { CalendarDaysIcon, NewspaperIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { Head, Link } from "@inertiajs/react";

const DetailBerita = ({ berita, beritas }) => {
  return (
    <>
      <Head title={berita.judulBerita} />
      <div className="mx-2 md:mx-[100px] block md:flex">
        <div className="md:w-[70%]">
          <h1 className="text-center text-xl md:text-3xl font-bold my-4">{berita.judulBerita}</h1>
          <img src={berita.imgUrl} className="mx-auto md:w-full md:max-h-[550px] lg:max-h-[700px] rounded-lg object-cover object-center aspect-video" />
          <p className="text-md md:text-lg mt-3 whitespace-pre-wrap">{berita.deskripsi}</p>
        </div>
        <div className="md:w-[30%] mx-auto">
          <h1 className="text-lg mt-3 font-bold">Berita lain</h1>
          {beritas.data.map((data) => {
            return (
              <>
                <div className="md:ml-5 max-w-xs mt-3 md:mt-7 md:max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg h-[180px] w-full object-cover mx-auto" src={data.imgUrl} alt="" />
                  <div className="p-5">
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="flex" title="Waktu Posting">
                        <CalendarDaysIcon className="w-5 h-5" /> <b className="text-xs ml-2">{data.created_at}</b>
                      </div>
                      <div className="flex text-right" title="Nama Penulis">
                        <PencilSquareIcon className="w-5 h-5" /> <b className="text-xs ml-2">{data.namaPenulis}</b>
                      </div>
                      <div className="flex text-right" title="Kategori Berita">
                        <NewspaperIcon className="w-5 h-5" /> <b className="text-xs ml-2">{data.kategoriBerita}</b>
                      </div>
                    </div>
                    <h5 className="mb-2 text-md md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{data.judulBerita}</h5>
                    <div className="border-2 border-black w-[90%] mx-auto"></div>

                    <div className="justify-center items-center flex mt-3">
                      <Link as="button" href={`/berita/${data.slug}`} className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Terus Membaca
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

DetailBerita.layout = (page) => <HomeLayout children={page} />
export default DetailBerita;
