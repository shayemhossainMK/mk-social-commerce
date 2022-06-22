import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="py-10 shadow-2xl ">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="md:mx-auto pl-4 md:pl-0">
            <p className="text-secondary text-xl mb-3 font-bold">Navigate</p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  Blogs
                </li>
                <li className="my-5 hover:underline hover:text-secondary hover:cursor-pointer">
                  FAQs
                </li>
                <li className="mb-5 hover:underline hover:text-secondary hover:cursor-pointer">
                  Get Help
                </li>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto">
            <p className="text-secondary text-xl mb-3 font-bold">Follow Us</p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  Facebook
                </li>
                <li className="my-5 hover:underline hover:text-secondary hover:cursor-pointer">
                  Twitter
                </li>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  Instagram
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 md:mt-0 pl-3">
            <p className="text-secondary text-xl mb-3 font-bold">
              Useful Reads
            </p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  How to earn money using KAMAO
                </li>
                <li className="mt-5 hover:underline hover:text-secondary hover:cursor-pointer">
                  Best way to earn more money in Bangladesh
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 md:mt-0">
            <p className="text-secondary text-xl mb-3 font-bold">
              Download App
            </p>
            <div className="font-bold">
              <ul>
                <li className="hover:underline hover:text-secondary hover:cursor-pointer">
                  Google Play Store
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
