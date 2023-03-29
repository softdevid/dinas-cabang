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
    href: "/",
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
        href: "/daftar-informasi",
      },
      {
        name: "Formulir Pengaduan",
        href: "/formulir-pengaduan",
      },
      {
        name: "Formulir Permohonan Informasi",
        href: "#",
      },
      {
        name: "IKM (Index kepuasan Masyarakat)",
        href: "/index-kepuasan-masyarakat",
      },
      {
        name: "SKM (Survey Kepuasan Masyarakat)",
        href: "/survey-kepuasan-masyarakat",
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
    name: "Layanan Publik",
    href: "/layanan-publik",
  },
  {
    name: "Prestasi",
    href: "/prestasi",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-4 md:px-6 lg:px-8 py-5">
      <div className="flex md:flex-1 justify-between">
        <div className="hidden md:flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-start">
          <div className="md:hidden flex flex-shrink-0 items-center mr-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </div>
          <Popover.Group className="hidden md:ml-6 md:flex md:justify-end md:space-x-12">
            {navigation.map((item, index) => (
              <div key={index} className="flex items-center">
                {item.option != null ? (
                  <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-slate-900">
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4" />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-0">
                        <div className="p-4">
                          {item.option.map((item, index) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <Link as="button"
                                  href={item.href}
                                  className="block font-semibold text-gray-900"
                                >
                                  {item.name}
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                ) : (
                  <Link
                    as="button"
                    href={item.href}
                    className="text-base font-semibold leading-6 text-slate-900"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </Popover.Group>
        </div>
        <Dialog
          as="div"
          className="md:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 md:max-w-md md:ring-1 md:ring-gray-900/10">
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
                                  className={`${open ? "rotate-180" : ""
                                    } h-5 w-5 flex-none`}
                                  aria-hidden="true"
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="mt-2 space-y-2">
                                {item.option.map((item, index) => (
                                  <Disclosure.Button
                                    key={index}
                                    as={Link}
                                    href={item.href}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-md font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  >
                                    {item.name}
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <Link as="button" href={item.href}>
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
