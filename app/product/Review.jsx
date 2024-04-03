import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

const Review = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-xl grid lg:grid-cols-3 lg:gap-10 md:grid-cols-2 sm:grid-cols-1">
      <div className="">
        <h2
          className="text-gray-800 font-semibold text-3xl ml-12 mt-8"
          style={{ fontFamily: "Barlow, sans-serif" }}
        >
          Reviews
        </h2>
        <div className="flex items-center ml-12 my-8">
          <div className="text-5xl font-bold mr-4">4.6</div>
          <div>
            <div className="flex mb-2 items-center">
              <AiFillStar style={{ fontSize: "20px" }} />
              <AiFillStar style={{ fontSize: "20px" }} />
              <AiFillStar style={{ fontSize: "20px" }} />
              <AiFillStar style={{ fontSize: "20px" }} />
              <AiFillStar style={{ fontSize: "20px" }} />
            </div>
            <div>
              <p className="text-sm text-gray-500"> 12.45k Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mb-1">
          <button
            type="button"
            class="custom_button ml-12 mb-8 inline-flex h-10 gap-2 items-center"
          >
            <RiEdit2Fill style={{ fontSize: "20px" }} /> Write a Review{" "}
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="space-y-3 content-center grid ">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2"> 5 <AiOutlineStar /> </span>
          <div class=" bg-gray-300 rounded-full h-1.5" style={{ width: "65%" }}>
            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "50%" }}> </div>
          </div>
          <span className=" text-sm font-light text-gray-500 flex items-center gap-2"> 5.21 k </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2"> 4 <AiOutlineStar /> </span>
          <div class=" bg-gray-300 rounded-full h-1.5" style={{ width: "65%" }}>
            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "40%" }}> </div>
          </div>
          <span className=" text-sm font-light text-gray-500 flex items-center gap-2"> 2.44 k </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2"> 3 <AiOutlineStar /> </span>
          <div class=" bg-gray-300 rounded-full h-1.5" style={{ width: "65%" }}>
            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "30%" }}> </div>
          </div>
          <span className=" text-sm font-light text-gray-500 flex items-center gap-2"> 523  </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2"> 2 <AiOutlineStar /> </span>
          <div class=" bg-gray-300 rounded-full h-1.5" style={{ width: "65%" }}>
            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "20%" }}> </div>
          </div>
          <span className=" text-sm font-light text-gray-500 flex items-center gap-2"> 415 </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2"> 1 <AiOutlineStar /> </span>
          <div class=" bg-gray-300 rounded-full h-1.5" style={{ width: "65%" }}>
            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: "10%" }}> </div>
          </div>
          <span className=" text-sm font-light text-gray-500 flex items-center gap-2"> 80 </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
