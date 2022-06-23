import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../imgs/reviews/slider1.jpg";
import slider2 from "../../../imgs/reviews/slider2.jpg";
import slider3 from "../../../imgs/reviews/slider3.png";
import slider5 from "../../../imgs/reviews/slider5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class OurSuperstart extends Component {
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
      <div className="bg-base-100">
        <div className="px-1 md:px-20 py-5">
          <div className="md:text-center pb-5">
            <h1 className="text-3xl text-primary font-semibold mt-5 mb-8 text-center">
              Meet Our Superstars
            </h1>
          </div>
          <div className="shadow-xl py-5">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1} className="mx-2 md:mx-10 pr-5">
                <div className="md:flex">
                  <img className="w-[300px] md:max-w-sm" src={slider1} alt="" />
                  <div className=" md:px-10">
                    <h4 className="text-xl font-bold my-3">Samuel Howells</h4>
                    <p className="md:pr-48">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum autem aspernatur impedit velit at deserunt laborum,
                      cupiditate reiciendis nisi repellat. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Qui, dolor!
                    </p>
                  </div>
                </div>
              </div>
              <div key={2} className="mx-2 md:mx-10 pr-5">
                <div className="md:flex">
                  <img className="w-[300px] md:max-w-sm" src={slider5} alt="" />
                  <div className="md:px-10">
                    <h4 className="my-3 font-bold text-xl">William Blake</h4>
                    <p className=" md:pr-48">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum autem aspernatur impedit velit at deserunt laborum,
                      cupiditate reiciendis nisi repellat.
                    </p>
                  </div>
                </div>
              </div>
              <div key={3} className="mx-2 md:mx-10 pr-5 mr-5">
                <div className="md:flex">
                  <img
                    className=" w-[300px] md:max-w-sm"
                    src={slider2}
                    alt=""
                  />
                  <div className=" md:px-2">
                    <h4 className="text-xl font-bold my-3">
                      Hayden Hutchinson
                    </h4>
                    <p className="mr-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum autem aspernatur impedit velit at deserunt laborum,
                      cupiditate reiciendis nisi repellat.
                    </p>
                  </div>
                </div>
              </div>
              <div key={4} className="mx-2 md:mx-10 pr-5">
                <div className="md:flex">
                  <img className="w-[300px] md:max-w-sm" src={slider3} alt="" />
                  <div className="md:mx-10">
                    <h4 className="font-bold text-xl my-3">Laura Waters</h4>
                    <p className="md:pr-48 mr-10">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum autem aspernatur impedit velit at deserunt laborum,
                      cupiditate reiciendis nisi repellat.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="mt-10" style={{ textAlign: "center" }}>
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
