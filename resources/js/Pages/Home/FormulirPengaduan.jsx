import Main from "@/Components/HomePage/Main";
import { Head } from "@inertiajs/react";
const FormulirPengaduan = (props) => {
  return (
    <>
      <Head title={props.title} />
      <h1 className="text-4xl text-center mt-8">{props.title}</h1>
      <div className="border-[1px] border-black w-[6%] mx-auto"></div>

      <div className="md:mx-[200px] mx-3 my-5">
        <div className="border-2 rounded-lg">
          <div className="m-3">
            <input type="text" placeholder="Ketik judul Laporan anda" className="w-full" />
            <textarea placeholder="ketik isi Laporan Anda" className="w-full h-40 my-2"></textarea>
            <input type="text" placeholder="Ketik asal pelapor" className="w-full" />
            <div>
              <select className="w-full my-2">
                <option>Pilih jenis Pelaporan</option>
                <option>Pengaduan</option>
                <option>Aspirasi</option>
              </select>
            </div>
            <div className="grid grid-cols-2 mt-4">
              <div className="my-2">
                <label>Upload Lampiran</label><br />
                <input type="file" />
              </div>
              <div className="justify-end items-end flex">
                <button className="p-2 mt-4 bg-red-600 text-white rounded-lg text-right mx-auto">Lapor!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

FormulirPengaduan.layout = (page) => <Main children={page} />
export default FormulirPengaduan;
