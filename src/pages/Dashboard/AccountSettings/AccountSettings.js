import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLinkTwo from "../../Shared/CustomLinkTwo/CustomLinkTwo";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const AccountSettings = () => {
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

            <div className="shadow-2xl rounded-3xl p-10">
              <nav className="text-center mb-10 flex justify-center">
                <CustomLinkTwo
                  className="mr-5 uppercase font-semibold text-primary"
                  to="personaldetails"
                >
                  Personal Details
                </CustomLinkTwo>
                <CustomLinkTwo
                  className=" ml-5 uppercase text-primary font-semibold col-span-1"
                  to="changepassword"
                >
                  Change Password
                </CustomLinkTwo>
              </nav>
              <Outlet></Outlet>
            </div>
          </div>

          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
