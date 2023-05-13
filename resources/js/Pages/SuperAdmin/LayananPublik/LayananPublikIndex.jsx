import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link } from "@inertiajs/react";

const LayananPublikIndex = ({ title }) => {
  return (
    <>
      <Head title={title} />
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-md md:text-2xl">{title}</h1>
        </div>
        <div className="flex items-end justify-end">
          <Link href="/super-admin/layanan-publik/create" className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 text-white">Tambah</Link>
        </div>
      </div>
    </>
  )
}

LayananPublikIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default LayananPublikIndex;
