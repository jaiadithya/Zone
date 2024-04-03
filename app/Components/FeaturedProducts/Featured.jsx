import React from 'react';
import Prod1 from './Prod1';
import Prod2 from './Prod2';
import Prod3 from './Prod3';

const FeaturedArray = () => (
  <div className='mb-20'>
    <h5 className='heading_text lg:mb-8 md:mb-6 mb-4 sm:ml-4'>Featured Products</h5>
    <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

      <div className='mx-2 '>
        <Prod1 />
      </div>

      <div className='mx-2'>
        <Prod2 />
      </div>

      <div className=' mx-2'>
        <Prod3 />
      </div>

    </div>
  </div>
);

export default FeaturedArray;
