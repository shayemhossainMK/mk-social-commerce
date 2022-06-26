import React from "react";

const ChangePassword = () => {
  return (
    <div>
      {" "}
      <div className="w-[700px]">
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Current Password</span>
              </label>
              <input
                type="password"
                placeholder="Current Password"
                class="input input-bordered bg-gray-100 w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">New Password</span>
              </label>
              <input
                type="password"
                placeholder="New Password"
                class="input input-bordered w-full bg-gray-100 max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="Confirm Password"
                class="input input-bordered bg-gray-100 w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <button className="btn text-white rounded-full shadow-md  btn-primary px-10 uppercase md:mt-8 hover:scale-105 hover:rotate-2 hover:bg-secondary duration-300 ">
                Save Change
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
