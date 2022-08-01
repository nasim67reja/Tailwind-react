import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-[100] flex w-full items-center justify-between p-4">
      <h1 className="cursor-pointer text-4xl font-bold text-red-600">
        NETFLIX
      </h1>
      <div>
        <button className="pr-4 text-white">Sign In</button>
        <button className="cursor-pointer rounded bg-red-600 px-6 py-2 text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
