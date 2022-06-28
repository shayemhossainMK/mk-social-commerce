import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardHeader from "../DashHeader/DashboardHeader";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import Sidebar from "../Sidebar/Sidebar";
import SidebarBangla from "../Sidebar/SidebarBangla";

const MyActivityBangla = () => {
  return (
    <div>
      <DashboardHeaderBangla></DashboardHeaderBangla>
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
                  আমার এক্টিভিটি
                </h3>
                <hr className="w-28 mx-auto mt-2" />
              </div>
              <div className="text-center">
                <h6 className="font-semibold">
                  নীচে আপনার শেয়ার, ক্লিক এবং লেনদেন দেখুন
                </h6>
                <p>
                  মুনাফা ট্র্যাক করা হলেই লেনদেনের সংখ্যা দেখা যাবে (৭২ ঘণ্টার
                  মধ্যে)
                </p>
                <div>
                  <div className="flex justify-evenly mx-auto w-[700px] bg-gray-100 p-2 my-10 rounded-md shadow-md">
                    <p>
                      <FontAwesomeIcon
                        className="mr-5"
                        icon={faArrowDownUpAcrossLine}
                      ></FontAwesomeIcon>{" "}
                      সর্ট করুন
                    </p>
                    <p className="border-l-2 border-gray-600 pl-2">তারিখ</p>
                    <p>ক্লিক</p>
                    <p>সর্বোচ্চ আয়</p>
                    <p>লেনদেন</p>
                  </div>

                  <div className="py-10">
                    <div>
                      <h3 className="text-center text-xl font-semibold">
                        শেয়ার লিংকের বিস্তারিত
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
                                  <th>শেয়ার আইডি</th>
                                  <th>শেয়ার তারিখ ও সময়</th>
                                  <th>খুচরা বিক্রেতার নাম</th>
                                  <th>ক্লিক নং</th>
                                  <th>অর্ডার সংখ্যা</th>
                                  <th>মোট আয়</th>
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

          {/* <Sidebar></Sidebar> */}
          <SidebarBangla></SidebarBangla>
        </div>
      </div>
    </div>
  );
};

export default MyActivityBangla;
