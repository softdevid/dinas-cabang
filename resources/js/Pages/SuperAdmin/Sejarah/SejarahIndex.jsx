import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link } from "@inertiajs/react";

const SejarahIndex = ({ title, sejarah }) => {
  console.log(sejarah);
  return (
    <>
      <Head title={title} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-md md:text-2xl">{title}</h1>
        </div>
        <div className="justify-end items-end flex">
          <Link href={`/super-admin/sejarah/${sejarah.id}/edit`} className="p-2 bg-yellow-500 text-black rounded-lg">Edit</Link>
        </div>
      </div>

      {sejarah.imgUrl2 ? (
        <>
          <div className="flex gap-4">
            <img src={sejarah.imgUrl} className="w-[60%] h-[50vh] object-cover object-center" />
            <img src={sejarah.imgUrl2} className="w-[40%] h-[50vh] object-cover object-center" />
          </div>
        </>
      ) : (
        <img src={sejarah.imgUrl} className="w-full h-[50vh] object-cover object-center" />
      )}
      <div className="whitespace-pre-wrap">
        <div>{sejarah.deskripsi}</div>
      </div>
    </>
  )
}

SejarahIndex.layout = (page) => <SuperAdminTemplate children={page} />
export default SejarahIndex;
