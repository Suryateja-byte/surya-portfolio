import React, { useState, useEffect } from 'react';

const phrases = ['Hello', 'Bonjour', 'स्वागत हे', 'Ciao', 'Olá', 'おい', 'Hallå', 'Guten tag', 'Hallo'];

const WordCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 300); // 0.3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <h1 className="loading-text">{phrases[index]}</h1>
  );
};

export default WordCarousel;
