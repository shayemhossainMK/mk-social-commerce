import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLinkTwo from "../../Shared/CustomLinkTwo/CustomLinkTwo";
import DashboardHeader from "../DashHeader/DashboardHeader";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import Sidebar from "../Sidebar/Sidebar";
import SidebarBangla from "../Sidebar/SidebarBangla";

const AccountSettingsBangla = () => {
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

            <div className="shadow-2xl rounded-3xl p-10">
              <nav className="text-center mb-10 flex justify-center">
                <CustomLinkTwo
                  className="mr-5 uppercase font-semibold text-primary"
                  to="personaldetailsbangla"
                >
                  ব্যক্তিগত বিবরণ
                </CustomLinkTwo>
                <CustomLinkTwo
                  className=" ml-5 uppercase text-primary font-semibold col-span-1"
                  to="changepasswordbangla"
                >
                  পাসওয়ার্ড পরিবর্তন
                </CustomLinkTwo>
              </nav>
              <Outlet></Outlet>
            </div>
          </div>

          {/* <Sidebar></Sidebar> */}
          <SidebarBangla></SidebarBangla>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsBangla;
