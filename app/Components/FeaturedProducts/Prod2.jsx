import React from "react";

const Prod2 = () => {
  return (
    <div className="p-4 flex flex-col gap-4 bg-violet-200 hover:bg-violet-300 rounded-xl max-h-full " >
      <div className=" inline-block">
        <div className=" border-box max-w-full inline-block  rounded-lg">
        <a href="/product">
          <img
            className=" w-100% h-100% align-bottom object-cover" 
            src="mac2.png"
            alt="product image"
          />
          </a>
        </div>

        {/* Title and Price */}
        <div className=" flex flex-col items-center mb-6 " >
          <h5 className="text-sm font-medium tracking-tight my-2  text-violet-700 text-center">
            Macbook Pro 16 inch
          </h5>
          <span className="text-xl font-medium text-violet-900 text-center">
            $1299.99
          </span>
        </div>

        {/* Button */}
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
  );
};

export default Prod2;
