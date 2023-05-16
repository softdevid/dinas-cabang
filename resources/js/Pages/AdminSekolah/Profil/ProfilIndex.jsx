import AdminSekolahLayout from "@/Layouts/AdminSekolahLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const ProfilIndex = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div className="mt-14">
        <div className="mb-3">
          <h1 className="text-xl md:text-2xl font-bold">{props.title}</h1>
        </div>

        <main className="relative block">
          <section className="relative block h-[500px]">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://source.unsplash.com/1000x600?nature)",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
          </section>
          <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={props.dataSekolah.imgUrl}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        />
                        {/* <img
                          alt="..."
                          src="https://media.licdn.com/dms/image/C560BAQG_oAJ1-3IS6w/company-logo_200_200/0/1629859012786?e=2147483647&v=beta&t=FnQPgR2NI2eERTgHxBnxhoP2eprshYlIkYErZbRahyA"
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        /> */}
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <Link href={`/admin-sekolah/${props.dataSekolah.kode}/profil/${props.dataSekolah.id}/edit`}
                          className="bg-amber-400 active:bg-amber-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {props.prestasiCount}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Prestasi
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {props.guruCount}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Guru
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            {props.siswaCount}
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Siswa
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                      {props.dataSekolah.namaSekolah}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i> */}
                      <p>{props.dataSekolah.alamatLengkap}</p>
                    </div>
                    <p>{props.dataSekolah.email}</p>
                    <p>{props.dataSekolah.noHp}</p>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        Visi
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {props.dataSekolah.visi}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        Misi
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {props.dataSekolah.misi}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

ProfilIndex.layout = (page) => <AdminSekolahLayout children={page} />;
export default ProfilIndex;
