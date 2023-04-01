import { useState } from "react";
import { HiBars4 } from "react-icons/hi";

const SuperAdminTemplate = (props) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <section className="flex gap-6">
        <div className="bg-[#0e0e0e] min-h-screen w-72">
          <div className="py-3 flex justify-end">
            <HiBars4 size={26} className="cursor-pointer" />
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold">
          REACT TAILWIND
        </div>
      </section>
    </>
  );
};

export default SuperAdminTemplate;
