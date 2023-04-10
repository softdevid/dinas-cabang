import Navbar from "@/Components/layout/AdminSekolahLayout/Navbar";
import Sidebar from "@/Components/layout/AdminSekolahLayout/Sidebar";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { AdminSekolahContext } from "@/context/admin-sekolah-context";

const AdminSekolahLayout = ({ children }) => {
  const { props, url } = usePage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dtSekolah, setDtSekolah] = useState({});

  const adminSekolahContextValue = {
    props,
    url,
    mobileMenuOpen,
    setMobileMenuOpen,
    dtSekolah,
    setDtSekolah,
  };

  return (
    <>
      <AdminSekolahContext.Provider value={adminSekolahContextValue}>
        <Navbar />
        <Sidebar />
        <div className="p-4 md:ml-64">{children}</div>
      </AdminSekolahContext.Provider>
    </>
  );
};

export default AdminSekolahLayout;
