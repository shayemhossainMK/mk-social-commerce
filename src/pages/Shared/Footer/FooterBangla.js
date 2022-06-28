import React from "react";
import { Link } from "react-router-dom";

const FooterBangla = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="py-10 shadow-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="md:mx-auto pl-4 md:pl-0">
            <p className="text-secondary text-xl mb-3 font-bold">
              নেভিগেট করুন
            </p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  ব্লগ
                </li>
                <li className="my-5 hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  FAQs
                </li>
                <li className="mb-5 hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  সাহায্য পেতে
                </li>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  <Link className="text-sm" to="/contact">
                    যোগাযোগ করুন
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto">
            <p className="text-secondary text-xl mb-3 font-bold">
              আমাদের ফলো করুন
            </p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  <a className="text-sm" href="">
                    ফেসবুক
                  </a>
                </li>
                <li className="my-5 hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  <a href=""> টুইটার</a>
                </li>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  <a href=""> ইনস্টাগ্রাম</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 md:mt-0 pl-3">
            <p className="text-secondary text-xl mb-3 font-bold">
              প্রয়োজনীয় বিষয়ে পড়ুন
            </p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  কামাও ব্যাবহার করে কিভাবে অর্থ উপার্জন করবেন
                </li>
                <li className="mt-5 hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  বাংলাদেশে অধিক অর্থ উপার্জন এর সর্বোত্তম উপায়
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 md:mt-0">
            <p className="text-secondary text-xl mb-3 font-bold">
              অ্যাপ ডাউনলোড করুন
            </p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer text-sm">
                  গুগোল প্লে স্টোরে
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBangla;
