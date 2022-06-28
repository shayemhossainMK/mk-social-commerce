import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const JoinNowBangla = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <div className="text-center my-28">
        <Link to="/signupbangla">
          <button className="mt-5 btn btn-secondary px-5 md:px-8 rounded-full shadow-sm text-xl mr-3 md:mr-10 ">
            জয়েন করুন
          </button>
        </Link>
        {user ? (
          <button
            onClick={logout}
            className=" mt-5 btn btn-outline border-blue-600 border-4 text-primary px-7 md:px-10 rounded-full shadow-sm text-xl hover:bg-primary hover:text-white hover:border-primary duration-500 "
          >
            সাইন আউট
          </button>
        ) : (
          <Link to="/loginbangla">
            <button className=" mt-5 btn btn-outline border-blue-600 border-4 text-primary px-7 md:px-10 rounded-full shadow-sm text-xl hover:bg-primary hover:text-white hover:border-primary duration-500 ">
              সাইন ইন
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default JoinNowBangla;
