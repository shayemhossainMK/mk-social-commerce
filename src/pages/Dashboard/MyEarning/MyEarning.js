import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import photo1 from "../../../imgs/earning-icon/photo1.png";
import photo2 from "../../../imgs/earning-icon/photo2.png";
import photo3 from "../../../imgs/earning-icon/photo3.png";
import photo4 from "../../../imgs/earning-icon/photo4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDollar } from "@fortawesome/free-solid-svg-icons";
const MyEarning = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div>
        <div class="drawer drawer-mobile bg-base-100 pb-10">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center  md:mt-20">
            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <div className="md:w-[700px]">
              <div className="mb-10">
                <h3 className="text-2xl text-primary font-bold text-center uppercase">
                  My Earning
                </h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div className="shadow-xl rounded-2xl bg-gray-100 ">
                <div className="border-b-2 border-dashed py-3 px-10 ">
                  <h4 className="text-xl text-primary">Estimated Earnings*</h4>
                  <h1 className="text-primary text-2xl font-semibold mt-2">
                    BDT 0.00
                  </h1>
                </div>
                <p className="mt-2 px-10 pb-3">
                  Profit will appear here within certain period
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:py-20">
                <div className="rounded-xl shadow-xl text-center bg-primary text-white">
                  <img
                    className="mx-auto p-2 bg-white rounded-full w-10 mt-3"
                    src={photo1}
                    alt=""
                  />
                  <h2 className="border-b-2 border-dashed py-4 font-semibold">
                    Oder Details
                  </h2>
                  <p className="py-2">
                    View more{" "}
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </p>
                </div>
                <div className="rounded-xl shadow-xl text-center bg-primary text-white py-2">
                  <img
                    className="mx-auto p-2 bg-white rounded-full w-10 mt-1"
                    src={photo2}
                    alt=""
                  />
                  <h2 className="border-b-2 border-dashed py-4 font-semibold">
                    My Activity
                  </h2>
                  <p className="py-2">
                    View more{" "}
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </p>
                </div>
                <div className="rounded-xl shadow-xl text-center bg-primary text-white">
                  <FontAwesomeIcon
                    className="py-2 px-3 text-xl bg-base-100 rounded-full text-primary mt-3"
                    icon={faDollar}
                  ></FontAwesomeIcon>
                  <h2 className="border-b-2 border-dashed py-4 font-semibold">
                    Request Pay
                  </h2>
                  <p className="py-2">
                    View more{" "}
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </p>
                </div>

                <div className="rounded-xl shadow-xl text-center bg-primary text-white py-2">
                  <img
                    className="mx-auto p-2 bg-white rounded-full w-10 mt-1"
                    src={photo4}
                    alt=""
                  />
                  <h2 className="border-b-2 border-dashed py-4 font-semibold">
                    Get Help
                  </h2>
                  <p className="py-2">
                    View more{" "}
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default MyEarning;
