import React from "react";

const PersonalDetails = () => {
  return (
    <div className="w-[700px]">
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              class="input input-bordered bg-gray-100 w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email Address</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="input input-bordered w-full bg-gray-100 max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              placeholder="Mobile Number"
              class="input input-bordered bg-gray-100 w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Address"
              class="input input-bordered w-full bg-gray-100 max-w-xs"
            />
          </div>
        </div>

        <div className="flex justify-between  mt-5">
          <div className="flex items-center">
            <input type="checkbox" class="checkbox checkbox-xs mr-2" />
            <label htmlFor="checkbox">
              {" "}
              Receive email when I get referral earning
            </label>
          </div>
          <div>
            <button className="btn btn-primary text-white rounded-full px-5 hover:scale-105 hover:rotate-2 hover:outline-none hover:bg-secondary duration-300 ">
              Save Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
