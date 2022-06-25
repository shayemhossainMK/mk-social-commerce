import React from "react";

const Sidebar = () => {
  return (
    <div class="drawer-side h-[655px] md:p-5">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-80  rounded-3xl bg-gray-300 shadow-md text-primary">
        <li className="">
          <a>Performance Report</a>
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
          <a>Refer & Earn</a>
        </li>{" "}
        <hr />
        <li>
          <a>Account Setting</a>
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
