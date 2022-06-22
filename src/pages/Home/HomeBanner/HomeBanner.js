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
        <div className="h-screen px-1 md:px-10">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1}>
              <div className="flex justify-around h-screen ">
                <div className="mt-40">
                  <div>
                    <p className="text-gray-800 font-bold text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8">
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
                <div className="mt-10 md:mt-20">
                  <img className="w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>
            <div key={2}>
              <div className="flex justify-around h-screen ">
                <div className="mt-40">
                  <div>
                    <p className="text-gray-800 font-bold text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8">
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
                <div className="mt-10 md:mt-20">
                  <img className="w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>
            <div key={3}>
              <div className="flex justify-around h-screen ">
                <div className="mt-40">
                  <div>
                    <p className="text-gray-800 font-bold text-4xl">
                      লিংক শেয়ার কর এবং
                    </p>
                    <p className="text-secondary my-3 text-2xl font-bold">
                      কামাও{" "}
                    </p>
                    <p className="text-gray-600 text-2xl">
                      লিংক শেয়ার করতে পারবে হাজারো সাইট থেকে!
                    </p>
                  </div>
                  <div className="flex mt-8">
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
                <div className="mt-10 md:mt-20">
                  <img className="w-96" src={homeBanner1} alt="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
