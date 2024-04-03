import React from 'react';

const boxes = [
  { id: 1, imageSrc: '/men-clothes.png', text: 'Men Clothes' },
  { id: 2, imageSrc: '/women-clothes.png', text: 'Women Clothes' },
  { id: 3, imageSrc: '/watches.png', text: 'Watches' },
  { id: 4, imageSrc: '/home-appliances.png', text: 'Home Appliances' },
  { id: 5, imageSrc: '/sports.png', text: 'Sports & Outdoor' },
  { id: 6, imageSrc: '/stationary.png', text: 'Books & Stationary' },
  { id: 7, imageSrc: '/living.png', text: 'Home & Living' },
  { id: 8, imageSrc: '/health.png', text: 'Health' },
  { id: 9, imageSrc: '/mobile.png', text: 'Mobiles' },
  { id: 10, imageSrc: '/laptop.png', text: 'Laptops' },
  { id: 11, imageSrc: '/tablet.png', text: 'Tablets' },
  { id: 12, imageSrc: '/headphones.png', text: 'Headphones' },
];

const Category = () => {
  return (
    <div className='mb-20'>
      <h5 className='heading_text lg:mb-8 md:mb-6 mb-4 ml-4'> Categories </h5>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4 p-4">
  {boxes.map((box) => (
    <div
      key={box.id}
      className="border border-gray-200 hover:border-black bg-white rounded-xl p-4 flex flex-col items-center"
    >
      <img
        src={box.imageSrc}
        alt="Category Images"
        className="h-16 w-16 my-3 rounded-lg"
      />
      <p className="text-center text-sm mb-2">{box.text}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Category;
