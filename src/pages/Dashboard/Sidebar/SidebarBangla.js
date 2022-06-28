import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../../../imgs/sidebar-icon/photo1.svg";
import photo2 from "../../../imgs/sidebar-icon/photo2.svg";
import photo3 from "../../../imgs/sidebar-icon/photo3.svg";
import photo4 from "../../../imgs/sidebar-icon/photo4.svg";
import photo5 from "../../../imgs/sidebar-icon/photo5.png";
import photo6 from "../../../imgs/sidebar-icon/photo6.png";
import photo7 from "../../../imgs/sidebar-icon/photo7.svg";
import photo8 from "../../../imgs/sidebar-icon/photo8.svg";

const SidebarBangla = () => {
  return (
    <div class="drawer-side h-[655px] md:p-5">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-60 md:w-80  rounded-3xl bg-gray-300 shadow-md text-primary">
        <li className="">
          <Link to="/performancereportbangla">
            <img className="w-6" src={photo1} alt="" /> পারফরমেন্স রিপোর্ট
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/myearningbangla">
            <img className="w-5" src={photo2} alt="" /> আমার আয়
          </Link>
        </li>{" "}
        <hr />
        <li>
          <a>
            <img className="w-5" src={photo3} alt="" /> পেমেন্ট
          </a>
        </li>{" "}
        <hr />
        <li>
          <Link to="/paymenthistorybangla">
            {" "}
            <img className="w-5" src={photo4} alt="" /> পেমেন্ট হিস্টরি
          </Link>
        </li>{" "}
        <hr />
        <li>
          <Link to="/getsupportbangla">
            <img className="w-5" src={photo5} alt="" /> সাপোর্ট
          </Link>
        </li>{" "}
        <hr />
        <li>
          <Link to="/referandearnbangla">
            <img className="w-5" src={photo6} alt="" /> রেফার & আয়
          </Link>
        </li>{" "}
        <hr />
        <li>
          <Link to="/accountsettingsbangla">
            <img className="w-5" src={photo7} alt="" />
            অ্যাকাউন্ট সেটিংস
          </Link>
        </li>{" "}
        <hr />
        <li>
          <Link to="/myactivitybangla">
            <img className="w-5" src={photo8} alt="" />
            আমার এক্টিভিটি
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarBangla;
