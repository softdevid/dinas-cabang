import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Link } from "@inertiajs/react";

const Index = () => {
  return (
    <>
      <Link href="/super-admin/skm/create">Tambah</Link>
    </>
  )
}

Index.layout = (page) => <SuperAdminTemplate children={page} />
export default Index;
