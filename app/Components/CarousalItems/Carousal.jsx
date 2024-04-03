'use client'

import React, { useState, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';

function Carousal() {
  const slides = [
    { component: <Item1 /> },
    { component: <Item2 /> },
    { component: <Item3 /> },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, slides.length]);

  return (
    <div className='py-16 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-20000'>
        {slides[currentIndex].component}
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled
              style={{
                color: currentIndex === slideIndex ? '#FA541C' : '#FBC7B4',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousal;
