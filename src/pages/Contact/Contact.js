import React from "react";
import HomeHeader from "../Home/HomeHeader/HomeHeader";

const Contact = () => {
  return (
    <div className="">
      <HomeHeader></HomeHeader>
      <div className="px-5 md:px-20">
        <div className="md:text-center py-5">
          <h1 className="text-3xl text-primary font-semibold mt-5 mb-8 text-center">
            How can we help?
          </h1>
        </div>
        <p className="text-center">
          Please email us for any queries or questions about our program. Our
          support team will revert <br /> within 24 business hours. Email us:
          support@kamao.com
        </p>
        <div className="flex justify-center py-10">
          <form className="shadow-2xl rounded-xl py-10 md:px-20" action="">
            <div className="grid grid-cols-1 md:flex px-5 md:px-0  justify-between mb-2">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Enter your name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered bg-gray-100"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Enter your email ID</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered bg-gray-100"
                />
              </div>
            </div>
            <div className="">
              <textarea
                className=" border-2 rounded-xl bg-gray-100 my-5 md:my-0"
                name=""
                id=""
                placeholder="text here.."
                cols="50"
                rows="5"
              ></textarea>
            </div>
            <label class="label px-5 md:px-0">
              <span class="label-text">Upload attachment</span>
            </label>
            <div className="flex items-center md:justify-between px-5 md:px-0">
              <div>
                <input
                  type="file"
                  placeholder="Upload attachment"
                  class="input input-bordered pt-1.5 w-56 bg-gray-100"
                />
              </div>
              <button className="btn  btn-primary text-white ml-7 md:mr-0">
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
