import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

const SurveyKepuasanMasyarakat = (props) => {
  return (
    <>
      <Head title={props.title} />

      <h1 className="text-4xl text-center mt-8">{props.title}</h1>
      <div className="border-[1px] border-black w-[6%] mx-auto"></div>

      <div className="md:mx-[200px] mx-3 grid grid-cols-1 md:grid-cols-2 my-8">
        <div>
          <h1 className="text-2xl mb-3">Langkah Pengisian Survey</h1>
          <ul>
            <li>1. ISIKAN DATA RESPONDAN</li>
            <li>2. PILIH JENIS LAYANAN YANG ANDA NILAI</li>
            <li>3. JAWAB PERTANYAAN YANG DI BERIKAN</li>
            <li>4. BERIKAN SARAN DAN MASUKAN</li>
            <li>5. SUBMIT DAN SELESAI</li>
          </ul>
        </div>
        <div>
          <h1>Informasi Kontak</h1>
          <input type="text" placeholder="No Handphone" className="w-full mb-2 rounded-lg" />
          <input type="text" placeholder="Email" className="w-full mb-2 rounded-lg" />

          <h1>Usia</h1>
          <input type="number" placeholder="Masukan usia anda" className="w-full mb-2 rounded-lg" />

          <h1>Pendidikan</h1>
          <select className="w-full mb-2 rounded-lg">
            <option>Pilih pendidikan</option>
            <option>SD</option>
            <option>SMP</option>
            <option>SMA</option>
            <option>D1/D2/D3</option>
            <option>S1</option>
            <option>S2</option>
          </select>

          <h1>Pekerjaan</h1>
          <select className="w-full mb-2 rounded-lg">
            <option>Pilih pekerjaan</option>
            <option>PNS/TNI/POLRI</option>
            <option>Pegawai Swasta</option>
            <option>Wiraswasta</option>
            <option>Pelajar/Mahasiswa</option>
            <option>Lainnya</option>
          </select>

          <h1>Jenis Kelamin</h1>
          <select className="w-full mb-2 rounded-lg">
            <option>Pilih jenis kelamin</option>
            <option>Laki-laki</option>
            <option>Perempuan</option>
          </select>

          <button className="bg-green-500 text-white p-2 rounded-lg">Submit</button>
        </div>
      </div>
    </>
  )
}

SurveyKepuasanMasyarakat.layout = (page) => <HomeLayout children={page} />
export default SurveyKepuasanMasyarakat;
