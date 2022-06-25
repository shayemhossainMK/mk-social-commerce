import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Chart from "./Chart/Chart";

const PerformanceReport = () => {
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

            <div>
              <div className="flex">
                <h3 className="text-2xl font-semibold uppercase">Date</h3>
                <input
                  className="mx-10 border-l-4 border-red-300 bg-gray-100"
                  type="date"
                />
                <input
                  className="border-l-4 border-green-300 bg-gray-100"
                  type="date"
                />
              </div>
            </div>
            <div className="my-10">
              <div className="flex justify-evenly w-[700px] bg-gray-100 p-2 rounded-md shadow-md">
                <p>
                  <FontAwesomeIcon
                    className="mr-5"
                    icon={faArrowDownUpAcrossLine}
                  ></FontAwesomeIcon>{" "}
                  Sort by
                </p>
                <p>Comapny</p>
                <p>Order</p>
                <p>Click</p>
                <p>Estimated Earning</p>
              </div>
            </div>
            <div className="shadow-md rounded-3xl bg-gray-200 p-5">
              <Chart></Chart>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default PerformanceReport;
