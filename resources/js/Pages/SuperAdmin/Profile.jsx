import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head, Link } from "@inertiajs/react";

const Profile = (props) => {
  return (
    <>
      <Head title={props.title} />
      <div className="mt-14">
        <div className="mb-3">
          <h1 className="text-lg md:text-2xl font-bold">{props.title}</h1>
        </div>
        <div className="flex justify-end mx-auto">
          <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ubah Profil
          </Link>
        </div>
        <section className="container mx-auto p-6 font-mono">
          <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3">Nama</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Password</th>
                    <th className="px-4 py-3">Kota</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">Sufyan</p>
                          <p className="text-xs text-gray-600">Developer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      xxxxxx@gmail.com
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight rounded-sm">
                        ***********
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">Banyumas</td>
                  </tr>
                  <tr className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold text-black">Sufyan</p>
                          <p className="text-xs text-gray-600">Developer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      xxxxxx@gmail.com
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight rounded-sm">
                        ***********
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">Banyumas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Profile.layout = (page) => <SuperAdminTemplate children={page} />;
export default Profile;
