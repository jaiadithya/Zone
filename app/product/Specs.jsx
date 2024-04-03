import React from 'react';

const Specs = () => {
  return (
    <div>
      <h5 className='mt-8 mb-4 font-semibold'>Specifications</h5>
      <div className="flex flex-col">
        <div className="flex flex-row   my-2">
          <span className="text-gray-500 font-light	 text-sm	 min-w-40	">Category</span>
          <div className="font-light	text-sm	 ml-2">Mobile</div>
        </div>

        <div className="flex flex-row  my-2">
          <span className="text-gray-500 font-light	 text-sm	  min-w-40	">Manufacturer</span>
          <div className='font-light text-sm	 ml-2'>Apple</div>
        </div>

        <div className="flex flex-row  my-2">
          <span className="text-gray-500 font-light	 min-w-40 text-sm		">Warranty</span>
          <div className='font-light text-sm		ml-2'>12 Months</div>
        </div>

        <div className="flex flex-row my-2">
          <span className="text-gray-500 font-light	  min-w-40	 text-sm	">Serial Number</span>
          <div className='font-light	text-sm	 ml-2'>89437893231</div>
        </div>

        <div className="flex flex-row  my-2">
          <span className="text-gray-500 font-light	 min-w-40 text-sm		">Ships From</span>
          <div className='font-light text-sm		ml-2'>Chennai</div>
        </div>
      </div>
    </div>
  );
};

export default Specs;
