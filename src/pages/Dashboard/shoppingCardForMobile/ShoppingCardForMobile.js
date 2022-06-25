import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faDollar,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export default class ShoppingCardForMobile extends Component {
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
      <div className="bg-gray-50">
        <div className="px-5 md:px-20 py-10">
          <div className="">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div key={1} className="mx-2 md:mx-10 pr-5 py-10 ">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className=" h-48 mx-auto "
                        src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?w=2000"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Most popular
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          254
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 4% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={2} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className=" h-48 mx-auto "
                        src="https://www.globalblue.com/business/images/article926851.ece/BINARY/TFS_Article_2019_970x643.jpg"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Ek exclusive
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          432
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 5% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={3} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className=" h-48 mx-auto "
                        src="https://media.istockphoto.com/photos/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-picture-id1193750118?b=1&k=20&m=1193750118&s=170667a&w=0&h=dWmXq8D_P7sHRIZn-fPNRLPJaAvSvJmeYH9Bsq8Ywhs="
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Flash sale
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> 76
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 3% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={4} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className=" h-48 mx-auto "
                        src="https://img.freepik.com/free-photo/parents-their-daughter-are-holding-shopping-bags_85574-7622.jpg?w=2000"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Most popular
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          321
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 7% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={5} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className=" h-48 mx-auto "
                        src="https://as2.ftcdn.net/v2/jpg/02/04/13/93/1000_F_204139314_ATMpTczQPOYUcAssjMqxd644365A3sh3.jpg"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Exlusive offer
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          123
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 2% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={6} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className="h-48 mx-auto "
                        src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_522735456_249841.jpg"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Most popular
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          654
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 8% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={7} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className="  h-48 mx-auto "
                        src="https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg?w=2000"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Most popular
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          276
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 6% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div key={8} className="mx-2 md:mx-10 pr-5 py-10">
                <div>
                  <div className="shadow-2xl w-72 bg-base-100 mx-auto">
                    <div className="relative z-10">
                      <img
                        className=" h-48 mx-auto "
                        src="https://img.freepik.com/free-photo/happy-asian-pretty-girl-holding-shopping-bags-while-using-smartphone_35721-211.jpg?w=2000"
                        alt=""
                      />
                      {/* <div className="absolute top-10 left-5 z-20">
                        <h2 className="font-bold text-xl text-white">
                          Flat 500 off
                        </h2>
                        <p>On Order Over 1499</p>
                      </div> */}
                      <div className="absolute top-3 right-0 ">
                        <p className="uppercase bg-red-400 rounded-tl-full rounded-br-full text-xs px-5 text-white font-bold p-1">
                          Most popular
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center px-2 gap-2 py-7 ">
                      <div className="border-r-2 pr-1">
                        <p className="uppercase">Starting From</p>
                        <h4 className="text-xl font-semibold">
                          <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>{" "}
                          265
                        </h4>
                      </div>
                      <div className="">
                        <button className="btn btn-primary btn-outline btn-sm uppercase text-xs">
                          Per sale you earn
                        </button>
                        <p className="text-xl font-semibold">Flat 9% Profit</p>
                      </div>
                    </div>
                    <hr />
                    <div className="flex justify-evenly py-3">
                      <button className="btn btn-sm btn-primary btn-outline uppercase rounded-full">
                        Copy link
                      </button>
                      <button className="btn btn-sm text-white btn-success uppercase rounded-full">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShare}
                        ></FontAwesomeIcon>{" "}
                        Share
                      </button>
                    </div>
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
