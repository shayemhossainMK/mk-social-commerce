import React from "react";
import { Link } from "react-router-dom";
const Bangla = () => {
  return (
    <div>
      <div className="pb-10">
        <div className="text-center">
          <h1 className="text-3xl text-primary font-semibold mt-5 mb-8">
            See How KAMAO Works
          </h1>
        </div>

        <div>
          <div className="flex justify-center mt-10">
            <div>
              <h3 className="text-2xl mr-3 md:mr-20 font-semibold">
                <Link to="/bangla">Bangla</Link>
              </h3>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">English</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bangla;
