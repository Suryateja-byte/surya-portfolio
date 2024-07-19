// NavBar.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useLoading } from '../contexts/LoadingContext';
import gsap from 'gsap';

const NavBar = ({ onNavigate }) => {
  const navigate = useNavigate();
  const { loading, setLoading, setSectionName } = useLoading();

  useEffect(() => {
    const openTrigger = document.querySelector('.menu-trigger');
    const closeTrigger = document.querySelector('.close-trigger');
    const logo = document.querySelector('.logo');
    const menuContainer = document.querySelector('.menu-container');
    const menuTop = document.querySelector('.menu-bg.top');
    const menuMiddle = document.querySelector('.menu-bg.middle');
    const menuBottom = document.querySelector('.menu-bg.bottom');

    const tlOpen = gsap.timeline({ paused: true });
    const tlClose = gsap.timeline({ paused: true });

    tlOpen.add("preOpen")
      .to(logo, {
        scale: 0.8,
        opacity: 0,
        ease: "power2.out"
      }, "preOpen")
      .to(openTrigger.querySelector('.top'), {
        x: "+80px", y: "-80px", delay: 0.1, ease: "power4.in", onComplete: function() {
          closeTrigger.style.zIndex = '25';
        }
      }, "preOpen")
      .to(openTrigger.querySelector('.middle'), {
        x: "+80px", y: "-80px", ease: "power4.in",
        onComplete: function() {
          openTrigger.style.visibility = 'hidden';
        }
      }, "preOpen")
      .to(openTrigger.querySelector('.bottom'), {
        x: "+80px", y: "-80px", delay: 0.2, ease: "power4.in"
      }, "preOpen")
      .add("open", "-=0.4")
      .to(menuTop, {
        y: "13%",
        ease: "power4.inOut"
      }, "open")
      .to(menuMiddle, {
        scaleY: 1,
        ease: "power4.inOut"
      }, "open")
      .to(menuBottom, {
        y: "-114%",
        ease: "power4.inOut"
      }, "open")
      .fromTo(menuContainer, {
        y: 30, opacity: 0, visibility: 'hidden'
      }, {
        y: 0, opacity: 1, visibility: 'visible', ease: "power4.out"
      }, "-=0.2");

    tlClose.add("close")
      .to(menuTop, {
        backgroundColor: "#6295ca", ease: "power4.inOut", onComplete: function() {
          logo.style.zIndex = '26';
          closeTrigger.style.zIndex = '5';
          openTrigger.style.visibility = 'visible';
        }
      }, "close")
      .to(menuMiddle, {
        backgroundColor: "#6295ca", ease: "power4.inOut"
      }, "close")
      .to(menuBottom, {
        backgroundColor: "#6295ca", ease: "power4.inOut"
      }, "close")
      .to(menuContainer, {
        y: 20, opacity: 0, ease: "power4.out", onComplete: function() {
          menuContainer.style.visibility = 'hidden';
        }
      }, "close")
      .to(logo, {
        scale: 1, opacity: 1, ease: "power4.inOut"
      }, "close", "+=0.2")
      .to(menuTop, {
        y: "-113%",
        ease: "power4.inOut"
      }, "close", "+=0.2")
      .to(menuMiddle, {
        scaleY: 0,
        ease: "power4.inOut"
      }, "close", "+=0.2")
      .to(menuBottom, {
        y: "23%",
        ease: "power4.inOut",
        onComplete: function() {
          menuTop.style.backgroundColor = '#ffffff';
          menuMiddle.style.backgroundColor = '#ffffff';
          menuBottom.style.backgroundColor = '#ffffff';
        }
      }, "close", "+=0.2");

    openTrigger.addEventListener('click', () => {
      if (tlOpen.progress() < 1) {
        tlOpen.play();
      } else {
        tlOpen.restart();
      }
    });

    closeTrigger.addEventListener('click', () => {
      if (tlClose.progress() < 1) {
        tlClose.play();
      } else {
        tlClose.restart();
      }
    });

    return () => {
      openTrigger.removeEventListener('click', () => {});
      closeTrigger.removeEventListener('click', () => {});
    };
  }, []);

  const handleNavigation = (path) => {
    const section = path.replace('/', '') || 'Home';
    setSectionName(section.charAt(0).toUpperCase() + section.slice(1));
    if (!loading) {
      setLoading(true);
    }
    onNavigate(section);
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__content">
          <ul className="nav__list menu">
            <li className="nav__list-item">
              <button onClick={() => handleNavigation('/')}>HOME</button>
            </li>
            <li className="nav__list-item">
              <button onClick={() => handleNavigation('/about')}>ABOUT</button>
            </li>
            <li className="nav__list-item">
              <button onClick={() => handleNavigation('/skills')}>SKILLS</button>
            </li>
            <li className="nav__list-item">
              <button onClick={() => handleNavigation('/projects')}>PROJECTS</button>
            </li>
            <li className="nav__list-item">
              <button onClick={() => handleNavigation('/contact')}>CONTACT</button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-container">
        <span className="menu-trigger">
          <i className="menu-trigger-bar top"></i>
          <i className="menu-trigger-bar middle"></i>
          <i className="menu-trigger-bar bottom"></i>
        </span>
        <span className="close-trigger">
          <i className="close-trigger-bar left"></i>
          <i className="close-trigger-bar right"></i>
        </span>
        <span className="logo">
          <span>
            ⬢
            <i className="logo-title">UI</i>
            <i className="logo-badge">6</i>
          </span>
        </span>
        <div className="inner-container">
          <i className="menu-bg top"></i>
          <i className="menu-bg middle"></i>
          <i className="menu-bg bottom"></i>
          <div className="menu-container">
            <ul className="menu">
              <li><button onClick={() => handleNavigation('/')}>Home</button></li>
              <li><button onClick={() => handleNavigation('/about')}>About</button></li>
              <li><button onClick={() => handleNavigation('/projects')}>Projects</button></li>
              <li><button onClick={() => handleNavigation('/skills')}>Skills</button></li>
              <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
