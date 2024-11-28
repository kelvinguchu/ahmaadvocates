'use client';

import { useState, useEffect } from 'react';

const FIVE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000; // 5 days in milliseconds

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    Days: 5,
    Hours: 0,
    Minutes: 0,
    Seconds: 0
  });

  useEffect(() => {
    // Get the stored end time or set a new one
    let endTime = localStorage.getItem('countdownEndTime');
    if (!endTime) {
      endTime = (Date.now() + FIVE_DAYS_IN_MS).toString();
      localStorage.setItem('countdownEndTime', endTime);
    }

    const calculateTimeLeft = () => {
      const difference = parseInt(endTime) - Date.now();
      
      if (difference <= 0) {
        // Reset the countdown when it reaches zero
        const newEndTime = (Date.now() + FIVE_DAYS_IN_MS).toString();
        localStorage.setItem('countdownEndTime', newEndTime);
        return {
          Days: 5,
          Hours: 0,
          Minutes: 0,
          Seconds: 0
        };
      }

      return {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        Seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    // Update immediately
    setTimeLeft(calculateTimeLeft());

    // Then update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-8 sm:gap-12 text-center w-full justify-center px-2">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col min-w-[80px] sm:min-w-[100px]">
          <span className="text-4xl sm:text-6xl font-bold text-[#ff6b6b]">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-sm sm:text-base text-gray-400">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer; 