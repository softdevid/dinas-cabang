import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate"
import { Head } from "@inertiajs/react";
import TabBanner from "./TabBanner";

const Berita = (props) => {
  return (
    <>
      <Head title={props.title} />
      <h1 className="text-xl md:text-2xl">{props.title}</h1>
      <TabBanner />
    </>
  )
}

Berita.layout = (page) => <SuperAdminTemplate children={page} />
export default Berita;
