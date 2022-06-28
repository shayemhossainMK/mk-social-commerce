import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLinkTwo from "../../Shared/CustomLinkTwo/CustomLinkTwo";
import DashboardHeader from "../DashHeader/DashboardHeader";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";

const ProfitRatesBangla = () => {
  return (
    <div>
      <DashboardHeaderBangla></DashboardHeaderBangla>
      <div className="bg-gray-100">
        <nav className="menu-container text-center py-5 shadow-lg mb-10 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 menu-list ">
            <CustomLinkTwo
              className=" px-20 uppercase rounded-xl py-1"
              to="popularbangla"
            >
              জনপ্রিয় ব্রান্ড
            </CustomLinkTwo>
            <CustomLinkTwo
              className="px-20 uppercase rounded-xl py-1"
              to="atozbangla"
            >
              A-Z
            </CustomLinkTwo>
            <CustomLinkTwo
              className="px-20 uppercase rounded-xl py-1"
              to="profitbangla"
            >
              % লভ্যাংশ
            </CustomLinkTwo>
            <CustomLinkTwo
              className="px-20 uppercase rounded-xl py-1 "
              to="flatprofitbangla"
            >
              ফ্লাট কমিশন
            </CustomLinkTwo>
          </div>
        </nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ProfitRatesBangla;
