import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const LayananPublikTambah = ({ title }) => {
  const [options, setOptions] = useState([]);

  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    const newOptions = [...options, ''];
    setOptions(newOptions);
  };

  return (
    <>
      <Head title={title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-md md:text-2xl">{title}</h1>
        </div>
        <div className="flex items-end justify-end">
          <Link href="/super-admin/layanan-publik" className="bg-gray-500 p-2 rounded-lg hover:bg-gray-600 text-white">Kembali</Link>
        </div>
      </div>

      <div>
        <label>Opsi Jawaban:</label>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <input type="text" value={option} onChange={event => handleOptionChange(event, index)} />
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleAddOption}>Tambah Opsi</button>
      </div>
    </>
  )
}

LayananPublikTambah.layout = (page) => <SuperAdminTemplate children={page} />
export default LayananPublikTambah;
