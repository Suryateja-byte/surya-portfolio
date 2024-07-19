import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <main className="skills-section-container">
      <div className="skills-columns">
        <div className="skills-column">
          <h2>EXPERTISE</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>NPM</li>
            <li>Express</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skills-column">
          <h2>TECHNOLOGIES</h2>
          <ul>
            <li>VS Code</li>
            <li>Terminal</li>
            <li>Android Studio</li>
            <li>Eclipse</li>
            <li>Sublime Text</li>
            <li>Figma</li>
            <li>DaVinci Resolve</li>
            <li>Photoshop</li>
            <li>Lightroom</li>
          </ul>
        </div>
        <div className="skills-column">
          <h2>OTHER</h2>
          <ul>
            <li>Photography</li>
            <li>Portrait Photography</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Skills;
