import React from "react";
import Footer from "../../Shared/Footer/Footer";
import FooterBangla from "../../Shared/Footer/FooterBangla";
import EarnMoney from "../EarnMoney/EarnMoney";
import EarnMoneyBangla from "../EarnMoney/EarnMoneyBangla";
import FourSteps from "../FourSteps/FourSteps";
import FourStepsBangla from "../FourSteps/FourStepsBangla";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeHeaderBangla from "../HomeHeader/HomeHeaderBangla";
import HowWorks from "../HowWorks/HowWorks";
import HowWorksBangla from "../HowWorks/HowWorksBangla";
import JoinNow from "../JoinNow/JoinNow";
import JoinNowBangla from "../JoinNow/JoinNowBangla";
import OurImpact from "../OurImpact/OurImpact";
import OurImpactBangla from "../OurImpact/OurImpactBangla";
import OurSuperstart from "../OurSuperstart/OurSuperstart";
import OurSuperstartBangla from "../OurSuperstart/OurSuperstartBangla";
import WhyKamao from "../WhyKamao/WhyKamao";
import WhykamaoBangla from "../WhyKamao/WhykamaoBangla";

const Home = () => {
  return (
    <div>
      {/* <HomeHeader></HomeHeader> */}
      <HomeHeaderBangla></HomeHeaderBangla>
      <HomeBanner></HomeBanner>
      <div className="px-5 md:px-28">
        {/* <JoinNow></JoinNow> */}
        <JoinNowBangla></JoinNowBangla>
        {/* <EarnMoney></EarnMoney> */}
        <EarnMoneyBangla></EarnMoneyBangla>
        {/* <FourSteps></FourSteps> */}
        <FourStepsBangla></FourStepsBangla>
        {/* <HowWorks></HowWorks> */}
        <HowWorksBangla></HowWorksBangla>
        {/* <OurImpact></OurImpact> */}
        <OurImpactBangla></OurImpactBangla>
        {/* <OurSuperstart></OurSuperstart> */}
        <OurSuperstartBangla></OurSuperstartBangla>
        {/* <WhyKamao></WhyKamao> */}
        <WhykamaoBangla></WhykamaoBangla>
      </div>
      {/* <Footer></Footer> */}
      <FooterBangla></FooterBangla>
    </div>
  );
};

export default Home;
