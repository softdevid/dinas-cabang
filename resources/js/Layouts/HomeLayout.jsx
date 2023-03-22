import Footer from "@/Components/layout/HomeLayout/Footer";
import Navbar from "@/Components/layout/HomeLayout/Navbar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <div className="z-50 bg-white border-2 rounded-tr-xl rounded-br-xl h-auto w-20 fixed my-48 hidden md:block">
          <div className="mx-auto grid grid-cols-1 gap-[10px] ml-3 my-2">
            <div className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M17 0H7C3.7 0 1 2.7 1 6v12c0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6zm4 18.1c0 1.9-1.5 3.4-3.4 3.4H6.4C4.5 21.5 3 20 3 18.1V6c0-1.9 1.5-3.4 3.4-3.4h10.1c1.9 0 3.4 1.5 3.4 3.4v12.1z" />
                <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              </svg>
            </div>
            <div className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                className="m-3 rounded-md"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 5.53c-.8.36-1.65.6-2.53.7.91-.54 1.6-1.4 1.93-2.42-.85.5-1.8.87-2.8 1.07-.8-.85-1.95-1.38-3.23-1.38-2.44 0-4.42 1.98-4.42 4.42 0 .35.04.7.09 1.04-3.67-.18-6.92-1.94-9.1-4.6-.38.64-.6 1.39-.6 2.2 0 1.52.77 2.85 1.94 3.63-.72 0-1.4-.22-1.98-.53v.06c0 2.12 1.51 3.88 3.5 4.28-.36.09-.74.14-1.13.14-.27 0-.53-.03-.78-.08.54 1.68 2.09 2.9 3.93 2.93-1.44 1.12-3.25 1.78-5.22 1.78-.34 0-.67-.02-1-.08 1.86 1.2 4.07 1.9 6.44 1.9 7.73 0 11.96-6.41 11.96-11.96 0-.18-.01-.36-.02-.53.82-.58 1.53-1.3 2.1-2.13z" />
              </svg>
            </div>
            <div className="bg-red-500 w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                className="m-3 rounded-md"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M21.06 7.45c-.22-.82-.87-1.47-1.69-1.69C17.64 5 12 5 12 5s-5.64 0-7.37.76c-.82.22-1.47.87-1.69 1.69C3 9.18 3 12 3 12s0 2.82.94 4.55c.22.82.87 1.47 1.69 1.69 1.73.76 7.37.76 7.37.76s5.64 0 7.37-.76c.82-.22 1.47-.87 1.69-1.69.76-1.73.76-4.55.76-4.55s0-2.82-.94-4.55zM9.75 15.29V8.71l6.92 3.79-6.92 2.79z" />
              </svg>
            </div>
            <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  className="text-white"
                  d="M17.6 7.4h-2.4c-.3 0-.4.1-.4.4v2.4h2.8l-.3 2.8h-2.5v7.1h-3.1v-7.1h-2.5v-2.8h2.5v-1.7c0-2 .8-3.1 3.2-3.1h2.2v2.8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="container py-5">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
