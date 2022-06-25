import React from "react";
import { Link } from "react-router-dom";

export const DashboardSubHeader = () => {
  return (
    <div className="my-10">
      <div className="flex items-center justify-center gap-10 shadow-xl bg-gray-200 py-10 text-primary font-semibold">
        <Link to="/dashboard">Super Deals</Link>
        <Link to="/dashboard">Accessories</Link>
        <Link to="/dashboard">Man Fashion</Link>
        <Link to="/dashboard">Beauty Care</Link>
        <Link to="/dashboard">Women Fashion</Link>
        <Link to="/dashboard">Women Foot ware</Link>
        <Link to="/dashboard">Groceries</Link>
        <Link to="/dashboard">Electronics</Link>
        <Link to="/dashboard">Home & Kitchen</Link>
      </div>
    </div>
  );
};
