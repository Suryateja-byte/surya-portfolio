import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="content-container">
        <div className="new-content">
          <main className="text-animation-container">
            <p>Hello 👋 I'm</p>
            <section className="animation">
              <div className="first"><div> Surya Theja </div></div>
              <div className="second"><div> Web Developer </div></div>
              <div className="third"><div> Frontend Developer </div></div>
            </section>
          </main>
          <div className="description-container">
            <p>
              A passionate Web Developer with a keen interest in creating dynamic and user-friendly websites. With a background in computer science and extensive experience in front-end and back-end technologies, I strive to deliver high-quality solutions that meet the needs of my clients.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src="/20240709_093850.png" alt="Surya Theja" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
