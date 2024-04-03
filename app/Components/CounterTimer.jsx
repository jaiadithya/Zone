"use client"
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const countDownDate = new Date("Feb 01, 2024 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      });

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        // You can perform additional actions when the countdown expires
      }
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [countDownDate]);

  return (
    <div>
      <div id="days" >{timeLeft.days} days</div>
      <div id="hours">{timeLeft.hours} hours</div>
      <div id="minutes">{timeLeft.minutes} minutes</div>
      <div id="seconds">{timeLeft.seconds} seconds</div>
    </div>
    

// <div className=''>
// <button className='timer_button ml-8 mx-2' id="days" >{timeLeft.hours}</button>
// <span className='text-xl'>:</span>
// <button className='timer_button mx-2'>{timeLeft.minutes}</button>
// <span className='text-xl'>:</span>
// <button className='timer_button mx-2'>{timeLeft.seconds}</button>
// </div>

  );
};

export default CountdownTimer;
