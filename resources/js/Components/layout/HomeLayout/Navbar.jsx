import React, { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

const navigation = [
  {
    name: "Beranda",
  },
  {
    name: "Profil",
    option: [
      {
        name: "Profil Pejabat",
        href: "/profil-pejabat",
      },
      {
        name: "Sejarah",
        href: "/sejarah",
      },
      {
        name: "Visi Misi",
        href: "/visi-misi",
      },
    ],
  },
  {
    name: "Informasi Publik/PPID",
    option: [
      {
        name: "Daftar Informasi",
        href: "#",
      },
      {
        name: "Formulir Pengaduan",
        href: "#",
      },
      {
        name: "Formulir Permohonan Informasi",
        href: "#",
      },
      {
        name: "IKM (Index kepuasan Masyarakat)",
        href: "#",
      },
      {
        name: "SKM (Survey Kepuasan Masyarakat)",
        href: "#",
      },
    ],
  },
  {
    name: "Publikasi",
    option: [
      {
        name: "Berita Artikel",
        href: "/berita",
      },
      {
        name: "Galeri",
        href: "/galeri",
      },
      {
        name: "Kalender Pendidikan",
        href: "/kalender-pendidikan",
      },
    ],
  },
  {
    name: "Prestasi",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container px-4 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={
                    "text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Dialog
          as="div"
          className="sm:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <div key={index}>
                      {item.option != null ? (
                        <Disclosure as="div" className="-mx-3">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                {item.name}
                                <ChevronDownIcon
                                  className={`${
                                    open ? "rotate-180" : ""
                                  } h-5 w-5 flex-none`}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="mt-2 space-y-2">
                                {item.option.map((item, index) => (
                                  <Disclosure.Button
                                    key={index}
                                    as="a"
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <div>{item.name}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
};

export default Navbar;
