import React, { useEffect, useState } from 'react';
import './Loading.css';
import { useLoading } from '../contexts/LoadingContext';

const Loading = ({ onFinish }) => {
  const [isDisappearing, setIsDisappearing] = useState(false);
  const { sectionName } = useLoading();

  useEffect(() => {
    const holdTime = 1000; // 1 second hold time
    const slideUpTime = 500; // 0.5 second slide-up time
    
    const timer = setTimeout(() => {
      setIsDisappearing(true);
      const finishTimer = setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, slideUpTime);

      return () => {
        clearTimeout(finishTimer);
      };
    }, holdTime);

    return () => {
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <>
      <div className="loading-overlay"></div>
      <div className={`loading-screen ${isDisappearing ? 'slide-up' : ''}`}>
        <div className="loading-content">
          <h2>{sectionName}</h2>
        </div>
      </div>
    </>
  );
};

export default Loading;
