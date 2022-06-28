import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DashboardMiniHeader = () => {
  return (
    <div className="flex items-center shadow-md justify-evenly p-7 bg-gray-200 my-5 ">
      <p className="text-xl text-primary">
        Your total profit <span className="font-bold">0.00 BDT</span>
      </p>
      <button className="btn btn-primary text-white btn-sm rounded-full px-10">
        Learn to earn more{" "}
        <FontAwesomeIcon className="ml-2" icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default DashboardMiniHeader;
