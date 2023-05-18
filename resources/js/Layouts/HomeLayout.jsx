import Footer from "@/Components/layout/HomeLayout/Footer";
import Navbar from "@/Components/layout/HomeLayout/Navbar";
import TopNavbar from "@/Components/layout/HomeLayout/TopNavbar";
import React, { useEffect, useState } from "react";
import { AppContext } from "@/context/app-context";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";

const HomeLayout = ({ children }) => {
  const [dataSosmed, setDataSosmed] = useState([]);

  useEffect(() => {
    axios.get("/api/data-sosmed").then((res) => setDataSosmed(res.data));
  }, []);

  const { props, url } = usePage();
  const appContextValue = {
    props,
    url,
  };

  return (
    <>
      <AppContext.Provider value={appContextValue}>
        <TopNavbar />
        <Navbar />
        <div>
          <div className="z-50 bg-white rounded-tr-xl rounded-br-xl h-auto w-16 fixed my-32 hidden md:block">
            <div className="mx-auto grid grid-cols-1 justify-items-center">
              {dataSosmed.map((item, index) => {
                return (
                  <Link key={index} href={item.urlSosmed} as="button">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full my-2">
                      <img src={item.urlImage} alt={item.namaMedsos} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </AppContext.Provider>
    </>
  );
};

export default HomeLayout;
