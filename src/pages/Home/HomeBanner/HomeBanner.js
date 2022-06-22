import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeBanner1 from "../../../imgs/homebanner1.png";
import imo from "../../../imgs/home-social/imo.png";
import telegram from "../../../imgs/home-social/telegram.png";
import wapp from "../../../imgs/home-social/wapp.png";
import messenger from "../../../imgs/home-social/messenger.png";

export default class HomeBanner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="bg-gray-100">
        <div className="h-screen px-5 md:px-10">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1}>
              <div className="grid grid-cols-1 md:flex  md:justify-around mx-5 md:mx-5 h-screen ">
                <div className=" mt-[-7rem] md:mt-40 order-2 md:order-1">
                  <div className="text-center md:text-start">
                    <p className="text-gray-800 font-bold text-3xl md:text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8 justify-center md:justify-start">
                    <a href="">
                      <img className="w-7" src={imo} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={telegram} alt="" />
                    </a>
                    <a href="">
                      <img className="w-7" src={wapp} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={messenger} alt="" />
                    </a>
                  </div>
                </div>
                <div className="pt-20 md:pt-0 md:mt-20 order-1 md:order-2">
                  <img className="w-80 md:w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>

            <div key={2}>
              <div className="grid grid-cols-1 md:flex  md:justify-around mx-5 md:mx-5 h-screen ">
                <div className=" mt-[-7rem] md:mt-40 order-2 md:order-1">
                  <div className="text-center md:text-start">
                    <p className="text-gray-800 font-bold text-3xl md:text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8 justify-center md:justify-start">
                    <a href="">
                      <img className="w-7" src={imo} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={telegram} alt="" />
                    </a>
                    <a href="">
                      <img className="w-7" src={wapp} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={messenger} alt="" />
                    </a>
                  </div>
                </div>
                <div className="pt-20 md:pt-0 md:mt-20 order-1 md:order-2">
                  <img className="w-80 md:w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>

            <div key={3}>
              <div className="grid grid-cols-1 md:flex  md:justify-around mx-5 md:mx-5 h-screen ">
                <div className=" mt-[-7rem] md:mt-40 order-2 md:order-1">
                  <div className="text-center md:text-start">
                    <p className="text-gray-800 font-bold text-3xl md:text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8 justify-center md:justify-start">
                    <a href="">
                      <img className="w-7" src={imo} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={telegram} alt="" />
                    </a>
                    <a href="">
                      <img className="w-7" src={wapp} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={messenger} alt="" />
                    </a>
                  </div>
                </div>
                <div className="pt-20 md:pt-0 md:mt-20 order-1 md:order-2">
                  <img className="w-80 md:w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>

            <div key={4}>
              <div className="grid grid-cols-1 md:flex  md:justify-around mx-5 md:mx-5 h-screen ">
                <div className=" mt-[-7rem] md:mt-40 order-2 md:order-1">
                  <div className="text-center md:text-start">
                    <p className="text-gray-800 font-bold text-3xl md:text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8 justify-center md:justify-start">
                    <a href="">
                      <img className="w-7" src={imo} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={telegram} alt="" />
                    </a>
                    <a href="">
                      <img className="w-7" src={wapp} alt="" />
                    </a>
                    <a href="" className="mx-5">
                      <img className="w-7" src={messenger} alt="" />
                    </a>
                  </div>
                </div>
                <div className="pt-20 md:pt-0 md:mt-20 order-1 md:order-2">
                  <img className="w-80 md:w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
