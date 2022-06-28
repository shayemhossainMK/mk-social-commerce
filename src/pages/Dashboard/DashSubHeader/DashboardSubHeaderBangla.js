import React from "react";
import { Link } from "react-router-dom";

const DashboardSubHeaderBangla = () => {
  return (
    <div className="my-10">
      <div className="flex flex-wrap items-center justify-center gap-10 shadow-xl bg-gray-200 py-10 text-primary font-semibold">
        <Link to="/dashboard">দারুন অফার</Link>
        <Link to="/dashboard">এক্সেসরিএস</Link>
        <Link to="/dashboard">ম্যান ফ্যাশন</Link>
        <Link to="/dashboard">বেউটি কেয়ার</Link>
        <Link to="/dashboard">ওমেন ফ্যাশন</Link>
        <Link to="/dashboard">ওয়মেন ফুট ওয়েয়ার</Link>
        <Link to="/dashboard">গ্রোসারি</Link>
        <Link to="/dashboard">ইলেকট্রনিক্স</Link>
        <Link to="/dashboard">হোম অ্যান্ড কিচেন</Link>
      </div>
    </div>
  );
};

export default DashboardSubHeaderBangla;
