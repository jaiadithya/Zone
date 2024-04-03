import React from 'react';

const Desc = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="lg:col-span-3 md:col-span-4 col-span-5  ">
        <h5 className='mt-8 mb-4 font-semibold'>Description</h5>
        <p className='text-gray-800 font-light	mb-4'>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>
        <ul className="list-disc list-inside ml-12 ">
          <li className=' text-gray-800 font-light my-3	'>Updated with a more matte texture.</li>
          <li className=' text-gray-800 font-light my-3		'>Durable water-repellent coating.</li>
          <li className=' text-gray-800 font-light my-3		'>Perfect for casual styling.</li>
          <li className=' text-gray-800 font-light my-3	'>Anti-static lining.</li>
        </ul>
        <p className='text-gray-800 font-light	'>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal.</p>
      </div>
    </div>
  );
};

export default Desc;
