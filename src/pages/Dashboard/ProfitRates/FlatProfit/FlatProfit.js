import React from "react";

const Flatprofit = () => {
  return (
    <div className="px-5 md:px-20 pb-20 h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 pb-10">
        <div className="text-center bg-base-100 rounded-md shadow-lg px-2 py-3">
          <img
            className="w-24 h-24 mx-auto"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/bd0001145261675.Y3JvcCwxNzQwLDEzNjEsODgzLDU2MA.jpg"
            alt=""
          />
          <p className=" mt-5 mb-2">Flat 4% Profit</p>
          <button className="btn  btn-xs btn-ghost uppercase text-green-700">
            View profit rate
          </button>
        </div>

        <div className="text-center bg-base-100 rounded-md shadow-lg px-2 py-3">
          <img
            className="w-24 h-24 mx-auto"
            src="https://www.infidigit.com/wp-content/uploads/2019/08/Zivame-Final.png"
            alt=""
          />
          <p className=" mt-5 mb-2">Flat 12% Profit</p>
          <button className="btn  btn-xs btn-ghost uppercase text-green-700">
            View profit rate
          </button>
        </div>
        <div className="text-center bg-base-100 rounded-md shadow-lg px-2 py-3">
          <img
            className="w-24 h-24 mx-auto"
            src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
            alt=""
          />
          <p className=" mt-5 mb-2">Flat 7% Profit</p>
          <button className="btn  btn-xs btn-ghost uppercase text-green-700">
            View profit rate
          </button>
        </div>
        <div className="text-center bg-base-100 rounded-md shadow-lg px-2 py-3">
          <img
            className="w-24 h-24 mx-auto"
            src="https://alrigh.com/coupons/wp-content/uploads/2021/07/Ustraa-Coupon.png"
            alt=""
          />
          <p className=" mt-5 mb-2">Flat 20% Profit</p>
          <button className="btn  btn-xs btn-ghost uppercase text-green-700">
            View profit rate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flatprofit;
