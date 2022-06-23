import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../imgs/logo/logo.png";
import photo1 from "../../../imgs/dashboard-header-icon/photo1.png";
import photo2 from "../../../imgs/dashboard-header-icon/photo2.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
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
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-800"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
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
          <div class="flex ml-10 items-center">
            <input
              type="text"
              placeholder="Search Product or Retailer"
              class="input bg-gray-100 input-sm w-full max-w-2xl px-2 text-xs rounded-full"
            ></input>

            <input
              type="text"
              placeholder="Performance Report"
              class="input input-sm bg-gray-100 w-full max-w-xs mx-5 rounded-full text-xs px-2"
            />
          </div>
          <div className=" grid grid-cols-3 gap-5">
            <div className="flex items-center">
              <div>
                <img
                  className="p-1 bg-gray-100 rounded-full"
                  src={photo1}
                  alt=""
                />
              </div>
              <h3 className="ml-2">Profit Rates</h3>
            </div>
            <div className="flex items-center">
              <div>
                <img
                  className="p-1 bg-gray-100 rounded-full"
                  src={photo2}
                  alt=""
                />
              </div>
              <h3 className="ml-2">Make links</h3>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <FontAwesomeIcon
                  className="text-primary p-1 bg-gray-100 rounded-full"
                  icon={faUser}
                ></FontAwesomeIcon>
              </div>
              <h3 className="ml-2">My Profile</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
