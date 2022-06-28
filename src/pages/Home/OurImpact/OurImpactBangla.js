import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import photo1 from "../../../imgs/our-impact/photo1.png";
import photo2 from "../../../imgs/our-impact/photo2.png";

const OurImpactBangla = () => {
  return (
    <div className="pb-10">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-semibold mt-5 mb-16">
          আমাদের অর্জন
        </h1>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10
        "
      >
        <div className="text-center">
          <img className="mx-auto" src={photo1} alt="" />
          <h1 className="font-bold my-3  text-xl">১০০ মিলিয়নেরও বেশি</h1>
          <p>মুনাফা দেয়া হয়েছে</p>
        </div>
        <div className="text-center">
          <img className="mx-auto" src={photo2} alt="" />
          <h1 className="font-bold my-3  text-xl">১ মিলিয়নেও বেশি</h1>
          <p>হ্যাপি ইউজার</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon
            icon={faRocket}
            className="text-5xl text-[#3935D7]"
          ></FontAwesomeIcon>
          <h1 className="font-bold my-3  text-xl">৫ মিলিয়নেরও বেশি</h1>
          <p>লেনদেন</p>
        </div>
      </div>
    </div>
  );
};

export default OurImpactBangla;
