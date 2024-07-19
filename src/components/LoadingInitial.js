import React, { useEffect, useState } from 'react';
import './LoadingInitial.css';
import WordCarousel from './WordCarousel';

const LoadingInitial = ({ onFinish }) => {
  const [isDisappearing, setIsDisappearing] = useState(false);

  useEffect(() => {
    console.log("Initial load animation started"); // Log when the initial load animation starts

    const timer = setTimeout(() => {
      setIsDisappearing(true);
      const finishTimer = setTimeout(() => {
        console.log("Initial load animation finished"); // Log when the initial load animation finishes
        if (onFinish) {
          onFinish();
        }
      }, 1000); // Match this timeout with the animation duration

      return () => {
        clearTimeout(finishTimer);
      };
    }, 3000); // 3 seconds for initial load

    return () => {
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className={`loading-screen ${isDisappearing ? 'slide-up' : ''}`}>
      <div className="loading-content">
        <WordCarousel />
      </div>
    </div>
  );
};

export default LoadingInitial;
