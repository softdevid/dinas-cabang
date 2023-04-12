import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index2 = ({ title }) => {
  const [beritas, setBeritas] = useState([]);
  const [kategoriBerita, setKategoriBerita] = useState('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/data-berita', {
          params: {
            kategoriBerita: kategoriBerita,
            search: search,
            page: currentPage,
          },
        });

        if (currentPage === 1) {
          setBeritas(response.data.data);
        } else {
          setBeritas((prevUsers) => [...prevUsers, ...response.data.data]);
        }

        setHasMore(response.data.current_page < response.data.last_page);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [kategoriBerita, search, currentPage]);

  const handleKategoriChange = (event) => {
    setKategoriBerita(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/berita/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
        </div>
      </div>

      <div>
        {/* <form>
          <div>
            <label>Kategori Berita:</label>
            <select value={kategoriBerita} onChange={handleKategoriChange}>
              <option value="all">All</option>
              <option value="Berita">Berita</option>
              <option value="Informasi">Informasi</option>
            </select>
          </div>
          <div>
            <label>Search:</label>
            <input type="text" value={search} onChange={handleSearchChange} />
          </div>
        </form> */}
        <input placeholder="Cari Artikel" type="text" value={search} onChange={handleSearchChange} className="rounded-lg" />
        <select value={kategoriBerita} onChange={handleKategoriChange} className="rounded-lg ml-2">
          <option value="all">Semua Kategori</option>
          <option value="Berita">Berita</option>
          <option value="Informasi">Informasi</option>
        </select>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Cover
                </th>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3">
                  Kategori
                </th>
                <th scope="col" className="px-6 py-3">
                  Penulis
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {beritas.map((data, i) => {
                return (
                  <>
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {i + 1}
                      </th>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img src={data.imgUrl} className="w-10 h-10 object-cover" />
                      </th>
                      <td className="px-6 py-4">
                        {data.judulBerita}
                      </td>
                      <td className="px-6 py-4">
                        {data.kategoriBerita}
                      </td>
                      <td className="px-6 py-4">
                        {data.namaPenulis}
                      </td>
                      <td className="px-6 py-4">
                        <Link href={`/super-admin/berita/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-2">Edit</Link>
                        <button className="bg-sky-500 text-white p-2 rounded-lg mx-2">Detail</button>
                        <button onClick={() => handleDelete({ id: data.id })} className="bg-red-500 mx-2 text-white p-2 rounded-lg">Hapus</button>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        </div>
        {hasMore && <div>Loading...</div>}
      </div>

    </>
  )
}


Index2.layout = (page) => <SuperAdminTemplate children={page} />
export default Index2;
