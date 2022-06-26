import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const PaymentHistory = () => {
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
                <h3 className="text-2xl text-primary font-bold text-center uppercase">
                  Payment History
                </h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div>
                <div className="flex items-center md:w-[700px] mb-10">
                  <div className="mx-5">
                    <input
                      type="text"
                      placeholder="Search by Invoice"
                      class="input input-bordered input-sm w-full max-w-xs"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold ">Date</p>
                    <input
                      type="date"
                      placeholder="Type here"
                      class="input input-sm focus:outline-none w-full max-w-xs"
                    />
                    <p>-</p>
                    <input
                      type="date"
                      placeholder="Type here"
                      class="input input-sm w-full focus:outline-none max-w-xs"
                    />
                  </div>
                  <p className="rounded-full btn  btn-primary btn-xs px-2  text-white">
                    Download Report
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div>
                  <div className="pb-10">
                    <div className="mt-5 shadow-xl pb-10 rounded-xl px-1">
                      <div class="overflow-x-auto ">
                        <table class="table w-full ">
                          <thead>
                            <tr>
                              <th>Invice Id</th>
                              <th>Billing Period</th>
                              <th>Net Orders</th>
                              <th>Comission Earned</th>
                              <th>Bonus Earned</th>
                              <th>Total Earning</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>20220529_1212</td>
                              <td>May 2022</td>
                              <td>100</td>
                              <td>120</td>
                              <td>0</td>
                              <td>100</td>
                              <td>
                                <p className="btn btn-primary btn-xs text-white rounded-full px-3">
                                  Download
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>20220529_1212</td>
                              <td>May 2022</td>
                              <td>100</td>
                              <td>120</td>
                              <td>0</td>
                              <td>100</td>
                              <td>
                                <p className="btn btn-primary btn-xs text-white rounded-full px-3">
                                  Download
                                </p>
                              </td>
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

          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
