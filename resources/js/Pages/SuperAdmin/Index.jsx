import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head } from "@inertiajs/react";

const Index = (props) => {
  console.log(props)
  return (
    <>
      <Head title={props.title} />
      <div className="mt-14">
        <div className="mb-3">
          <h1 className="text-lg md:text-2xl font-bold">{props.title}</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-white bg-purple-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Prestasi
            </h1>
            <p className="text-center">{props.prestasiCount}</p>
          </div>
          <div className="text-white bg-blue-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Artikel
            </h1>
            <p className="text-center">{props.beritaCount}</p>
          </div>
          <div className="text-white bg-green-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Siswa
            </h1>
            <p className="text-center">{props.siswaCount}</p>
          </div>
          <div className="text-white bg-red-600 w-full h-20 rounded-lg md:rounded-2xl">
            <h1 className="text-center mt-3 font-bold text-md md:text-lg">
              Guru
            </h1>
            <p className="text-center">{props.guruCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Index.layout = (page) => <SuperAdminTemplate children={page} />;
export default Index;
