// LoadingContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    return !hasLoaded;
  });
  const [sectionName, setSectionName] = useState('');

  useEffect(() => {
    if (!sessionStorage.getItem('hasLoaded')) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 2700); // Simulate a loading time of 2.7 seconds
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <LoadingContext.Provider value={{ loading, setLoading, sectionName, setSectionName }}>
      {children}
    </LoadingContext.Provider>
  );
};
