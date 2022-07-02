import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../../imgs/logo/logo.png";
import photo1 from "../../../imgs/dashboard-header-icon/photo1.png";
import photo2 from "../../../imgs/dashboard-header-icon/photo2.png";
import photo3 from "../../../imgs/dashboard-header-icon/photo3.png";
import {
  faShirt,
  faStopwatch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import menu1 from "../../../imgs/dashboard-header-icon/menu1.png";
import menu4 from "../../../imgs/dashboard-header-icon/menu4.png";
import menu6 from "../../../imgs/dashboard-header-icon/menu6.png";
import menu7 from "../../../imgs/dashboard-header-icon/menu7.png";
import menu8 from "../../../imgs/dashboard-header-icon/menu8.png";
import menu9 from "../../../imgs/dashboard-header-icon/menu9.png";
import menu10 from "../../../imgs/dashboard-header-icon/menu10.png";
import menu11 from "../../../imgs/dashboard-header-icon/menu11.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const DashboardHeaderBangla = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  // console.log(user);
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <div>
      <div class="navbar px-5 md:px-20 py-5 bg-primary text-white">
        <div class="flex  w-full justify-between max-w-[1280px] mx-auto">
          <div className="flex items-center">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="35"
                  height="35"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path
                    d="m2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                    fill="white"
                  ></path>
                </svg>
              </label>

              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-72 text-gray-800 md:ml-[-4rem]"
              >
                <li>
                  <div>
                    <img className="w-5" src={menu1} alt="" />
                    <a>Today’s exclusive Offers</a>
                  </div>
                </li>
                <li className="">
                  <div className="flex">
                    <div>
                      <img className="w-5" src={menu1} alt="" />
                    </div>
                    <div className="">
                      <a>Retailer Category</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <FontAwesomeIcon
                      className="text-2xl"
                      icon={faStopwatch}
                    ></FontAwesomeIcon>
                    <a href="">Electronics</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-6" src={menu4} alt="" />
                    </div>
                    <a href="">Men Fashion</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <FontAwesomeIcon
                        className="text-xl"
                        icon={faShirt}
                      ></FontAwesomeIcon>
                    </div>
                    <a href="">Women Fashion</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-5" src={menu6} alt="" />
                    </div>
                    <a href="">Men Footwear</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-5" src={menu7} alt="" />
                    </div>
                    <a href="">Women Footwear</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-5" src={menu8} alt="" />
                    </div>
                    <a href="">Beauty Products</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-5" src={menu9} alt="" />
                    </div>
                    <a href="">Health & Personal Care</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-5" src={menu10} alt="" />
                    </div>
                    <a href="">Baby Products</a>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <div>
                      <img className="w-4 h-6" src={menu11} alt="" />
                    </div>
                    <a href="">Home & Kitchen</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="md:ml-5">
              <Link to="/dashboard">
                <div className="flex justify-center">
                  <img className="w-7 mr-3" src={logo} alt="" />
                  <h1 className="text-xl text-white uppercase font-bold">
                    kamao
                  </h1>
                </div>
              </Link>
            </div>
          </div>

          <div className=" flex gap-10 items-center justify-center">
            <div class="flex items-center">
              <input
                type="text"
                placeholder="Search Product or Retailer"
                class="input bg-gray-100 text-black md:w-60 input-sm max-w-2xl px-2 text-xs rounded-full"
              ></input>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  className="p-1 w-6 bg-gray-100 rounded-full"
                  src={photo3}
                  alt=""
                />
              </div>
              <Link to="/performancereportbangla">
                <h3 className="ml-2">পারফরমেন্স রিপোর্ট</h3>
              </Link>
            </div>
            <Link to="/profitratesbangla">
              <div className="flex items-center">
                <div>
                  <img
                    className="p-1 bg-gray-100 rounded-full"
                    src={photo1}
                    alt=""
                  />
                </div>

                <h3 className="ml-2">প্রোফাইল রেট</h3>
              </div>
            </Link>
            <div className="flex items-center">
              <div>
                <img
                  className="p-1 bg-gray-100 rounded-full"
                  src={photo2}
                  alt=""
                />
              </div>
              <Link to="/makelinkbangla">
                <h3 className="ml-2">মেইক লিংক</h3>
              </Link>
            </div>
            <div className="flex items-center">
              <div class="dropdown dropdown-end">
                <label tabindex="0" class="flex">
                  <p>
                    <FontAwesomeIcon
                      className="text-primary p-1 bg-gray-100 rounded-full"
                      icon={faUser}
                    ></FontAwesomeIcon>
                  </p>
                  <p className="ml-2">{user ? user.displayName : "প্রোফাইল"}</p>
                </label>
                <ul
                  tabindex="0"
                  class="mr-[-5rem] dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48 text-gray-900"
                >
                  <li>
                    <a>KAMAO ব্লগ</a>
                  </li>
                  <li>
                    <Link to="/accountsettingsbangla">প্রোফাইল সেটিংস</Link>
                  </li>
                  <li>
                    <a>পেমেন্ট</a>
                  </li>
                  <li>
                    <Link to="/referandearnbangla">সুপারিশ</Link>
                  </li>
                  <li>
                    <Link to="/getsupportbangla">সাপোর্ট</Link>
                  </li>
                  <li>
                    <Link to="/myactivitybangla">আমার এক্টিভিটি</Link>
                  </li>
                  <li>
                    <p onClick={logout}>লগ আউট</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeaderBangla;
