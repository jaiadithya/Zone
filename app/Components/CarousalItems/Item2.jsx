import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Item2 = () => {
  return (
    <div
    className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border border-gray-200 rounded-lg shadow items-center justify-center w-4/5 mx-auto"
    style={{
        backgroundImage: `public/bg-gradient.png`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className="px-10 py-8  bg-white">
        <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2.5 py-0.5 rounded">
          Opening Sale Discount 50%
        </span>

        <h5 className=" heading_text my-2 ">
            Apple Watch SE 2
          </h5>

        <p className="desc_text mb-8">
        The Apple Watch Series 2 is a stylish and water-resistant smartwatch with advanced fitness 
        tracking and GPS capabilities. It seamlessly integrates with apps and notifications.
        </p>

        <button type="button" className="custom_button">
        <Link href="product" className="flex items-center gap-2">Shop Now <FaAngleRight /></Link>
        </button>
      </div>

      <div className="">
      <a href="/Components/sample">
          <img
            className="p-10 rounded-t-lg w-full h-300"
            src="iwatch.png"
            alt="product image"

          />
        </a>
      </div>
    </div>
  );
};

export default Item2;
