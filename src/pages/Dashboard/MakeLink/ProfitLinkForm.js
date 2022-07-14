import React, { useEffect, useState } from "react";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profitLinkFunction from "../../../function/profitLinkFunction";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ProfitLinkForm = () => {
  const [profitLinks, setProfitLinks] = useState([]);
  const [user] = useAuthState(auth);
  const userid = user.uid;

  useEffect(() => {
    fetch("http://localhost:5000/profitlink")
      .then((res) => res.json())
      .then((data) => setProfitLinks(data));
  }, []);
  ``;
  // console.log(profitLinks[1]?.Domain);

  // const pro = profitLinkFunction(profitLinks);
  // console.log(pro);

  //   const { _id, Domain, Name, Token } = profitLink;
  //   const subDomainLink = Domain.split("/")[2];
  //   profitLinks.map((profitLink) => console.log(profitLink));

  const handleLink = (e) => {
    e.preventDefault();

    const mainLink = e.target.link.value;
    // console.log(mainLink);
    const subLink = mainLink.split("/")[2];
    // console.log(subLink);
    // console.log("This is from database", subDomainLink);

    // fetch("http://localhost:5000/profitlink")
    //   .then((res) => res.json())
    //   .then((data) => setProfitLinks(data));

    // const pro = profitLinkFunction(profitLinks);
    // console.log(pro);
    const myfunction = (value, index) => {
      const talue = value.Domain;
      const token = value.Token;
      const subDomainLink = talue.split("/")[2];
      if (subLink == subDomainLink) {
        console.log("I love backend!");
        const data = { mainLink, subLink, token };

        // this is for querylink with given data
        const url = `http://localhost:5000/querylink`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));

        // this is for shortlink and pass firebase user id into backend

        // fetch(`http://localhost:5000/shortlink`, {
        //   method: "PUT",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(userId),
        // })
        //   .then((res) => res.json())
        //   .then((result) => console.log(result));
        // fetch(`http://localhost:5000/user/${id}`)
        //   .then((res) => res.json())
        //   .then((data) => console.log("user info", data));

        fetch(`http://localhost:5000/querylink/${userid}`)
          .then((res) => res.json())
          .then((data) => console.log("querylink get", data));
      }
    };
    profitLinks.map(myfunction);
    // if (subLink == subDomainLink) {
    //   console.log("I love backend!");
    // } else {
    //   console.log("Backend is so complex..");
    // }
  };
  return (
    <form action="" onSubmit={handleLink}>
      <div className=" mx-auto justify-center py-10  flex">
        <div className="p-2 px-3.5 bg-primary rounded-full mr-[-2rem] z-20">
          <FontAwesomeIcon
            className="text-white"
            icon={faLink}
          ></FontAwesomeIcon>
        </div>
        <div className="z-10 shadow-lg rounded-r-full ">
          <input
            type="text"
            name="link"
            placeholder="এখানে হোমপেজ / প্রোফাইল লিংক পেস্ট  করুন"
            class="input input-bordered w-full max-w-md pl-10 mr-28 focus:outline-none rounded-r-full"
          />
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="btn px-7 text-white btn-primary rounded-full btn-sm"
        >
          প্রোফাইল লিংক তৈরি করুন
        </button>
      </div>
    </form>
  );
};

export default ProfitLinkForm;
