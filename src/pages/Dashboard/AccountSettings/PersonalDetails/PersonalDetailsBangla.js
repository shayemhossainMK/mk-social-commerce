import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../../firebase.init";

const PersonalDetailsBangla = () => {
  const [user] = useAuthState(auth);

  const handleUpdateUserInfo = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const age = e.target.age.value;
    const address = e.target.address.value;
    const gender = e.target.gender.value;
    console.log(name, phone, age, address, gender);

    const email = user?.email;
    const userInfo = { name, phone, age, address, gender };

    fetch(`https://protected-gorge-55622.herokuapp.com/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Profile Updated");
      });
    e.target.reset();
  };
  return (
    <div className="w-[700px]">
      <form action="" onSubmit={handleUpdateUserInfo}>
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
            <select
              name="gender"
              class="select select-bordered bg-gray-100 w-full max-w-xs"
            >
              <option selected>Male</option>
              <option>Female</option>
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
            <button
              type="submit"
              className="btn btn-primary text-white rounded-full px-5 hover:scale-105 hover:rotate-2 hover:outline-none hover:bg-secondary duration-300 "
            >
              সেভ করুন
            </button>
          </div>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default PersonalDetailsBangla;
