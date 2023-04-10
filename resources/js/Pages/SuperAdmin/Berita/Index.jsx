import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

const Index = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = (data) => {
    setOpen(true);
    setData(data);
  }

  const closeOpen = () => {
    setOpen(false);
    setData({});
    useEffect(() => {
      setDataBerita(props.berita);
    }, [props.berita]);
  }

  const handleDelete = ({ id }) => {
    router.post(`/super-admin/berita/${id}`)
  }

  //filtered

  const [kategoriFilter, setKategoriFilter] = useState("");
  const [tanggalFilter, setTanggalFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [dataBerita, setDataBerita] = useState([]);

  useEffect(() => {
    setDataBerita(props.berita);
  }, [props.berita]);

  // useEffect(() => {
  //   axios.get(`/api/berita?page=${currentPage}`).then((response) => {
  //     setRinciOrder(response.data.data);
  //     setTotalPages(response.data.last_page);
  //   });
  // }, [currentPage]);

  const handleKategoriFilterChange = (e) => {
    setKategoriFilter(e.target.value);
  };

  const handleTanggalFilterChange = (e) => {
    setTanggalFilter(e.target.value);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBerita = dataBerita.filter(
    (berita) =>
      (kategoriFilter === "" || berita.kategoriBerita === kategoriFilter) &&
      (tanggalFilter === "" || berita.created_at === tanggalFilter) &&
      (searchQuery === "" ||
        berita.judulBerita.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  return (
    <>
      <Head title={props.title} />


      {data.status === "tambah" ? (
        <>
          <Add closeOpen={closeOpen} data={data} props={props} dataBerita={dataBerita} setDataBerita={setDataBerita} />
        </>
      ) : data.status === "edit" ? (
        <>
          <Edit closeOpen={closeOpen} data={data} props={props} />
        </>
      ) : (
        <>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-lg md:text-2xl">{props.title}</h1>
            </div>
            <div className="justify-end items-end flex">
              <button onClick={() => handleOpen({ status: "tambah" })} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</button>
            </div>
          </div>

          <select onChange={handleKategoriFilterChange}>
            <option value="">Semua Kategori</option>
            <option value="berita">Berita</option>
            <option value="informasi">Informasi</option>
            <option value="Kategori 3">Kategori 3</option>
          </select>
          {/* <input type="date" onChange={handleTanggalFilterChange} /> */}
          <input type="text" onChange={handleSearchQueryChange} />

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
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
                {filteredBerita.map((data, i) => {
                  return (
                    <>
                      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                        {/* <td className="px-6 py-4">
                          {data.created_at}
                        </td> */}
                        <td className="px-6 py-4">
                          <button onClick={() => handleOpen({ data, status: "edit" })} className="bg-yellow-500 text-black p-2 rounded-lg">Edit</button>
                          <button className="bg-sky-500 text-white p-2 rounded-lg">Detail</button>
                          <button onClick={() => handleDelete({ id: data.id })} className="bg-red-500 text-white p-2 rounded-lg">Hapus</button>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  )
}

Index.layout = (page) => <SuperAdminTemplate children={page} />
export default Index;
