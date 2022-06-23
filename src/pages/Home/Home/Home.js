import React from "react";
import Footer from "../../Shared/Footer/Footer";
import EarnMoney from "../EarnMoney/EarnMoney";
import FourSteps from "../FourSteps/FourSteps";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeHeader from "../HomeHeader/HomeHeader";
import HowWorks from "../HowWorks/HowWorks";
import JoinNow from "../JoinNow/JoinNow";
import OurImpact from "../OurImpact/OurImpact";
import OurSuperstart from "../OurSuperstart/OurSuperstart";
import WhyKamao from "../WhyKamao/WhyKamao";

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
        <OurSuperstart></OurSuperstart>
        <WhyKamao></WhyKamao>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
