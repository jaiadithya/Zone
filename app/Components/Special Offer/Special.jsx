import Info from "@/app/product/Info";
import React from "react";

const Special = () => {
  return (
    <div className="mb-20">
      <h5 className="heading_text lg:mb-8 md:mb-6 mb-4 ml-4">Special Offer</h5>
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-4">
        <div className="flex items-center justify-center rounded-2xl bg-white shadow-md">
          <div className="p-8 flex flex-col items-center justify-center gap-y-4">
            <p className="text-orange-600 text-xs font-semibold">NEW 2024</p>
            <p className="text-gray-800 text-lg font-medium ">
              Apple Iphone 14 pro
            </p>
            <button className="bg-white cursor-text text-gray-800 text-sm font-medium border border-gray-300 px-3 py-2 rounded-md">
              {" "}
              From $699.99{" "}
            </button>
            <div className="border-t border-dotted border-gray-300 mt-4"></div>
            <p className="text-gray-800 text-sm font-light">Deal ends in :</p>
            <div className="justify-center items-center flex my-2">
  <div className="flex flex-col items-center justify-center">
    <button className="timer_button mx-2">1</button>
    <p className="mt-2 text-xs text-gray-500">
      <span>Days</span>
    </p>
  </div>

  <span className="text-xl mx-1 mb-5 flex items-center">:</span>

  <div className="flex flex-col items-center justify-center">
    <button className="timer_button mx-2">12</button>
    <p className="mt-2 text-xs text-gray-500">
      <span>Hours</span>
    </p>
  </div>

  <span className="text-xl mx-1 mb-5 flex items-center">:</span>

  <div className="flex flex-col items-center justify-center">
    <button className="timer_button mx-2" sx={{ height: "40px", width: "60px !important" }}>45</button>
    <p className="mt-2 text-xs text-gray-500">
      <span>Minutes</span>
    </p>
  </div>

  <span className="text-xl mx-1 mb-5 flex items-center">:</span>

  <div className="flex flex-col items-center justify-center">
    <button className="timer_button mx-2">36</button>
    <p className="mt-2 text-xs text-gray-500">
      <span>Seconds</span>
    </p>
  </div>
</div>

          </div>
        </div>

        <div className="flex items-center justify-center rounded-2xl bg-gray-100">
          <div className=" p-8">
            <img src="headphone2.png" alt="Your Alt Text" />
          </div>
        </div>

        <div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Special;
