import React from "react";

const PersonalDetailsBangla = () => {
  return (
    <div className="w-[700px]">
      <form action="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">পুরো নাম</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder=" আপনার পুরো নাম"
              class="input input-bordered bg-gray-100 w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">লিঙ্গ</span>
            </label>
            <select class="select select-bordered bg-gray-100 w-full max-w-xs">
              <option selected>পুরুষ</option>
              <option>মহিলা</option>
            </select>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">মোবাইল নম্বর</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="আপনার মোবাইল নম্বর"
              class="input input-bordered bg-gray-100 w-full max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">বয়স</span>
            </label>
            <input
              type="number"
              name="age"
              placeholder="আপনার বয়স"
              class="input input-bordered w-full bg-gray-100 max-w-xs"
            />
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">অ্যাড্রেস</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="আপনার অ্যাড্রেস"
              class="input input-bordered w-full bg-gray-100 max-w-xs"
            />
          </div>
        </div>

        <div className="flex justify-between  mt-5">
          <div className="flex items-center">
            <input type="checkbox" class="checkbox checkbox-xs mr-2" />
            <label htmlFor="checkbox">
              {" "}
              রেফারাল আয়ের ইমেইল নোটিফিকেশন পেতে টিক দিন।
            </label>
          </div>
          <div>
            <button className="btn btn-primary text-white rounded-full px-5 hover:scale-105 hover:rotate-2 hover:outline-none hover:bg-secondary duration-300 ">
              সেভ করুন
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsBangla;
