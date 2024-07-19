import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <main className="projects-container">
      <div className="project-card">
        <div className="project-name">
          <h3 className='project-headings'>Project</h3>
          <h2 className="project-title">ATD Project</h2>
        </div>
        <img src={`/pexels-pok-rie-33563-5807811.jpg`} alt="ATD Project" className="project-image" />
        <div className="project-info">
          <div className="project-details">
            <div className="project-year">
              <h3 className='project-headings'>Year</h3>
              <p className='para'>2024</p>
            </div>
            <div className="project-direction">
              <h3 className='project-headings'>Direction</h3>
              <p className='para'>Web Application</p>
            </div>
            <div className="project-roles">
              <h3 className='project-headings'>Role</h3>
              <div className='content-role'>
                <span className="role">UI</span>
                <span className="role">React</span>
                <span className="role">Angular</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-card">
        <div className="project-name">
          <h3 className='project-headings'>Project</h3>
          <h2 className="project-title">CSS Corp Project</h2>
        </div>
        <img src={`/pexels-rsantos1232-3888151.jpg`} alt="CSS Corp Project" className="project-image" />
        <div className="project-info">
          <div className="project-details">
            <div className="project-year">
              <h3 className='project-headings'>Year</h3>
              <p className='para'>2021 - 2022</p>
            </div>
            <div className="project-direction">
              <h3 className='project-headings'>Direction</h3>
              <p className='para'>Web Application</p>
            </div>
            <div className="project-roles">
              <h3 className='project-headings'>Role</h3>
              <div className='content-role'>
                <span className="role">UI</span>
                <span className="role">React</span>
                <span className="role">Angular</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add more project cards as needed */}
    </main>
  );
};

export default Projects;
