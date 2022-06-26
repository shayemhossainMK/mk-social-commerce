import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const GetSupport = () => {
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

            <div className="pb-20">
              <div className="mb-10">
                <h3 className="text-2xl text-primary font-bold text-center uppercase">
                  Get Support
                </h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div className="mt-5 shadow-xl rounded-xl px-1">
                <div class="overflow-x-auto">
                  <table class="table w-full ">
                    <thead>
                      <tr>
                        <th>Ticket no</th>
                        <th>Date of Order</th>
                        <th>Issue</th>
                        <th>Product name/SKU</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001212</td>
                        <td>24/04/2022</td>
                        <td>Payment</td>
                        <td>Apple Juice</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-end py-5 px-5">
                  <button className="btn btn-primary rounded-full text-white btn-sm hover:scale-105 hover:rotate-2 duration-300 hover:bg-secondary shadow-md">
                    View more
                  </button>
                </div>
              </div>
              <div className="py-16 text-center md:w-[700px] shadow-xl rounded-2xl mt-10 p-5 bg-gray-200">
                <h4 className="text-primary font-semibold text-xl text-center mb-5">
                  Need Help?
                </h4>
                <p className="mb-5">
                  If you got an order via KAMAO, and did not get Profit, don't
                  worry! Just raise a Missing Profit Ticket and our team will
                  escalate it to their retailer.
                </p>
                <p>
                  Please note that the retailers accept Missing Profit claims
                  only within 10 days from the date of transaction.
                </p>
              </div>
              <div className="text-center mt-10">
                <button className="btn btn-primary rounded-full px-5 text-white btn-sm  hover:scale-105 hover:rotate-2 hover:bg-secondary duration-500">
                  Add Ticket
                </button>
              </div>
            </div>
          </div>

          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
