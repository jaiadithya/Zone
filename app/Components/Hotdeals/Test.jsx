import React from "react";

const Test = () => {
  return (
    <div className=" w-full md:w-1/6 lg:w-1/6 border items-center rounded-2xl border-gray-200" style={{ width: '170px', height: '260px' }}>
      <div className="bg-gray-100 m-4 p-2 items-center justify-center rounded-2xl mb-4">
        <a href="#">
          <img
            className="p-4 w-32 h-32 mx-auto rounded-t-lg object-cover"
            src="/iwatch.png"
            alt="product image"
          />
        </a>
      </div>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-sm font-medium tracking-tight mb-1 text-gray-700">
            Apple Watch
          </h5>
        </a>

        <span className="text-sm font-medium text-orange-600">$99.99</span>

        <div className="flex items-center justify-between mt-2">
          <div className="w-12	 bg-gray-300 rounded-full h-1 	"></div>

          <span className="text-gray-400 text-xs font-light py-0.5 rounded">
            🔥 579 Sold
          </span>
        </div>
      </div>
    </div>
  );
};

export default Test;
