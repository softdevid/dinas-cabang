import HomeLayout from "@/Layouts/HomeLayout";
import { Head } from "@inertiajs/react";

const DetailBerita = ({ berita }) => {
  return (
    <>
      <Head title={berita.judulBerita} />
      <div className="mx-2 md:mx-[100px]">
        <h1 className="text-center text-xl md:text-3xl font-bold my-4">{berita.judulBerita}</h1>
        <img src={berita.imgUrl} className="mx-auto md:w-full md:max-h-[550px] lg:max-h-[700px] rounded-lg object-cover object-center aspect-video" />

        <p className="text-md md:text-lg mt-3">{berita.deskripsi}</p>
      </div>
    </>
  )
}

DetailBerita.layout = (page) => <HomeLayout children={page} />
export default DetailBerita;
