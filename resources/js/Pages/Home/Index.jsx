import Main from "@/Components/HomePage/Main";
import { Head } from "@inertiajs/react";

const Index = (props) => {
    return (
        <>
            <Head title={props.title} />
            Halaman Utama ya kenapa
        </>
    )
}

Index.layout = (page) => <Main children={page} />
export default Index;
