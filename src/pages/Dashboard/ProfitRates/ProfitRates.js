import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLinkTwo from "../../Shared/CustomLinkTwo/CustomLinkTwo";
import DashboardHeader from "../DashHeader/DashboardHeader";

const ProfitRates = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div className="bg-gray-100">
        <nav className="menu-container text-center py-5 shadow-lg mb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 menu-list ">
            <CustomLinkTwo
              className=" px-20 uppercase rounded-xl py-1"
              to="popular"
            >
              Popular
            </CustomLinkTwo>
            <CustomLinkTwo
              className="px-20 uppercase rounded-xl py-1"
              to="atoz"
            >
              A-Z
            </CustomLinkTwo>
            <CustomLinkTwo
              className="px-20 uppercase rounded-xl py-1"
              to="profit"
            >
              % Profit
            </CustomLinkTwo>
            <CustomLinkTwo
              className="px-20 uppercase rounded-xl py-1 "
              to="flatprofit"
            >
              Flat profit
            </CustomLinkTwo>
          </div>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ProfitRates;
