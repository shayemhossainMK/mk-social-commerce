import React from "react";
import EarnMoney from "../EarnMoney/EarnMoney";
import FourSteps from "../FourSteps/FourSteps";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeHeader from "../HomeHeader/HomeHeader";
import HowWorks from "../HowWorks/HowWorks";
import JoinNow from "../JoinNow/JoinNow";
import OurImpact from "../OurImpact/OurImpact";

const Home = () => {
  return (
    <div>
      <HomeHeader></HomeHeader>
      <HomeBanner></HomeBanner>
      <div className="px-5 md:px-28">
        <JoinNow></JoinNow>
        <EarnMoney></EarnMoney>
        <FourSteps></FourSteps>
        <HowWorks></HowWorks>
        <OurImpact></OurImpact>
      </div>
    </div>
  );
};

export default Home;
