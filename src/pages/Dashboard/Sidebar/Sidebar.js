import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="drawer-side h-[655px] md:p-5">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80  rounded-3xl bg-gray-300 shadow-md text-primary">
        <li className="">
          <Link to="/performancereport">Performance Report</Link>
        </li>
        <hr />
        <li>
          <a>My Earnings</a>
        </li>{" "}
        <hr />
        <li>
          <a>Payment</a>
        </li>{" "}
        <hr />
        <li>
          <a>Payment History</a>
        </li>{" "}
        <hr />
        <li>
          <a>Support</a>
        </li>{" "}
        <hr />
        <li>
          <Link to="/referandearn">Refer & Earn</Link>
        </li>{" "}
        <hr />
        <li>
          <Link to="/accountsettings">Account Setting</Link>
        </li>{" "}
        <hr />
        <li>
          <a>My Activity</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
