import HomeLayout from "@/Layouts/HomeLayout";
import {
  CalendarDaysIcon,
  ClockIcon,
  NewspaperIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Berita = (props) => {
  const [search, setSearch] = useState('');

  const filteredBerita = props.berita.filter(berita =>
    berita.judulBerita.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 9;
  const pageCount = Math.ceil(filteredBerita.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredBerita.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredBerita.length > 0 ? getPageItems(currentPage) : [];

  return (
    <>
      <Head title={props.title} />
      <div className="bg-black">
        <div
          className="w-full h-[40vh] md:h-[60vh] z-0 bg-cover bg-center bg-opacity-80"
          style={{
            backgroundImage: `url(${props.banner.imgUrl})`
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

      <form className="w-80 mx-auto m-5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search" value={search} onChange={e => setSearch(e.target.value)}
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari berita pendidikan"
            required
          />
        </div>
      </form>

      <div className="sm:mx-2">
        <div className="grid grid-cols-1 gap-5 md:gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 md:mx-[90px]">
          {currentPageItems.map((data, i) => {
            return (
              <div key={i} className="w-full">
                <div className="max-w-xs md:max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg h-[280px] w-[380px] object-cover mx-auto" src={data.imgUrl} alt="" />
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
                    <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.judulBerita}</h5>
                    <div className="border-2 border-black w-[90%] mx-auto"></div>

                    <div className="justify-center items-center flex mt-3">
                      <a as="button" href="#" className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Terus Membaca
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center mt-8"}
        pageClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"}
        breakClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-not-allowed text-lg p-2"}
        activeClassName={"text-red-500"}
        previousClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"}
        nextClassName={"mx-2 bg-white text-blue-500 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white text-lg p-2"}
        disabledClassName={"mx-2 bg-gray-300 text-gray-500 rounded-full cursor-not-allowed text-lg p-2"}
      />
    </>
  )
}
Berita.layout = (page) => <HomeLayout children={page} />;
export default Berita;
