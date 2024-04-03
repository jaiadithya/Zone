'use client'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


import React, { useState } from 'react';

const Quantity = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <form className="mx-auto ">
      <h5 className="font-medium text-md mb-4 text-gray-800">Quantity</h5>

        <div className="relative flex items-center max-w-[8rem]">
          <button
            type="button"
            onClick={handleDecrement}
            className="bg-gray-100 hover:bg-gray-200 border  rounded-s-lg p-2 h-8 focus:ring-gray-100  focus:ring-2 focus:outline-none"
          >
            <FaMinus/>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            className="bg-gray-50 border-x-0 border-red-300 h-8 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 "
            value={quantity}
            placeholder="0"
          />
          <button
            type="button"
            onClick={handleIncrement}
            className="bg-gray-100 hover:bg-gray-200 border  rounded-e-lg p-2 h-8 focus:ring-gray-100 focus:ring-2 focus:outline-none"
          >
            <FaPlus/>
          </button>
        </div>
        
      </form>
    </div>
  );
};

export default Quantity;
