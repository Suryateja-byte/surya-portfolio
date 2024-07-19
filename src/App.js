// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import LoadingInitial from './components/LoadingInitial';
import Loading from './components/Loading';
import Skills from './pages/Skills';
import { LoadingProvider, useLoading } from './contexts/LoadingContext';
import './App.css';

const AppContent = () => {
  const { loading, setLoading, setSectionName } = useLoading();
  const [initialLoad, setInitialLoad] = useState(() => {
    return !sessionStorage.getItem('initialLoad');
  });

  useEffect(() => {
    if (initialLoad) {
      console.log('Initial load animation triggered');
      const timer = setTimeout(() => {
        setLoading(false);
        setInitialLoad(false);
        sessionStorage.setItem('initialLoad', 'true');
        console.log('Initial load animation completed');
      }, 3000); // Initial load for 3 seconds

      return () => clearTimeout(timer);
    }
  }, [initialLoad, setLoading]);

  const handleSectionChange = (section) => {
    setSectionName(section);
    if (!loading) {
      setLoading(true);
    }
  };

  return (
    <div className="App">
      {initialLoad && <LoadingInitial onFinish={() => setLoading(false)} />}
      {!initialLoad && loading && <Loading onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <NavBar onNavigate={handleSectionChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <LoadingProvider>
      <AppContent />
    </LoadingProvider>
  </Router>
);

export default App;
