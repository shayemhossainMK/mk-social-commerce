import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import DashboardHeaderBangla from "../DashHeader/DashboardHeaderBangla";
import SidebarBangla from "../Sidebar/SidebarBangla";

const PersonalInfoBangla = () => {
  const [userProfile, setUserProfile] = useState([]);
  const [user] = useAuthState(auth);

  const email = user?.email;

  useEffect(() => {
    fetch(`https://protected-gorge-55622.herokuapp.com/user/${email}`)
      .then((res) => res.json())
      .then((data) => setUserProfile(data));
  }, [user, userProfile]);
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
              <div class="card card-compact md:w-[550px] bg-gray-100 p-10 shadow-xl">
                <figure>
                  <FontAwesomeIcon
                    className="h-28"
                    icon={faUser}
                  ></FontAwesomeIcon>
                </figure>
                <div class="card-body">
                  {userProfile.map((profile) => (
                    <div key={profile._id}>
                      <div>
                        <div
                          className="text-gray-600"
                          style={{ fontFamily: "Macondo" }}
                        >
                          <h2 class="text-2xl text-center mb-5 font-semibold">
                            {user.displayName ? user.displayName : profile.name}
                          </h2>
                          <div className="shadow-xl rounded-xl p-5 bg-base-100">
                            <p>লিঙ্গ: {profile.gender}</p>
                            <p className="my-2">বয়স: {profile.age}</p>
                            <p>ইমেল : {user.email}</p>
                            <p className="my-2">
                              মোবাইল নম্বর: {profile.phone}
                            </p>
                            <p>অ্যাড্রেস: {profile.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default PersonalInfoBangla;
