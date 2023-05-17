import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prestasi = ({ title, prestasi }) => {

  const handleDelete = ({ id }) => {
    axios
      .delete(`/super-admin/prestasi/${id}`)
      .then((res) => {
        toast.success(res.data.data, {
          position: toast.POSITION.TOP_CENTER
        });

        setTimeout(() => {
          router.get(`/super-admin/prestasi`);
        }, 1000);
      })
  }

  const [search, setSearch] = useState('');
  const [targetCapaian, setTargetCapaian] = useState('all');
  const [kategoriLomba, setKategoriLomba] = useState('all');


  const filteredPrestasi = prestasi.filter(prestasi =>
    prestasi.namaPeserta.toLowerCase().includes(search.toLowerCase())
    && (targetCapaian === 'all' || prestasi.targetCapaian === targetCapaian)
    && (kategoriLomba === 'all' || prestasi.kategoriLomba === kategoriLomba)
    // && prestasi.mapel.toLowerCase().includes(mapel.toLowerCase())
  );

  const pageSize = 20;
  const pageCount = Math.ceil(filteredPrestasi.length / pageSize);

  function getPageItems(page) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredPrestasi.slice(startIndex, endIndex);
  }

  function handlePageClick(data) {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  }


  const [currentPage, setCurrentPage] = useState(1);
  const currentPageItems = filteredPrestasi.length > 0 ? getPageItems(currentPage) : [];

  const [data, setData] = useState({})
  const [open, setOpen] = useState(false)
  function handleOpen(data) {
    setData(data)
    setOpen(true)
  }

  function handleClose() {
    setData({})
    setOpen(false)
  }

  return (
    <>
      <Head title={title} />
      <ToastContainer autoClose={2000} />

      {!open ? (
        <>
          <div className="grid grid-cols-2 mb-4">
            <div>
              <h1 className="text-lg md:text-2xl">{title}</h1>
            </div>
            <div className="justify-end items-end flex">
              <Link href="/super-admin/prestasi/create" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">Tambah</Link>
            </div>
          </div>

          <div className="block md:flex">

            <input placeholder="Cari Nama Peserta" type="text" value={search} onChange={e => setSearch(e.target.value)} className="rounded-lg mt-1 md:mt-0" />

            <select value={targetCapaian} onChange={e => setTargetCapaian(e.target.value)} className="rounded-lg md:ml-2 mt-1 md:mt-0">
              <option value="all">Semua Peringkat</option>
              <option value="Juara 1">Juara 1</option>
              <option value="Juara 2">Juara 2</option>
              <option value="Juara 3">Juara 3</option>
              <option value="Juara 4">Juara 4</option>
              <option value="Juara 5">Juara 5</option>
            </select>
            <select value={kategoriLomba} onChange={e => setKategoriLomba(e.target.value)} className="rounded-lg md:ml-2 mt-1 md:mt-0">
              <option value="all">Semua Kategori Lomba</option>
              <option value="Olahraga">Olahraga</option>
              <option value="Teknologi">Teknologi</option>
              <option value="Seni budaya">Seni budaya</option>
              <option value="Ilmu sosial">Ilmu sosial</option>
            </select>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-4">
                    #
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Nama Lomba
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Nama Peserta
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Peringkat
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Asal Instansi
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Kategori Lomba
                  </th>
                  <th scope="col" className="px-2 py-4">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentPageItems.map((data, i) => {
                  return (
                    <>
                      <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {i + 1}
                        </th>
                        <td className="px-2 py-4">
                          {data.namaLomba}
                        </td>
                        <td className="px-2 py-4">
                          {data.namaPeserta}
                        </td>
                        <td className="px-2 py-4">
                          {data.targetCapaian}
                        </td>
                        <td className="px-2 py-4">
                          {data.asalInstansi}
                        </td>
                        <td className="px-2 py-4">
                          {data.kategoriLomba}
                        </td>
                        <td className="px-2 py-4">
                          <Link href={`/super-admin/prestasi/${data.id}/edit`} className="bg-yellow-500 text-black p-2 rounded-lg mx-1">Edit</Link>
                          <button onClick={() => handleOpen(data)} className="bg-sky-500 text-white p-2 rounded-lg mx-1">Detail</button>
                          <button onClick={() => handleDelete({ id: data.id })} className="bg-red-500 mx-1 text-white p-2 rounded-lg">Hapus</button>
                        </td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </table>
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
      ) : (
        <>
          <Show data={data} handleClose={handleClose} />
        </>
      )}
    </>
  )
}

function Show({ data, handleClose }) {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">Detail Guru</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={handleClose} className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg">Kembali</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
        <h1 className="text-bold font-lg">Nama Peserta: {data.namaPeserta}</h1>
        <h1 className="text-bold font-lg">Nama Lomba: {data.namaLomba}</h1>
        <h1 className="text-bold font-lg">Pelaksanaan: {data.jadwalPelaksanaan}</h1>
        <h1 className="text-bold font-lg">Kategori Lomba: {data.kategoriLomba}</h1>
        <h1 className="text-bold font-lg">Pencapaian: {data.targetCapaian}</h1>
        <h1 className="text-bold font-lg">Tingkat Prestasi: {data.tingkatPrestasi}</h1>
        <h1 className="text-bold font-lg">Status Peserta Saat ini: {data.statusPeserta}</h1>
        <h1 className="text-bold font-lg">Dari Sekolah: {data.namaSekolah}</h1>
      </div>
    </>
  )
}

Prestasi.layout = (page) => <SuperAdminTemplate children={page} />
export default Prestasi;
