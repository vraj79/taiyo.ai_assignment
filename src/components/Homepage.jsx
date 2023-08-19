import React from "react";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-100 min-h-screen flex md:flex-row justify-center items-center flex-col gap-5">
      <button
        onClick={() => navigate("/add-contact")}
        className="text-white bg-blue-600 hover:bg-blue-700 p-5 rounded-lg transition duration-300 focus:outline-none"
      >
        Contact Wala App
      </button>
      <button
        onClick={() => navigate("/chart")}
        className="text-white bg-blue-600 hover:bg-blue-700 p-5 rounded-lg transition duration-300 focus:outline-none"
      >
        Chart Wala App
      </button>
    </div>
  );
};

export default Homepage;
