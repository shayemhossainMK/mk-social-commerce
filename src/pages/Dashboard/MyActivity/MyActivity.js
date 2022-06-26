import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const MyActivity = () => {
  return (
    <div>
      <DashboardHeader></DashboardHeader>
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

            <div>
              <div className="mb-10">
                <h3 className="text-2xl text-primary font-bold text-center">
                  My Activity
                </h3>
              </div>
              <div className="text-center">
                <h6 className="font-semibold">
                  Review your Shares, Clicks and Transactions below
                </h6>
                <p>
                  Number of transactions will reflect only when the Profit gets
                  tracked (within 72 hours)
                </p>
                <div>
                  <div className="flex justify-evenly mx-auto w-[700px] bg-gray-100 p-2 my-10 rounded-md shadow-md">
                    <p>
                      <FontAwesomeIcon
                        className="mr-5"
                        icon={faArrowDownUpAcrossLine}
                      ></FontAwesomeIcon>{" "}
                      Sort by
                    </p>
                    <p className="border-l-2 border-gray-600 pl-2">Date</p>
                    <p>Clicks</p>
                    <p>Height Earnings</p>
                    <p>Transactions</p>
                  </div>

                  <div className="py-10">
                    <div>
                      <h3 className="text-center text-xl font-semibold">
                        Share Link Details
                      </h3>
                      <div>
                        <div className="text-end ">
                          <input
                            className="bg-primary text-white px-5 rounded-2xl p-1"
                            type="date"
                          />
                        </div>
                        <div className="mt-5 shadow-xl pb-10 rounded-xl">
                          <div class="overflow-x-auto ">
                            <table class="table w-full">
                              <thead>
                                <tr>
                                  <th>Shared ID</th>
                                  <th>Shared Date & Time</th>
                                  <th>Retailer Name</th>
                                  <th>No of Clicks</th>
                                  <th>No of Orders</th>
                                  <th>Total Earnings</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>KAMAO2022047556</td>
                                  <td>24 April 2022, 2:00 PM</td>
                                  <td>Daraz</td>
                                  <td>100</td>
                                  <td>02</td>
                                  <td>28.00 BDT</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default MyActivity;
