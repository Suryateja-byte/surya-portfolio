import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const contact = document.querySelector('.contact');
    const toggle = document.querySelector('.contact__toggle');

    const handleClick = () => {
      contact.classList.toggle('active');
    };

    toggle.addEventListener('click', handleClick);

    return () => {
      toggle.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <main className="contact-section-container">
      <div className="wrap">
        <div className="contact">
          <button className="contact__toggle">
            <span>Contact Me</span>
          </button>
          <div className="card">
            <div className="card__inner">
              <div className="card__profile"></div>
              <div className="card__content">
                <h2>Suryatheja Deverakonda</h2>
                <p>Hi, I'm Surya Theja and I'm a front-end developer and graphic designer</p>
              </div>
            </div>
            <div className="card__footer">
              <span>Contact Me</span>
            </div>
          </div>

          <div className="social" style={{ '--c': '#EB524A', '--i': 0 }}>
            <div className="social__icon">
              <svg viewBox="0 0 38 30">
                <path style={{ fill: 'white' }} d="M33.99,30H4.01C1.79,30,0,28.21,0,25.99L0,4.01C0,1.79,1.79,0,4.01,0l29.99,0C36.21,0,38,1.79,38,4.01v21.99 C38,28.21,36.21,30,33.99,30z" />
                <path style={{ fill: '#EB524A' }} d="M34.72,26.16h-3V6.53l-11.75,7.31c-0.48,0.3-1.09,0.3-1.57,0.01L6.28,6.5v19.66h-3V3.84c0-0.54,0.29-1.04,0.76-1.31 c0.47-0.27,1.05-0.26,1.51,0.02l13.61,8.25l13.26-8.24c0.46-0.29,1.05-0.3,1.52-0.04c0.48,0.26,0.77,0.77,0.77,1.31V26.16z" />
              </svg>
            </div>
            <div className="social__content">
              <h3>Email</h3>
              <span>suryatheja148@gmail.com</span>
            </div>
          </div>

          <div className="social" style={{ '--c': '#163F8F', '--i': 1 }}>
            <div className="social__icon">
              <svg viewBox="0 0 320 512"><path fill="white" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </div>
            <div className="social__content">
              <h3>Facebook</h3>
              <span>Surya Theja</span>
            </div>
          </div>

          <div className="social" style={{ '--c': '#0CB0FF', '--i': 2 }}>
            <div className="social__icon">
              <svg viewBox="0 0 512 512"><path fill="white" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </div>
            <div className="social__content">
              <h3>Twitter</h3>
              <span>@SuryaTheja</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
