import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// Example reviews data
const reviewsData = [
  {
    image: 'women1.png',
    name: 'Alina',
    description: 'The best product for a lifetime use with all the featires you want.',
    stars: 5,
    date: '09 Mar 2019',
  },
  {
    image: 'women2.png',
    name: 'Andrea',
    description: 'She eagerly opened the gift, her eyes sparkling with excitement.',
    stars: 4,
    date: '21 Nov 2019',
  },
];

const Ratings = () => {
  return (
    <div className='mt-20'>
      {reviewsData.map((review, index) => (
        <div key={index} className='flex items-center mb-10'>
          <img className='w-20 h-20 me-4 rounded-full' src={review.image} alt='' />
          <div>
            <div className='flex mb-2'>
              {[...Array(review.stars)].map((_, starIndex) => (
                <AiFillStar key={starIndex} style={{ fontSize: '20px' }} />
              ))}
              {[...Array(5 - review.stars)].map((_, starIndex) => (
                <AiOutlineStar key={starIndex} style={{ fontSize: '20px' }} />
              ))}
            </div>
            <div className='font-medium gap-y-2 grid'>
              <p>{review.name}</p>
              <time className='block text-xs font-light text-gray-500'>{review.date}</time>
            <p className=' font-light text-sm text-gray-500'>{review.description}</p>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
