import React, { useState } from "react";
import { faTrash, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";

const AllUserBanglaRow = ({ user, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://immense-wave-15306.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "contant-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => toast.success("Make admin done"));
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        {role ? (
          "Already an admin"
        ) : (
          <button
            onClick={makeAdmin}
            className="btn btn-primary btn-xs text-white"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUserTie}
            ></FontAwesomeIcon>{" "}
            Make Admin
          </button>
        )}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

export default AllUserBanglaRow;
