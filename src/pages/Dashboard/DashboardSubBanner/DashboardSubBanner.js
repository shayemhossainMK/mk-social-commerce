import React from "react";

const DashboardSubBanner = () => {
  return (
    <div className="py-5 shadow-lg my-16 px-5 md:px-20  bg-gray-200">
      <div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 justify-center mx-auto w-full text-center max-w-[1280px] ">
          <div className="shadow-xl mx-auto md:w-48 bg-[#6A2982] rounded-2xl p-2">
            <p className="text-center text-xl text-white pb-2 font-semibold">
              Deal of the day
            </p>
            <img
              className="rounded-2xl md:h-32"
              src="https://media.istockphoto.com/photos/coins-stack-with-balance-scale-money-management-financial-plan-time-picture-id1331374129?b=1&k=20&m=1331374129&s=170667a&w=0&h=-X89742iA4ZxqOq0ZfbJiO4eFxgfWm_gv-Z8zR0Te1k="
              alt=""
            />
          </div>
          <div className="shadow-xl mx-auto md:w-48 bg-primary rounded-2xl p-2">
            <p className="text-center text-xl text-white pb-2 font-semibold">
              Brand Image
            </p>
            <img
              className="rounded-2xl md:h-32"
              src="https://www.investopedia.com/thmb/Yz-F815fpf9XzU8GNs5mkLw88ec=/2121x1414/filters:fill(auto,1)/money-and-graph-954922482-ef6824e995014ec3a75f865385696dce.jpg"
              alt=""
            />
          </div>
          <div className="shadow-xl mx-auto md:w-48 bg-[#ED6A49] rounded-2xl p-2">
            <p className="text-center text-xl text-white pb-2 font-semibold">
              Food panda
            </p>
            <img
              className="rounded-2xl md:h-32"
              src="https://miro.medium.com/max/1024/0*KZKN16hy1kSFqT9_.png"
              alt=""
            />
          </div>
          <div className="shadow-xl mx-auto md:w-48 bg-[#000] rounded-2xl p-2">
            <p className="text-center text-xl text-white pb-2 font-semibold">
              Pathao sell
            </p>
            <img
              className="rounded-2xl md:h-32"
              src="https://bdpressrelease.com/wp-content/uploads/2019/08/Users-and-Riders-to-get-more-features-from-Pathao.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSubBanner;
