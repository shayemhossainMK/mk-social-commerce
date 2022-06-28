import React from "react";
import step1 from "../../../imgs/fourstep/step1.png";

const FourStepsBangla = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <h1 className="text-3xl text-primary font-semibold mt-5 mb-8">
          মাত্র ৪ টি ধাপে আয় করা শুরু করুন
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
        <div className="text-center">
          <img
            className="p-3 mb-6 mx-auto bg-[#FFA500] rounded-full"
            src={step1}
            alt=""
          />
          <h1 className="font-bold text-xl my-2">১। অফার খুঁজুন</h1>
          <p className="mx-10">১০০+ খুচরা বিক্রেতার থেকে অফার খুঁজেনিন</p>
        </div>
        <div className="text-center">
          <img
            className="p-3 mb-6 mx-auto bg-[#FFA500] rounded-full"
            src={step1}
            alt=""
          />
          <h1 className="font-bold text-xl my-2">২। অফার লিঙ্কে কপি করুন</h1>
          <p className="mx-10">
            আমাদের ‘মেইক লিঙ্ক‘ অপশন ব্যাবহার করে অফার লিঙ্ক কপি করুন
          </p>
        </div>
        <div className="text-center">
          <div>
            <img
              className="p-3 mb-6 mx-auto bg-[#FFA500]  rounded-full"
              src={step1}
              alt=""
            />
          </div>
          <h1 className="font-bold text-xl my-2">৩। শেয়ার করুন</h1>
          <p className="mx-10">
            হোয়াটসঅ্যাপ, ফেসবুক, টেলিগ্রামে অফার শেয়ার করুন।
          </p>
        </div>
        <div className="text-center">
          <img
            className="p-3 mb-6 mx-auto bg-[#FFA500] rounded-full"
            src={step1}
            alt=""
          />
          <h1 className="font-bold text-xl my-2">৪।মুনাফা অর্জন করুন</h1>
          <p className="mx-10">
            প্রতিটি বিক্রয়ে মুনাফা অর্জন করুন। আপনার ব্যাংক অ্যাকাউন্টে থেকে
            টাকা উত্তোলন করুন
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourStepsBangla;
