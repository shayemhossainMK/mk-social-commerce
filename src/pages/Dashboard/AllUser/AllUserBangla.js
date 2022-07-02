import React, { useEffect, useState } from "react";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import SidebarBangla from "../Sidebar/SidebarBangla";
import AllUserBanglaRow from "./AllUserBanglaRow";

const AllUserBangla = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://polar-taiga-82753.herokuapp.com/user`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

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
              <div>
                <div className="mb-10">
                  <h3 className="text-2xl text-primary font-bold text-center uppercase">
                    All User
                  </h3>
                  <hr className="w-28 mx-auto mt-2" />
                </div>
                <div className="md:w-[800px] p-2">
                  <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Email</th>
                          <th>Make Admin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users?.map((user, index) => (
                          <AllUserBanglaRow
                            key={user._id}
                            user={user}
                            index={index}
                          ></AllUserBanglaRow>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SidebarBangla></SidebarBangla>
        </div>
      </div>
    </div>
  );
};

export default AllUserBangla;
