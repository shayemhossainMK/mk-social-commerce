import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import Sidebar from "../Sidebar/Sidebar";
import SidebarBangla from "../Sidebar/SidebarBangla";
import HomepageLink from "./HomepageLink/HomepageLInk";
import HomepageLInkTwo from "./HomepageLink/HomepageLinkTwo";

const MakeLinkBangla = () => {
  return (
    <div>
      <DashboardHeaderBangla></DashboardHeaderBangla>
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
                <h1 className="text-xl font-bold text-center">
                  মুহূর্তেই আপনার অফার লিংক তৈরি করুন
                </h1>
                <div className="text-secondary bg-secondary w-48 mt-2 mx-auto">
                  <hr className="w-20 text-secondary mx-auto" />
                  <hr className="w-20 bg-secondary mx-auto" />
                  <hr className="w-20 text-secondary bg-secondary mx-auto" />
                </div>
              </div>
              <div className="py-10 bg-gray-100 mt-10 md:px-40 rounded-xl">
                <p className="text-center">
                  সহজে প্রোফাইল লিংক পেতে নীচের বাক্সে আমাদের ব্রান্ড পার্টনারের
                  সাইটগুলি থেকে লিংক পেস্ট করুন৷
                </p>
                <div className=" mx-auto justify-center py-10  flex">
                  <div className="p-2 px-3.5 bg-primary rounded-full mr-[-2rem] z-20">
                    <FontAwesomeIcon
                      className="text-white"
                      icon={faLink}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="z-10 shadow-lg rounded-r-full ">
                    <input
                      type="text"
                      placeholder="এখানে হোমপেজ / প্রোফাইল লিংক পেস্ট  করুন"
                      class="input input-bordered w-full max-w-md pl-10 mr-28 focus:outline-none rounded-r-full"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn px-7 text-white btn-primary rounded-full btn-sm">
                    প্রোফাইল লিংক তৈরি করুন
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[900px] h-72">
              <div className="pb-10">
                <h1 className="text-xl font-bold text-center mt-10">
                  দ্রুত হোমেপেজর লিংক কোপি
                </h1>
                <div className="text-secondary bg-secondary w-48 mt-2 mx-auto">
                  <hr className="w-20 text-secondary mx-auto" />
                  <hr className="w-20 bg-secondary mx-auto" />
                  <hr className="w-20 text-secondary bg-secondary mx-auto" />
                </div>
              </div>

              <div className="hidden md:block">
                <HomepageLink></HomepageLink>
              </div>
              <div className="block md:hidden mx-10">
                <HomepageLInkTwo></HomepageLInkTwo>
              </div>
            </div>
          </div>

          {/* <Sidebar></Sidebar> */}
          <SidebarBangla></SidebarBangla>
        </div>
      </div>
    </div>
  );
};

export default MakeLinkBangla;
