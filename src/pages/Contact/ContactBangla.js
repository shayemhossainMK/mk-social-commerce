import React from "react";
import HomeHeader from "../Home/HomeHeader/HomeHeader";
import HomeHeaderBangla from "../Home/HomeHeader/HomeHeaderBangla";

const ContactBangla = () => {
  return (
    <div className="">
      <HomeHeaderBangla></HomeHeaderBangla>
      <div className="px-5 md:px-20">
        <div className="md:text-center py-5">
          <h1 className="text-3xl text-primary font-semibold mt-5 mb-8 text-center">
            যেকোনো সাহায্য পেতে ফরমটি পুরুন করুন?
          </h1>
        </div>
        <p className="text-center">
          কামাও সম্পর্কে কোনো কিছু জানাতে ইমেল করুন । আমাদের সাপোর্ট টিম <br />{" "}
          শীঘ্রই আপনার সাথে যোগাযোগ করবে। আমাদের ইমেল করুন: support@kamao.com
        </p>
        <div className="flex justify-center py-10">
          <form className="shadow-2xl rounded-xl py-10 md:px-20" action="">
            <div className="grid grid-cols-1 md:flex px-5 md:px-0  justify-between mb-2">
              <div class="form-control pr-0 md:pr-3">
                <label class="label">
                  <span class="label-text">আপনার নাম</span>
                </label>
                <input
                  type="text"
                  placeholder="নাম"
                  class="input input-bordered bg-gray-100"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">আপনার ইমেইল</span>
                </label>
                <input
                  type="email"
                  placeholder="ইমেইল"
                  class="input input-bordered bg-gray-100"
                />
              </div>
            </div>
            <div className=" px-5 md:px-0">
              <label class="label">
                <span class="label-text">আপনার মেসেজ</span>
              </label>
              <textarea
                className=" textarea border-2 rounded-xl bg-gray-100 my-2 md:my-0 w-full"
                name=""
                id=""
              ></textarea>
            </div>
            <label class="label px-5 md:px-0">
              <span class="label-text">ফাইল আপলোড করুন</span>
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
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBangla;
