import React from "react";

const productData = [
  { imageSrc: "/iwatch.png", title: "Apple Watch", price: "$299.99", soldCount: 1260 },
  { imageSrc: "/echodot1.png", title: "Amazon Echodot", price: "$139.49", soldCount: 625 },
  { imageSrc: "/iphone1.png", title: "Iphone 14 Pro", price: "$1299.99", soldCount: 185 },
  { imageSrc: "/jacket1.png", title: "H & M Jacket", price: "$789.30", soldCount: 864 },
  { imageSrc: "/airpods2.png", title: "Airpods Pro 2", price: "$899.49", soldCount: 745 },
  { imageSrc: "/jwans1.png", title: "Denim Jean", price: "$99.59", soldCount: 235 },
  { imageSrc: "/keyboard1.png", title: "Keyboard", price: "$499.95", soldCount: 235 },
  { imageSrc: "/mac1.png", title: "MacBook Pro", price: "$1499.99", soldCount: 485 },
  { imageSrc: "/shoe1.png", title: "Nike Shoe", price: "$1245.99", soldCount: 2350 },
  { imageSrc: "/headphone2.png", title: "Apple Headphone", price: "$999.99", soldCount: 134 },
  { imageSrc: "/sweater1.png", title: "H & M Shirt", price: "$39.99", soldCount: 235 },
  { imageSrc: "/mouse1.png", title: " HP Mouse", price: "$59.49", soldCount: 125 },


  
];

const Deals = ({ imageSrc, title, price, soldCount }) => {
  return (
    <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border items-center rounded-2xl border-gray-200 hover:bg-gray-100 duration-200	 " >
      <div className="bg-gray-100 m-4 p-2 items-center justify-center rounded-2xl mb-4">
        <a href="/product">
          <img
            className="p-4 w-32 h-32 mx-auto rounded-t-lg object-cover"
            src={imageSrc}
            alt="product image"
          />
        </a>
      </div>

      <div className="px-5 pb-5">
        <a href="/product">
          <h5 className="text-sm font-medium tracking-tight mb-1 text-gray-700">
            {title}
          </h5>
        </a>

        <span className="text-sm font-medium text-orange-600">{price}</span>

        <div className="flex items-center justify-between mt-2">
          <div className="w-12 bg-gray-300 rounded-full h-1"></div>

          <span className="text-gray-400 text-xs font-light py-0.5 rounded">
            🔥 {soldCount} Sold
          </span>
        </div>
      </div>
    </div>
  );
};

const DealsArray = () => (
  <div className="flex flex-wrap gap-2 justify-center">
    {productData.map((product, index) => (
      <Deals key={index} {...product} />
    ))}
  </div>
);

export default DealsArray;
