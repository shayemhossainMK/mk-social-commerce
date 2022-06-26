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
          <Link to="/myearning">My Earnings</Link>
        </li>{" "}
        <hr />
        <li>
          <a>Payment</a>
        </li>{" "}
        <hr />
        <li>
          <Link to="/paymenthistory">Payment History</Link>
        </li>{" "}
        <hr />
        <li>
          <Link to="/getsupport">Support</Link>
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
          <Link to="/myactivity">My Activity</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
