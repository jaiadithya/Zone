import React from 'react'
import { AiFillStar } from "react-icons/ai";
import Quantity from '../Components/Quantity';
import { FaCartPlus } from "react-icons/fa";
import Link from 'next/link';



const Info = () => {
  return (

    <div className="col-span-2	">
    <span
      className="text-gray-800 font-medium text-2xl"
      style={{ fontFamily: "Barlow, sans-serif" }}
    >
      Apple Iphone 14 pro
    </span>

    <div className="flex mt-4 items-center ">
      <AiFillStar className="text-yellow-400" size={20} />
      <AiFillStar className="text-yellow-400" size={20} />
      <AiFillStar className="text-yellow-400" size={20} />
      <AiFillStar className="text-yellow-400" size={20} />
      <AiFillStar className="text-gray-300" size={20} />

      <p className="text-gray-400 font-light text-xs ml-2">
        {" "}
        (789 reviews)
      </p>
    </div>

    <div className="my-8">
      <p className="font-medium text-lg mb-4 text-gray-800"> $699.99 </p>
      <p className="text-gray-500 font-light text-sm">
        Occaecati est et illo quibusdam accusamus qui. Incidunt aut et
        molestiae ut facere aut. Est quidem iusto praesentium excepturi
        harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium
        doloribus eaque debitis.
      </p>
    </div>

    <div className="gap-16 mb-10 flex">
      <div>
        <h5 className="font-medium text-md mb-4 text-gray-800">Color</h5>
        <div className="gap-x-2 flex ">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300  rounded-lg text-xs px-4 py-4 me-2 mb-2 "
          ></button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 	rounded-lg text-xs px-4 py-4 me-2 mb-2 "
          ></button>
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xs px-4 py-4 me-2 mb-2 "
          ></button>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 	 rounded-lg text-xs px-4 py-4 mb-2 "
          ></button>
        </div>
      </div>

      <Quantity />
    </div>

    <div className="flex gap-6">
      <button
        type="button"
        class="custom_button  inline-flex h-10 gap-2 items-center"
      >
        <FaCartPlus /> Add to Cart{" "}
      </button>

      <button
        type="button"
        className="primary_button inline-flex h-10 gap-2 items-center"
        >
  <Link href="/shoppingcart">Buy Now</Link>
      </button>
    </div>
  </div>
      )
}

export default Info