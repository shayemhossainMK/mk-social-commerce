import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import daraz from "../../../../imgs/partners/daraz-logo.png";
import bkash from "../../../../imgs/partners/bkash.png";
import citybank from "../../../../imgs/partners/citybank.png";
import nagad from "../../../../imgs/partners/nagad.svg";
import walton from "../../../../imgs/partners/walton.png";
import samsung from "../../../../imgs/partners/samsung.jpeg";

export default class HomepageLInkTwo extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="pb-10">
        <div className="bg-gray-100 py-5 rounded-xl">
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            <div key={1} className="pb-2 mx-auto w-full">
              <div>
                <div className="shadow-2xl bg-base-100 w-72 mx-auto h-36 px-10 py-5 rounded-lg">
                  <img className="w-12 mx-auto" src={daraz} alt="" />
                  <p className="mt-5 text-center">Daraz</p>
                </div>
              </div>
            </div>
            <div key={2} className="pb-2">
              <div>
                <div className="shadow-2xl bg-base-100 w-72 mx-auto h-36 px-10 py-6 rounded-lg">
                  <img className="w-16 mx-auto" src={bkash} alt="" />
                  <p className="mt-5  text-center">bKash</p>
                </div>
              </div>
            </div>
            <div key={3} className="pb-2">
              <div>
                <div className="shadow-2xl bg-base-100 w-72 mx-auto h-36 px-10 py-4  rounded-lg">
                  <img className="w-16 mx-auto" src={citybank} alt="" />
                  <p className="mt-5 text-center">City Bank</p>
                </div>
              </div>
            </div>
            <div key={4} className="pb-2">
              <div>
                <div className="shadow-2xl bg-base-100 w-72 mx-auto h-36 px-10 py-7  rounded-lg">
                  <img className="w-24 mx-auto" src={nagad} alt="" />
                  <p className="mt-4 text-center">Nagad</p>
                </div>
              </div>
            </div>
            <div key={5} className="pb-2">
              <div>
                <div className="shadow-2xl bg-base-100 w-72 mx-auto h-36 px-10 py-3 rounded-lg">
                  <img className="w-20 mx-auto" src={walton} alt="" />
                  <p className="mt-3 text-center">Walton</p>
                </div>
              </div>
            </div>
            <div key={6} className="pb-2">
              <div className="shadow-2xl bg-base-100 w-72 mx-auto h-36 px-10 rounded-lg">
                <img className="w-20 mx-auto" src={samsung} alt="" />
                <p className="mt-5 text-center">Samsung</p>
              </div>
            </div>
          </Slider>
          <div className="mt-16" style={{ textAlign: "center" }}>
            <button
              className=" px-4 mr-3 py-2  bg-base-100 rounded-full shadow-md"
              onClick={this.previous}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              className=" py-2 px-4 bg-base-100 rounded-full shadow-md"
              onClick={this.next}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
