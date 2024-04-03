import React from 'react';
import Test from './Test';
import DealsArray from './Deals';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CountdownTimer from '../CounterTimer';



const Hotdeals = () => {
  return (
    <div className='mb-20'>
      <div className='flex items-center lg:mb-8 md:mb-6 mb-8 '>
      <div className=' lg:flex md:flex sm:flex-row sm:mx-8 items-center'>

        <span className='heading_text lg:mb-8 md:mb-6 mb-4 ml-4'>🔥 Hot Deals Today</span>
        <CountdownTimer />

        <div className=''>
          <button className='timer_button ml-8 mx-2'>01</button>
          <span className='text-xl'>:</span>
          <button className='timer_button mx-2'>23</button>
          <span className='text-xl'>:</span>
          <button className='timer_button mx-2'>45</button>
          </div>

        </div>
        {/* <div className='flex gap-8 mr-6' >
          <IoIosArrowBack size={'18px'} className='text-gray-400 cursor-pointer'/>
          <IoIosArrowForward size={'18px'} className='text-gray-400 cursor-pointer'/>
        </div> */}
      </div>

      <DealsArray />

      {/* <Test/> */}
    </div>
  );
};

export default Hotdeals;
