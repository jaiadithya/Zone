import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Tabs from "../Components/Tabs";
import Desc from "./Desc";
import Specs from "./Specs";
import Review from "./Review";
import Gallery from "./Gallery";
import Ratings from "./Ratings";
import Info from "./Info";

const Product = () => {
  return (
    <div className="mt-24 mx-4 lg:mx-40">
      <Breadcrumbs />

      <div className="grid mt-6 lg:grid-cols-5 md:grid-cols-3 grid:cols-1 	">
        {/* Tabs Section - 3/5 of the width */}
        <div className="lg:col-span-3 md:col-span-1 col-span-1 mb-10">
          <Gallery />
        </div>

        {/* Product Information Section - 2/5 of the width */}
        <div className="lg:col-span-2 md:col-span-2 col-span-1">
        <Info/>
        </div>
      </div>
      <div className="flex flex-col mb-20">
        <Specs />
        <Desc />
      </div>

      <div>
        <Review />
      </div>

      <div className="flex flex-col mb-20">
        <Ratings />
      </div>
    </div>
  );
};

export default Product;
