import React from "react";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import SidebarBangla from "../Sidebar/SidebarBangla";

const PersonalInfoBangla = () => {
  return (
    <div>
      <DashboardHeaderBangla></DashboardHeaderBangla>
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
          </div>

          <SidebarBangla></SidebarBangla>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoBangla;
