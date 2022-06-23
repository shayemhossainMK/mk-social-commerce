import React from "react";
import { Link } from "react-router-dom";

const JoinNow = () => {
  return (
    <div className="">
      <div className="text-center my-28">
        <Link to="/signup">
          <button className="mt-5 btn btn-secondary px-5 md:px-8 rounded-full shadow-sm text-xl mr-3 md:mr-10 ">
            Join now
          </button>
        </Link>
        <Link to="/login">
          <button className=" mt-5 btn btn-outline border-blue-600 border-4 text-primary px-7 md:px-10 rounded-full shadow-sm text-xl hover:bg-primary hover:text-white hover:border-primary duration-500 ">
            sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinNow;
