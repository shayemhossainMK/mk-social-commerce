import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardBanner from "../DashboardBanner/DashboardBanner";
import DashboardSubBanner from "../DashboardSubBanner/DashboardSubBanner";
import DashboardHeader from "../DashHeader/DashboardHeader";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="flex items-center shadow-md justify-evenly p-7 bg-gray-200 my-5">
        <p className="text-xl text-primary">
          Your total profit <span className="font-bold">0.00 BDT</span>
        </p>
        <button className="btn btn-primary text-white btn-sm rounded-full px-10">
          Learn to earn more{" "}
          <FontAwesomeIcon
            className="ml-2"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </button>
      </div>
      <DashboardBanner></DashboardBanner>
      <DashboardSubBanner></DashboardSubBanner>
    </div>
  );
};

export default Dashboard;
