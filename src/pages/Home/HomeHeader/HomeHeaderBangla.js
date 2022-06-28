import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../imgs/logo/logo.png";

const HomeHeaderBangla = () => {
  return (
    <div className="shadow-2xl bg-primary py-5">
      <Link to="/">
        <div className="flex justify-center">
          <img className="w-10 mr-3" src={logo} alt="" />
          <h1 className="text-3xl text-white uppercase font-bold">কামাও</h1>
        </div>
      </Link>
    </div>
  );
};

export default HomeHeaderBangla;
