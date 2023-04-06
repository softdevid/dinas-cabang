import { Link } from "@inertiajs/react";

const TabBanner = () => {
  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <Link href="/super-admin/banner" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Halaman Utama</Link>
        </li>
        <li className="mr-2">
          <Link href="/super-admin/banner/sejarah" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Sejarah</Link>
        </li>
        <li className="mr-2">
          <Link href="/super-admin/banner/berita" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Berita</Link>
        </li>
        <li className="mr-2">
          <Link href="/super-admin/banner/galeri" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Galeri</Link>
        </li>
      </ul>
    </>
  )
}

export default TabBanner;
