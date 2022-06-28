import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardBanner from "../DashboardBanner/DashboardBanner";
import DashboardMiniHeader from "../DashboardMiniHeader/DashboardMiniHeader";
import DashboardMiniHeaderBangla from "../DashboardMiniHeader/DashboardMiniHeaderBangla";
import DashboardSubBanner from "../DashboardSubBanner/DashboardSubBanner";
import DashboardHeader from "../DashHeader/DashboardHeader";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import { DashboardSubHeader } from "../DashSubHeader/DashboardSubHeader";
import ShoppingCard from "../ShoppingCard/ShoppingCard";
import ShoppingCardForMobile from "../shoppingCardForMobile/ShoppingCardForMobile";
import { TopRetailers } from "../TopRetailers/TopRetailers";

const Dashboard = () => {
  return (
    <div>
      {/* <DashboardHeader></DashboardHeader> */}
      <DashboardHeaderBangla></DashboardHeaderBangla>
      {/* <DashboardMiniHeader></DashboardMiniHeader> */}
      <DashboardMiniHeaderBangla></DashboardMiniHeaderBangla>
      <DashboardBanner></DashboardBanner>
      <DashboardSubBanner></DashboardSubBanner>
      <DashboardSubHeader></DashboardSubHeader>
      <TopRetailers></TopRetailers>
      <div className="hidden md:block">
        <ShoppingCard></ShoppingCard>
      </div>
      <div className="block md:hidden">
        <ShoppingCardForMobile></ShoppingCardForMobile>
      </div>
    </div>
  );
};

export default Dashboard;
