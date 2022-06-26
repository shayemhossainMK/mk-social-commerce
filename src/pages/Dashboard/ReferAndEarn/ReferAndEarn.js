import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import imo from "../../../imgs/home-social/imo.png";
import messenger from "../../../imgs/home-social/messenger.png";
import wapp from "../../../imgs/home-social/wapp.png";
import telegram from "../../../imgs/home-social/telegram.png";

const ReferAndEarn = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
      <div>
        <div class="drawer drawer-mobile bg-base-100">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex flex-col items-center  md:mt-20">
            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <div>
              <div>
                <h1 className="text-2xl font-bold text-center text-primary pb-10">
                  Refer & Earn
                </h1>
              </div>

              <div className="p-10 shadow-xl rounded-2xl">
                <div className="flex  md:w-[500px] justify-between text-primary border-b-2 border-dashed border-gray-400 pb-3 ">
                  <div>
                    <p>Earnings from Referral</p>
                    <h4 className=" font-bold mt-2 text-xl">BDT 0.00</h4>
                  </div>
                  <div>
                    <p>Number of Refers</p>
                    <h4 className="font-bold mt-2 text-xl">0</h4>
                  </div>
                </div>
              </div>

              <div className="shadow-xl rounded-2xl bg-gray-200 my-10">
                <div className="py-10 text-center">
                  <h4 className="text-center font-semibold text-primary mb-4">
                    Help Friends Earn!
                  </h4>
                  <p className="text-center">
                    Invite Friends to KAMAO <br />
                    Share your invite code & get 10% of the profit your friends
                    make forever!
                  </p>
                  <div className="flex items-center justify-center mt-5 ">
                    <div className="flex items-center bg-primary rounded-full text-white p-2.5 mr-[-3rem] z-20">
                      <FontAwesomeIcon
                        className="mr-2"
                        icon={faLink}
                      ></FontAwesomeIcon>{" "}
                      <p>Your referral link</p>
                    </div>
                    <div className="z-10 ">
                      <input
                        type="text"
                        placeholder="Paste your link"
                        class="input input-bordered pl-16 w-full max-w-xs px-10  rounded-r-full focus:outline-none"
                      />
                    </div>
                  </div>
                  <p className="my-7">Share by social media</p>
                  <div className="flex justify-center mt-5">
                    <a href="">
                      <img
                        className="w-6 h-6 hover:scale-150 duration-500 hover:rotate-12"
                        src={imo}
                        alt=""
                      />
                    </a>
                    <a href="">
                      <img
                        className=" h-7 mx-5 hover:scale-150 duration-500 hover:rotate-12"
                        src={messenger}
                        alt=""
                      />
                    </a>
                    <a href="">
                      <img
                        className=" h-7 mr-5 hover:scale-150 duration-500 hover:rotate-12"
                        src={wapp}
                        alt=""
                      />
                    </a>
                    <a href="">
                      <img
                        className="h-7 hover:scale-150 duration-500 hover:rotate-12"
                        src={telegram}
                        alt=""
                      />
                    </a>
                  </div>
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

export default ReferAndEarn;
