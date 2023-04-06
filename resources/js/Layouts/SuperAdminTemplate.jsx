import Navbar from "@/Components/layout/SuperAdminLayout/Navbar";
import Sidebar from "@/Components/layout/SuperAdminLayout/Sidebar";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { SuperAdminContext } from "@/context/super-admin-context";

const SuperAdminTemplate = ({ children }) => {
  const { props, url } = usePage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const superAdminContextValue = {
    props,
    url,
    mobileMenuOpen,
    setMobileMenuOpen,
  };

  return (
    <>
      <SuperAdminContext.Provider value={superAdminContextValue}>
        <Navbar />
        <Sidebar />
        <div className="p-4 md:ml-64 md:mt-14 mt-12">{children}</div>
      </SuperAdminContext.Provider>
    </>
  );
};

export default SuperAdminTemplate;
