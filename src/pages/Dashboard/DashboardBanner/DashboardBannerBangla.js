import React from "react";

const DashboardBannerBangla = () => {
  return (
    <div className="px-4 md:px-20 py-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-[1280px] mx-auto">
        <div className="shadow-xl bg-[#8B1775]">
          <img
            className=""
            src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5jb21lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
          <p className="text-center text-white py-2 font-semibold">
            ২০% পর্যন্ত আয় করুন
          </p>
        </div>
        <div className="shadow-xl bg-primary">
          <img
            className=""
            src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5jb21lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
          <p className="text-center text-white py-2 font-semibold">
            ২০% পর্যন্ত আয় করুন
          </p>
        </div>
        <div className="shadow-xl bg-[#6A2982] ">
          <img
            className=""
            src="https://media.istockphoto.com/photos/fixed-income-picture-id1326484875?k=20&m=1326484875&s=612x612&w=0&h=2j_FqP-0WoLJYyeDC0l6vlKTnmpl0on5u1nVHvegkr8="
            alt=""
          />
          <p className="text-center text-white py-2 font-semibold">
            ২০% পর্যন্ত আয় করুন
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardBannerBangla;
