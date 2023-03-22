import HomeLayout from "@/Layouts/HomeLayout";
import {
  CalendarDaysIcon,
  ClockIcon,
  NewspaperIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";

const Berita = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div className="bg-black">
        <div
          className="w-full overflow-auto h-[60vh] z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${"https://source.unsplash.com/600x400?random"})`,
          }}
        >
          <div className="items-center justify-center flex h-[60vh]">
            <div className="h-auto w-full text-center md:text-left md:ml-32">
              <h1 className="text-6xl sm:text-center md:text-left text-white z-50">
                {props.title}
              </h1>
            </div>
          </div>
          {/* <div className="items-center justify-center flex h-[60vh] md:-mt-[50vh]">
                        <h1 className="text-3xl text-black z-50">Selamat datang di Berita artikel seputar pendidikan</h1>
                    </div> */}
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
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Cari berita pendidikan"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-2 gap-8 my-8 md:mx-[90px]">
        <div className="max-w-sm sm:mx-5 md:mx-2 justify-center items-center shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-200 w-340 md:h-[280px] md:w-[380px] object-cover object-top mx-auto"
            src="https://source.unsplash.com/600x400?random"
            alt=""
          />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex" title="Waktu Posting">
                <CalendarDaysIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">12-12-2023, 10:50:05</b>
              </div>
              <div className="flex text-right" title="Nama Penulis">
                <PencilSquareIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Ardianto Putra</b>
              </div>
              <div className="flex text-right" title="Kategori Berita">
                <NewspaperIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Berita</b>
              </div>
            </div>
            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="border-2 border-black w-[90%] mx-auto"></div>

            <div className="justify-center items-center flex mt-3">
              <a
                as="button"
                href="#"
                className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Terus Membaca
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-[280px] w-[380px] object-cover object-top mx-auto"
            src="https://source.unsplash.com/600x400?random"
            alt=""
          />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex" title="Waktu Posting">
                <CalendarDaysIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">12-12-2023, 10:50:05</b>
              </div>
              <div className="flex text-right" title="Nama Penulis">
                <PencilSquareIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Ardianto Putra</b>
              </div>
              <div className="flex text-right" title="Kategori Berita">
                <NewspaperIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Berita</b>
              </div>
            </div>
            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="border-2 border-black w-[90%] mx-auto"></div>

            <div className="justify-center items-center flex mt-3">
              <a
                as="button"
                href="#"
                className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Terus Membaca
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-[280px] w-[380px] object-cover object-top mx-auto"
            src="https://source.unsplash.com/600x400?random"
            alt=""
          />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex" title="Waktu Posting">
                <CalendarDaysIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">12-12-2023, 10:50:05</b>
              </div>
              <div className="flex text-right" title="Nama Penulis">
                <PencilSquareIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Ardianto Putra</b>
              </div>
              <div className="flex text-right" title="Kategori Berita">
                <NewspaperIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Berita</b>
              </div>
            </div>
            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="border-2 border-black w-[90%] mx-auto"></div>

            <div className="justify-center items-center flex mt-3">
              <a
                as="button"
                href="#"
                className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Terus Membaca
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-[280px] w-[380px] object-cover object-top mx-auto"
            src="https://source.unsplash.com/600x400?random"
            alt=""
          />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex" title="Waktu Posting">
                <CalendarDaysIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">12-12-2023, 10:50:05</b>
              </div>
              <div className="flex text-right" title="Nama Penulis">
                <PencilSquareIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Ardianto Putra</b>
              </div>
              <div className="flex text-right" title="Kategori Berita">
                <NewspaperIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Berita</b>
              </div>
            </div>
            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="border-2 border-black w-[90%] mx-auto"></div>

            <div className="justify-center items-center flex mt-3">
              <a
                as="button"
                href="#"
                className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Terus Membaca
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-[280px] w-[380px] object-cover object-top mx-auto"
            src="https://source.unsplash.com/600x400?random"
            alt=""
          />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex" title="Waktu Posting">
                <CalendarDaysIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">12-12-2023, 10:50:05</b>
              </div>
              <div className="flex text-right" title="Nama Penulis">
                <PencilSquareIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Ardianto Putra</b>
              </div>
              <div className="flex text-right" title="Kategori Berita">
                <NewspaperIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Berita</b>
              </div>
            </div>
            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="border-2 border-black w-[90%] mx-auto"></div>

            <div className="justify-center items-center flex mt-3">
              <a
                as="button"
                href="#"
                className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Terus Membaca
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mx-auto shadow-lg bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg h-[280px] w-[380px] object-cover object-top mx-auto"
            src="https://source.unsplash.com/600x400?random"
            alt=""
          />
          <div className="p-5">
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div className="flex" title="Waktu Posting">
                <CalendarDaysIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">12-12-2023, 10:50:05</b>
              </div>
              <div className="flex text-right" title="Nama Penulis">
                <PencilSquareIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Ardianto Putra</b>
              </div>
              <div className="flex text-right" title="Kategori Berita">
                <NewspaperIcon className="w-5 h-5" />{" "}
                <b className="text-xs ml-2">Berita</b>
              </div>
            </div>
            <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <div className="border-2 border-black w-[90%] mx-auto"></div>

            <div className="justify-center items-center flex mt-3">
              <a
                as="button"
                href="#"
                className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Terus Membaca
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Berita.layout = (page) => <HomeLayout children={page} />;
export default Berita;
