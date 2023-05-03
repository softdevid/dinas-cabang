import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const PrestasiIlmusosial = ({ sosial, openOlahraga }) => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchItems();
  }, [currentPage]);

  const fetchItems = () => {
    axios.get(`/data-prestasi-sosial?page=${currentPage}`)
      .then(response => {
        const data = response.data;
        setItems(data.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <>
      {sosial && (
        <div
          id="accordion-flush-body-2"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="overflow-x-auto py-5 font-light border-b border-gray-200 dark:border-gray-700">
            <table>
              <tr className="border-b">
                <th className="px-4 py-2 text-sm">#</th>
                <th className="px-4 py-2 text-sm">Nama Lomba</th>
                <th className="px-4 py-2 text-sm">Kategori Lomba</th>
                <th className="px-4 py-2 text-sm">Nama Peserta</th>
                <th className="px-4 py-2 text-sm">Status Peserta</th>
                <th className="px-4 py-2 text-sm">Asal Instansi</th>
                <th className="px-4 py-2 text-sm">Penanggung jawab dan pelaksana</th>
                <th className="px-4 py-2 text-sm">Target Capaian</th>
                <th className="px-4 py-2 text-sm">Jadwal Pelaksanaan</th>
                <th className="px-4 py-2 text-sm">Sumber Anggaran</th>
                <th className="px-4 py-2 text-sm">Tingkat prestasi</th>
              </tr>
              {items.length > 0 ? (
                <>
                  {items.map((data, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="px-4 py-2 text-sm">{data.namaLomba}</td>
                        <td className="px-4 py-2 text-sm">{data.kategoriLomba}</td>
                        <td className="px-4 py-2 text-sm">{data.namaPeserta}</td>
                        <td className="px-4 py-2 text-sm">{data.statusPeserta}</td>
                        <td className="px-4 py-2 text-sm">{data.asalInstansi}</td>
                        <td className="px-4 py-2 text-sm">{data.penanggungJawab}</td>
                        <td className="px-4 py-2 text-sm">{data.targetCapaian}</td>
                        <td className="px-4 py-2 text-sm">{data.jadwalPelaksanaan}</td>
                        <td className="px-4 py-2 text-sm">{data.sumberAnggaran}</td>
                        <td className="px-4 py-2 text-sm">{data.tingkatPrestasi}</td>
                      </tr>
                    )
                  })}
                </>
              ) : (
                <td className="text-center" colSpan={11}>Belum ada prestasi lain</td>
              )}
            </table>
          </div>
          <div className="flex items-center justify-center mt-2">
            <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}
              className="font-bold p-2 bg-gray-600 text-white rounded-lg flex"><ArrowLeftCircleIcon className="w-5 h-5" /> Previous</button>
            <button onClick={() => handlePageChange(currentPage + 1)}
              className="font-bold p-2 bg-gray-600 text-white rounded-lg flex ml-1"><ArrowRightCircleIcon className="w-5 h-5" /> Next</button>
          </div>
        </div>
      )}
    </>
  )
}

export default PrestasiIlmusosial;
