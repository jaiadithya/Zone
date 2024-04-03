import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Brands = () => {
  return (
    <div className="mb-20">
      <h5 className="heading_text lg:mb-8 md:mb-6 mb-4 ml-4">Featured Brands</h5>
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-2">
        <div className="border flex flex-col items-center justify-center border-gray-200 h-80 mx-2 gap-y-3 rounded-2xl">
          <img src="apple logo.png" alt="Apple Logo" height="40" width="40" />
          <p className="font-medium text-lg	" style={{ fontFamily: "Barlow" }}>
            Apple
          </p>
          <p className="text-center text-sm font-light text-gray-600">
            Innovate with Purpose,
            <br />
            Think Different.
          </p>
          <button className="inline-flex h-10 gap-2 items-center mt-6 p-2 rounded-md text-sm hover:bg-gray-100">
            More Details <IoIosArrowForward />
          </button>
        </div>
        <div>
          <div className="grid grid-cols-3 border items-center justify-center border-gray-200 h-36 mx-2 mb-4 gap-x-4 rounded-2xl">
            <div className="flex items-center justify-center">
              <img
                src="nikelogo.jpeg"
                alt="Nike Logo"
                height="60"
                width="60"
              />
            </div>

            <div className="flex flex-col col-span-2 justify-center">
              <p
                className="font-medium text-lg"
                style={{ fontFamily: "Barlow" }}
              >
                Nike
              </p>
              <p className="text-sm font-light text-gray-600">
                Innovate with Purpose,
                <br />
                Think Different.
              </p>
              <div className="inline-flex items-center">
                <button className="h-8 px-3 py-4  ml-20 rounded-md text-sm hover:bg-gray-100 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    More Details <IoIosArrowForward />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border items-center justify-center border-gray-200 h-36 mx-2 mb-4 gap-x-4 rounded-2xl">
            <div className="flex items-center justify-center">
              <img
                src="puma-logo.jpg"
                alt="Puma Logo"
                height="60"
                width="60"
              />
            </div>

            <div className="flex flex-col col-span-2 justify-center">
              <p
                className="font-medium text-lg"
                style={{ fontFamily: "Barlow" }}
              >
                Puma
              </p>
              <p className="text-sm font-light text-gray-600">
                Innovate with Purpose,
                <br />
                Think Different.
              </p>
              <div className="inline-flex items-center">
                <button className="h-8 px-3 py-4  ml-20 rounded-md text-sm hover:bg-gray-100 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    More Details <IoIosArrowForward />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-2 ">
        <div className="grid grid-cols-3 border items-center justify-center border-gray-200 h-36 mx-2 mb-4 gap-x-4 rounded-2xl">
            <div className="flex items-center justify-center">
              <img
                src="adidas.jpeg"
                alt="Adidas Logo"
                height="60"
                width="60"
              />
            </div>

            <div className="flex flex-col col-span-2 justify-center">
              <p
                className="font-medium text-lg"
                style={{ fontFamily: "Barlow" }}
              >
                Apple
              </p>
              <p className="text-sm font-light text-gray-600">
                Innovate with Purpose,
                <br />
                Think Different.
              </p>
              <div className="inline-flex items-center">
                <button className="h-8 px-3 py-4  ml-20 rounded-md text-sm hover:bg-gray-100 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    More Details <IoIosArrowForward />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 border items-center justify-center border-gray-200 h-36 mx-2 mb-4 gap-x-4 rounded-2xl">
            <div className="flex items-center justify-center">
              <img
                src="louis_philip.jpg"
                alt="Louis Philip Logo"
                height="40"
                width="40"
              />
            </div>

            <div className="flex flex-col col-span-2 justify-center">
              <p
                className="font-medium text-lg"
                style={{ fontFamily: "Barlow" }}
              >
                Apple
              </p>
              <p className="text-sm font-light text-gray-600">
                Innovate with Purpose,
                <br />
                Think Different.
              </p>
              <div className="inline-flex items-center">
                <button className="h-8 px-3 py-4  ml-20 rounded-md text-sm hover:bg-gray-100 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    More Details <IoIosArrowForward />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
