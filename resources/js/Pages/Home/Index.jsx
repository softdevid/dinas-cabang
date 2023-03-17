import Main from "@/Components/HomePage/Main";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const Index = (props) => {
    console.log(props);

    return (
        <>
            <Head title={props.title} />
            <div className="bg-white w-full overflow-auto h-[80vh]">
                {/* <h1 className="text-white text-center z-50">Halo</h1> */}
                <div className="hidden lg:block bg-white border-4 border-sky-500 z-50 w-[500px] h-56 float-right mt-[20vh] mr-10"></div>
            </div>
            <div className="bg-sky-600 h-48 grid grid-cols-2 gap-8">
                <div className="m-auto">
                    <p className="text-white text-3xl font-serif">Lihat apa yang Terjadi Baca Berita Terbaru</p>
                </div>
                <div className="m-auto">
                    <Link className="p-2 rounded-xl bg-yellow-400 text-black hover:bg-yellow-500 text-xl">Lihat Semua Berita</Link>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="-mt-10  ml-48 z-50">
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                            <li className="mr-2 bg-green-500 text-white rounded-lg" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Visi</button>
                            </li>
                            <li className="mr-2 bg-yellow-300 rounded-lg" role="presentation">
                                <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Misi</button>
                            </li>
                            <li className="mr-2 bg-cyan-500 rounded-lg" role="presentation">
                                <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Organisasi</button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p className="text-sm text-black dark:text-gray-400"><strong className="font-medium text-gray-800 dark:text-white">INi adalah visi</strong></p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p className="text-sm text-black dark:text-gray-400"><strong className="font-medium text-gray-800 dark:text-white">INi adalah Misi</strong></p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            <p className="text-sm text-black dark:text-gray-400"><strong className="font-medium text-gray-800 dark:text-white">Ini adalah Organisasi</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="h-[1000px]">

            </div> */}
        </>
    )
}

Index.layout = (page) => <Main children={page} />
export default Index;
