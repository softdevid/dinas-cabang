import { Link } from "@inertiajs/react";
import { useState } from "react";
import {
  ArchiveBoxArrowDownIcon,
  ArrowLeftIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  ListBulletIcon,
  NewspaperIcon,
  TrophyIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const AdminSekolahLayout = ({ children }) => {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex">
          <div
            className={` ${
              open ? "w-72" : "w-20 "
            } bg-gradient-to-t from-sky-700 via-blue-700 to-cyan-500 p-5  pt-8 relative duration-300`}
          >
            {/* <img
                        src="/img/control.png"
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    /> */}
            <div
              className={`bg-white absolute cursor-pointer -right-3 top-9 w-8 border-dark-purple border-2 rounded-full  ${
                !open && "rotate-180"
              }`}
              onClick={() => setOpen(!open)}
            >
              <ArrowLeftIcon />
            </div>

            <div className="flex gap-x-4 items-center">
              <img
                src="/img/logo.png"
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                }`}
              />
              <h1
                className={`text-white origin-left font-bold text-xl duration-200 ${
                  !open && "scale-0"
                }`}
              >
                SEkolah ... <br />
              </h1>
            </div>
            <ul className="pt-6">
              <Link href="/sekolah/dashboard">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <ComputerDesktopIcon className="h-6 w-6 text-white" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-white font-semibold duration-200`}
                  >
                    Dashboard
                  </span>
                </li>
              </Link>
              <Link href="/sekolah/prestasi">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <TrophyIcon className="h-6 w-6 text-white" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-white font-semibold duration-200`}
                  >
                    Prestasi
                  </span>
                </li>
              </Link>

              <Link href="/sekolah/artikel">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <NewspaperIcon className="h-6 w-6 text-white" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-white font-semibold duration-200`}
                  >
                    Artikel
                  </span>
                </li>
              </Link>
              <Link href="/sekolah/guru">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <UserGroupIcon className="h-6 w-6 text-white" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-white font-semibold duration-200`}
                  >
                    Guru
                  </span>
                </li>
              </Link>
              <Link href="/sekolah/profil">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <UserCircleIcon className="h-6 w-6 text-white" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-white font-semibold duration-200`}
                  >
                    Profil
                  </span>
                </li>
              </Link>
              <button onClick={() => handleLogout()} as="button">
                <li
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4`}
                >
                  <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white" />
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left text-white font-semibold duration-200`}
                  >
                    Keluar
                  </span>
                </li>
              </button>
            </ul>
          </div>
          <div className="h-screen overflow-y-auto overflow-x-auto flex-1 p-7">
            {children}
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-8 p-3 bg-gradient-to-t bg-sky-500 text-white z-50">
          <div>
            {/* <img src="" /> */}
            <h1 className="text-xl font-bold">Pasar Pintar</h1>
          </div>
          <div className="text-right">
            <button
              className="font-medium rounded-lg text-sm p-2 mr-2 focus:outline-none"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="z-30 m-3 container">{props.children}</div>

        {/* <!-- drawer component --> */}
        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-gradient-to-t from-sky-700 via-blue-700 to-cyan-500 w-80"
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-white uppercase"
          >
            Menu - Sekolah ...
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2">
              <>
                <li>
                  <Link
                    href="/sekolah/dashboard"
                    className="flex items-center p-2 text-base font-normal text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <ComputerDesktopIcon className="h-6 w-6" />
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sekolah/prestasi"
                    className="flex items-center p-2 text-base font-normal text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <TrophyIcon className="h-6 w-6" />
                    <span className="ml-3">Prestasi</span>
                  </Link>
                </li>
              </>
              <li>
                <Link
                  href="/sekolah/artikel"
                  className="flex items-center p-2 text-base font-normal text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <NewspaperIcon className="h-6 w-6" />
                  <span className="ml-3">Artikel</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sekolah/profil"
                  className="flex items-center p-2 text-base font-normal text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <UserGroupIcon className="h-6 w-6" />
                  <span className="ml-3">Guru</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sekolah/profil"
                  className="flex items-center p-2 text-base font-normal text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <UserCircleIcon className="h-6 w-6" />
                  <span className="ml-3">Profil</span>
                </Link>
              </li>
              <li>
                <button
                  as="button"
                  onClick={() => handleLogout()}
                  className="flex items-center p-2 text-base font-normal text-white hover:text-gray-900 rounded-lg hover:bg-gray-100"
                >
                  <ArrowRightOnRectangleIcon className="h-6 w-6" />
                  <span className="ml-3">Keluar</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSekolahLayout;
