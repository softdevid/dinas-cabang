import { Menu, Transition } from "@headlessui/react";
import { UserIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { Fragment, useContext, useState } from "react";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";

const Navbar = () => {
  const context = useContext(AdminSekolahContext);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="-m-2.5 inline-flex md:hidden items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => context.setMobileMenuOpen(true)}
            >
              <span className="sr-only">open/close main menu</span>
              {context.mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
              {/* <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              /> */}
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white focus:outline-none">
                Admin Sekolah - ...
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-slate-500 text-sm focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <UserIcon className="h-8 w-8 p-1 rounded-full text-slate-50" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
