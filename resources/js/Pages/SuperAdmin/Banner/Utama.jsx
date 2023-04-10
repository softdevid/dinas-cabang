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

  const handleClose = () => {
    setOpen(false);
    setData({});
  }

  const [values, setValues] = useState([
    {
      imgName: "",
      imgUrl: "",
      deskripsi: "",
    }
  ])
  console.log(values);

  const [image, setImage] = useState([]);
  const uploadImageUtama = () => {
    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dthan3ueu',
      uploadPreset: 'cbtgoh6l',
      maxFiles: 1,
      sources: ['local', 'camera', 'unsplash'],
      folder: 'banner'
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        // console.log('Done! Here is the image info: ', result.info);
        setValues({ imgName: result.info.url, imgUrl: result.info.public_id })
      }
    }
    )
    myWidget.open();
  }

  return (
    <>
      {data.status === "tambah" ? (
        <Add open={open} data={data} handleClose={handleClose} props={props} />
      ) : data.status === "edit" ? (
        <Edit />
      ) : (
        <>
          <Head title={props.title} />
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-xl md:text-2xl">{props.title}</h1>
            </div>
            <div className="justify-end items-end flex">
              <button onClick={() => handleOpen({ status: "tambah" })} className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">Tambah</button>
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
      )}
    </>
  )
}

function Add({ open, data, handleClose, props }) {
  return (
    <>
      <Head title={props.title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-xl md:text-2xl">Tambah Banner</h1>
        </div>
        <div className="justify-end items-end flex">
          <button onClick={() => handleClose()} className="text-white bg-gray-500 hover:bg-gray-600 p-2 rounded-lg">Kembali</button>
        </div>
      </div>
    </>
  )
}

Utama.layout = (page) => <SuperAdminTemplate children={page} />
export default Utama;
