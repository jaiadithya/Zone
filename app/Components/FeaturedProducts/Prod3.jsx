import React from "react";

const Prod3 = () => {
  const productData = [
    { imageSrc: "/iwatch.png", title: "Apple Watch", price: "$299.99" },
    { imageSrc: "/echodot1.png", title: "Amazon Echodot", price: "$139.49" },
    { imageSrc: "/iphone2.png", title: "Iphone 14 Pro", price: "$1299.99" },
    { imageSrc: "/jacket1.png", title: "H & M Jacket", price: "$789.30" },
  ];

  const Featured = ({ imageSrc, title, price }) => {
    return (
        <div className="lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 border inline-block items-center rounded-2xl border-gray-200 hover:bg-gray-100 duration-200">
      <div className="bg-gray-100 m-4  items-center justify-center rounded-2xl mb-4">
          <a href="/product">
            <img
              className="p-6 mx-auto max-h-full max-w-full object-contain"
              src={imageSrc}
              alt="product image"
              style={{ display: "block", width: "100%" }}
            />
          </a>
        </div>



        <div className="px-5 pb-5">
          <a href="/product">
            <h5 className="text-sm font-medium tracking-tight mb-1 text-gray-700">
              {title}
            </h5>
          </a>

          <span className="text-sm font-medium text-gray-900">{price}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="grid lg:grid-cols-2 md:cols-span-1 sm:grid-cols-2 gap-4 ">
      {productData.map((product, index) => (
        <Featured key={index} {...product} />
      ))}
    </div>
  );
};

export default Prod3;
