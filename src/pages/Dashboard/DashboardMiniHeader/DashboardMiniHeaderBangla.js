import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DashboardMiniHeaderBangla = () => {
  return (
    <div className="flex items-center shadow-md justify-evenly p-7 bg-gray-200 my-5 ">
      <p className="text-xl text-primary">
        আপনার মোট আয়
        <span className="font-bold md:pl-5">0.00 BDT</span>
      </p>
      <button className="btn btn-primary text-white btn-sm rounded-full px-10">
        বেশি আয়ের উপায় শিখুন{" "}
        <FontAwesomeIcon className="ml-2" icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default DashboardMiniHeaderBangla;
