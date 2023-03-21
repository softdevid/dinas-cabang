import Main from "@/Components/HomePage/Main";
import { Head } from "@inertiajs/react";

const VisiMisi = (props) => {
    return (
        <>
            <Head title={props.title} />
            <div>
                <div className="w-full h-64 hidden md:block">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="items-center justify-center flex h-64">
                            <b className="text-6xl">{props.title}</b>
                        </div>
                        <div className="hidden md:block">
                            <div className="items-center justify-center h-64 flex">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="w-32 h-32" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-black w-[10%] mx-auto mb-7 hidden md:block"></div>
                <div className="w-full h-64 block md:hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="items-center justify-center flex h-64">
                            <b className="text-6xl">{props.title}</b>
                        </div>
                        <div className=" items-center justify-center flex">
                            <div className="border-2 border-black w-[20%] -mt-48"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-52 my-20">
                <h1 className="text-5xl text-blue-600 text-center my-10">Visi</h1>
                <p className="text-center text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi vitae doloremque optio velit et consectetur aspernatur ipsum. Alias, corrupti.</p>
            </div>

            <div className="mx-52 my-28">
                <h1 className="text-5xl text-blue-600 text-center my-10">Misi</h1>
                <li className="text-left text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi vitae doloremque optio velit et consectetur aspernatur ipsum. Alias, corrupti.</li>
                <li className="text-left text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi vitae doloremque optio velit et consectetur aspernatur ipsum. Alias, corrupti.</li>
                <li className="text-left text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi vitae doloremque optio velit et consectetur aspernatur ipsum. Alias, corrupti.</li>
                <li className="text-left text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi vitae doloremque optio velit et consectetur aspernatur ipsum. Alias, corrupti.</li>
            </div>
        </>
    )
}


VisiMisi.layout = (page) => <Main children={page} />
export default VisiMisi;
