import Footer from "@/Components/layout/HomeLayout/Footer";
import Navbar from "@/Components/layout/HomeLayout/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  const sosmed = [
    {
      nama: "instagram",
      link: "https://upload.wikimedia.org/wikipedia/commons/9/96/Instagram.svg",
    },
    {
      nama: "twitter",
      link: "https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_of_Twitter%2C_Inc..svg",
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

  return (
    <>
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
          </div>
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
