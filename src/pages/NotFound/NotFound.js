import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen ">
        <img
          className="w-96 rounded-2xl shadow-xl"
          src="https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"
          alt=""
        />
        <Link to="/">
          {" "}
          <button className="btn btn-primary mt-10 text-white btn-sm px-5">
            Go To Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
