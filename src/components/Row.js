import React from "react";

const Row = ({ title, fetchURL, rowID }) => {
  return (
    <>
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
    </>
  );
};

export default Row;
