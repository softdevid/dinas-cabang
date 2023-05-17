import Footer from "@/Components/layout/HomeLayout/Footer";
import Navbar from "@/Components/layout/HomeLayout/Navbar";
import TopNavbar from "@/Components/layout/HomeLayout/TopNavbar";
import React, { useState } from "react";
import { AppContext } from "@/context/app-context";
import { Link, usePage } from "@inertiajs/react";
import axios from "axios";

const HomeLayout = ({ children }) => {
  const [dataSosmed, setDataSosmed] = useState({})
  axios.get('/api/data-sosmed').then((res) => setDataSosmed(res))
  // console.log(dataSosmed)

  const sosmed = [
    {
      nama: "instagram",
      link: "https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg",
    },
    {
      nama: "twitter",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
    },
    {
      nama: "youtube",
      link: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
    },
    {
      nama: "facebook",
      link: "https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg",
    },
  ];

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
              {sosmed.map((item, index) => (
                <div
                  key={index}
                  className="w-10 h-10 flex items-center justify-center rounded-full my-2"
                >
                  <img src={item.link} alt={item.nama} />
                </div>
              ))}
              {/* {dataSosmed.data.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="w-10 h-10 flex items-center justify-center rounded-full my-2"
                    >
                      <Link href={item.urlSosmed}>
                        <img src={item.urlImage} alt={item.namaMedsos} />
                      </Link>
                    </div>
                  </>
                )
              })} */}
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
