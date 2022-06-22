import React from "react";
import ads from "../../../imgs/ads.png";

const HowWorks = () => {
  return (
    <div className="pb-10">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-semibold mt-5 mb-16">
          See How KAMAO Works
        </h1>
      </div>

      <div>
        <div className="flex justify-center">
          <div>
            <h3 className="text-2xl mr-3 md:mr-20 font-semibold border-b-4 border-secondary">
              Bangla
            </h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">English</h3>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <img src={ads} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
