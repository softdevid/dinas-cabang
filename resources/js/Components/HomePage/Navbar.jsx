import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [profil, setProfil] = useState(false);
    const handleOpenProfil = () => {
        setProfil(!profil);
    }

    const [publikasi, setPublikasi] = useState(false);
    const handleOpenPublikasi = () => {
        setPublikasi(!publikasi);
    }

    const [menu, setMenu] = useState(false);
    const handleOpenMenu = () => {
        setMenu(!menu);
    }

    return (
        <>
            <nav className="px-2 bg-white border-b-8 border-black">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Softdev</span>
                    </a>
                    <button onClick={() => handleOpenMenu()} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>

                    {menu ? (
                        <div className="absolute top-6 right-0 left-0 w-full md:block md:w-auto" id="navbar-dropdown">
                            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-gray-900">
                                <li>
                                    <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">Beranda</Link>
                                </li>
                                <li>
                                    <button onClick={handleOpenProfil} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">Profil <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                    {/* <!-- Dropdown menu --> */}
                                    {profil && (
                                        <div id="dropdownNavbar" className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link href="/profil-pejabat" className="block px-4 py-2 hover:bg-gray-100">Profil Pejabat</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sejarah" className="block px-4 py-2 hover:bg-gray-100">Sejarah</Link>
                                                </li>
                                                <li>
                                                    <Link href="/visi-misi" className="block px-4 py-2 hover:bg-gray-100">Visi dan misi</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">Informasi Publik/PPID <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                    {/* <!-- Dropdown menu --> */}
                                    <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Daftar Informasi</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Formulir Pengaduan</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Formulir Permohonan Informasi</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">IKM (Index kepuasan Masyarakat)</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Survey Kepuasan Masyarakat</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">Layanan Publik</a>
                                </li>
                                <li>
                                    <button onClick={handleOpenPublikasi} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">Publikasi <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                    {/* <!-- Dropdown menu --> */}
                                    {publikasi && (
                                        <div id="dropdownNavbar" className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link href="/berita" className="block px-4 py-2 hover:bg-gray-100">Berita Artikel</Link>
                                                </li>
                                                <li>
                                                    <Link href="/galeri" className="block px-4 py-2 hover:bg-gray-100">Galeri</Link>
                                                </li>
                                                <li>
                                                    <Link href="/kalender-pendidikan" className="block px-4 py-2 hover:bg-gray-100">Kalender Pendidikan</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">Prestasi</Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                                <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-gray-900">
                                    <li>
                                        <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white md:dark:bg-transparent" aria-current="page">Beranda</Link>
                                    </li>
                                    <li>
                                        <button onClick={handleOpenProfil} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">Profil <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                        {/* <!-- Dropdown menu --> */}
                                        {profil && (
                                            <div id="dropdownNavbar" className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                    <li>
                                                        <Link href="/profil-pejabat" className="block px-4 py-2 hover:bg-gray-100">Profil Pejabat</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/sejarah" className="block px-4 py-2 hover:bg-gray-100">Sejarah</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/visi-misi" className="block px-4 py-2 hover:bg-gray-100">Visi dan misi</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">Informasi Publik/PPID <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Daftar Informasi</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Formulir Pengaduan</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Formulir Permohonan Informasi</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">IKM (Index kepuasan Masyarakat)</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Survey Kepuasan Masyarakat</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">Layanan Publik</a>
                                    </li>
                                    <li>
                                        <button onClick={handleOpenPublikasi} id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto md:dark:hover:bg-transparent">Publikasi <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                                        {/* <!-- Dropdown menu --> */}
                                        {publikasi && (
                                            <div id="dropdownNavbar" className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                                                    <li>
                                                        <Link href="/berita" className="block px-4 py-2 hover:bg-gray-100">Berita Artikel</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/galeri" className="block px-4 py-2 hover:bg-gray-100">Galeri</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/kalender-pendidikan" className="block px-4 py-2 hover:bg-gray-100">Kalender Pendidikan</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                    <li>
                                        <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent">Prestasi</Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>

        </>
    )
}

export default Navbar;
