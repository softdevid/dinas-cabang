import Main from "@/Components/HomePage/Main";
import { Head } from "@inertiajs/react";
const FormulirPengaduan = (props) => {
  return (
    <>
      <Head title={props.title} />
      <h1 className="text-4xl text-center mt-8">{props.title}</h1>
      <div className="border-[1px] border-black w-[6%] mx-auto"></div>

      <div className="md:mx-[200px] mx-3 my-5">
        <div>
          <input type="text" placeholder="Ketik judul Laporan anda" className="w-full" />
          <textarea placeholder="ketik isi Laporan Anda" className="w-full h-40 my-2"></textarea>
          <input type="text" placeholder="Ketik asal pelapor" className="w-full" />
          <label className="my-2">Upload Lampiran</label><br />
          <input type="file" />
          <button className="p-2 bg-red-600 text-white rounded-lg text-right mx-auto">Lapor!</button>
        </div>
      </div>
    </>
  )
}

FormulirPengaduan.layout = (page) => <Main children={page} />
export default FormulirPengaduan;
