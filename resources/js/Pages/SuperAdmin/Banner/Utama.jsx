import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate"
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import TabBanner from "./TabBanner";

const Utama = (props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState("");
  const handleOpen = (data) => {
    setOpen(true);
    setData(data);
  }
  return (
    <>
      <Head title={props.title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-xl md:text-2xl">{props.title}</h1>
        </div>
        <div onClick={handleOpen} className="justify-end items-end flex">
          <button className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">Tambah</button>
        </div>
      </div>

      <TabBanner />

      <table className="w-full table-auto">
        <thead>
          <tr className="font-bold">
            <th>Gambar</th>
            <th>Deskripsi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="justify-center items-center flex">
              <img src="https://source.unsplash.com/600x400?random" className="max-w-sm max-h-40 object-cover object-center" />
            </td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, optio.</td>
            <td>
              <button className="text-white bg-red-500 p-2 rounded-lg flex"><TrashIcon className="w-5 h-5" />Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

Utama.layout = (page) => <SuperAdminTemplate children={page} />
export default Utama;
