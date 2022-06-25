import React from "react";
import darazLogo from "../../../imgs/Daraz-Logo.jpg";

export const TopRetailers = () => {
  return (
    <div className="py-10  px-4 md:px-20">
      <div className="text-center text-2xl text-primary font-bold">
        <h1>TOP RETAILERS</h1>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-4 gap-10 justify-center py-16 max-w-[1280px] mx-auto">
        <div className="shadow-xl p-10 bg-[#692382] hover:bg-primary duration-500 text-center rounded-3xl hover:scale-95">
          <p className="p-1 bg-gray-50 rounded-tl-3xl text-primary font-semibold rounded-br-3xl mb-5">
            up to 85% Off
          </p>
          <img className="rounded-3xl" src={darazLogo} alt="" />
          <p className="p-1 bg-gray-100 rounded-3xl my-5 text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Copy Link
          </p>
          <p className="p-1 bg-gray-100 rounded-3xl text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Share Link
          </p>
        </div>
        <div className="shadow-xl p-10 bg-[#692382] hover:bg-primary duration-500 text-center rounded-3xl hover:scale-95">
          <p className="p-1 bg-gray-50 rounded-tl-3xl text-primary font-semibold rounded-br-3xl mb-5">
            up to 85% Off
          </p>
          <img className="rounded-3xl" src={darazLogo} alt="" />
          <p className="p-1 bg-gray-100 rounded-3xl my-5  text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Copy Link
          </p>
          <p className="p-1 bg-gray-100 rounded-3xl text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Share Link
          </p>
        </div>
        <div className="shadow-xl p-10 bg-[#692382] hover:bg-primary duration-500 text-center rounded-3xl hover:scale-95">
          <p className="p-1 bg-gray-50 rounded-tl-3xl rounded-br-3xl mb-5 text-primary font-semibold">
            up to 85% Off
          </p>
          <img className="rounded-3xl" src={darazLogo} alt="" />
          <p className="p-1 bg-gray-100 rounded-3xl my-5 text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Copy Link
          </p>
          <p className="p-1 bg-gray-100 rounded-3xl text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Share Link
          </p>
        </div>
        <div className="shadow-xl p-10 bg-[#692382] hover:bg-primary duration-500 text-center rounded-3xl hover:scale-95 ">
          <p className="p-1 bg-gray-50 rounded-tl-3xl rounded-br-3xl mb-5 text-primary font-semibold">
            up to 85% Off
          </p>
          <img className="rounded-3xl" src={darazLogo} alt="" />
          <p className="p-1 bg-gray-100 rounded-3xl my-5  text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Copy Link
          </p>
          <p className="p-1 bg-gray-100 rounded-3xl text-primary font-semibold hover:cursor-pointer hover:bg-secondary duration-500 hover:text-white">
            Share Link
          </p>
        </div>
      </div>
    </div>
  );
};
