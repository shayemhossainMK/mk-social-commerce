import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import step1 from "../../../imgs/fourstep/step1.png";
import step3 from "../../../imgs/fourstep/step3.png";
import step4 from "../../../imgs/fourstep/step4.png";

const FourSteps = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-semibold mt-5 mb-8">
          Start Earning In Just 4 Steps
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 my-20">
        <div className="text-center">
          <img
            className="p-3 mb-6 mx-auto bg-[#FFA500] rounded-full"
            src={step1}
            alt=""
          />
          <h1 className="font-bold text-xl my-2">Find Deals</h1>
          <p className="mx-10">Find Deals from 100+ retailers</p>
        </div>
        <div className="text-center">
          <img
            className="p-3 mb-6 mx-auto bg-[#FFA500] rounded-full"
            src={step1}
            alt=""
          />
          <h1 className="font-bold text-xl my-2">Convert in Profit Link</h1>
          <p className="mx-10">
            Convert normal retailer links into KAMAO profit links using our
            'Make Links' tool
          </p>
        </div>
        <div className="text-center">
          <div>
            <img
              className="p-3 mb-6 mx-auto bg-[#FFA500]  rounded-full"
              src={step1}
              alt=""
            />
          </div>
          <h1 className="font-bold text-xl my-2">Share</h1>
          <p className="mx-10">
            Share deals on <br /> WhatsApp, Facebook, <br /> Telegram etc
          </p>
        </div>
        <div className="text-center">
          <img
            className="p-3 mb-6 mx-auto bg-[#FFA500] rounded-full"
            src={step1}
            alt=""
          />
          <h1 className="font-bold text-xl my-2">Earn Profit</h1>
          <p className="mx-10">
            Earn Profit on every sale. Withdraw to your Bank Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourSteps;
