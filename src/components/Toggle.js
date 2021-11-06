import React from "react";

const Toggle = ({ toggleData }) => {
  return (
    <>
      <button
        onClick={toggleData}
        type="button"
        className="mx-auto font-bold text-sm uppercase text-gray-800 rounded-md shadow-md block py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-purple-600 hover:to-red-600-500"
      >
        Toggle data
      </button>
    </>
  );
};

export default Toggle;
