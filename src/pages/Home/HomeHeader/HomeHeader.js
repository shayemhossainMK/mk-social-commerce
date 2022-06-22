import React from "react";
import logo from "../../../imgs/logo/logo.png";

const HomeHeader = () => {
  return (
    <div className="shadow-2xl bg-primary py-5">
      <div className="flex justify-center">
        <img className="w-10 mr-3" src={logo} alt="" />
        <h1 className="text-3xl text-white uppercase font-bold">kamao</h1>
      </div>
    </div>
  );
};

export default HomeHeader;
