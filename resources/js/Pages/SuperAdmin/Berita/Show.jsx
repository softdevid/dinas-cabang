import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { CalendarIcon, NewspaperIcon, PencilIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const Show = ({ title, berita }) => {
  // const date = berita.created_at


  // const formatDate = (date) => {
  //   const options = {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     second: 'numeric',
  //     timeZone: 'Asia/Jakarta',
  //     hour12: false,
  //   };
  //   return created_at.toLocaleDateString('id-ID', options);
  // }

  const date = new Date(berita.created_at); // mendapatkan waktu saat ini
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Jakarta',
    hour12: false
  };
  const created_at = date.toLocaleTimeString('id-ID', options); // format waktu sebagai string

  return (
    <>
      <Head title={title} />

      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-lg md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href="/super-admin/berita" className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-lg">Kembali</Link>
        </div>
      </div>

      <div className="container mt-2">
        <img src={berita.imgUrl} className="w-full max-h-[50vh] object-cover object-center rounded-lg" />
        <h1 className="text-3xl font-bold">{berita.judulBerita}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-2">
          <div className="flex" title="Waktu Posting">
            <CalendarDaysIcon className="w-5 h-5" /> <b className="text-xs ml-2">{created_at}</b>
          </div>
          <div className="flex text-right" title="Nama Penulis">
            <PencilSquareIcon className="w-5 h-5" /> <b className="text-xs ml-2">{berita.namaPenulis}</b>
          </div>
          <div className="flex text-right" title="Kategori Berita">
            <NewspaperIcon className="w-5 h-5" /> <b className="text-xs ml-2">{berita.kategoriBerita}</b>
          </div>
        </div>
        <div className="overflow-hidden mt-3">
          <p className="text-ellipsis whitespace-pre-wrap">{berita.deskripsi}</p>
        </div>
      </div>
    </>
  )
}

Show.layout = (page) => <SuperAdminTemplate children={page} />
export default Show;
