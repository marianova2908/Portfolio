import React from 'react';

import me from './assets/me.jpg';

import resume from './assets/resume.pdf';

import './About.css';

export default function About() {
  return (
    <>
      <div className="about-me">
        <img src={me} alt="Maria Paula Nova" className="profile-pic"/>
        <h1>Maria Paula Nova</h1>
        <p>
        I'm a Software Engineering student at Centennial College, deeply interested in 
        technology and how it shapes the future, especially in the field of artificial 
        intelligence. I love exploring different areas of software development, from web 
        design to AI projects, and I’m constantly looking for new challenges that help me 
        improve and expand my skills. Whether it’s a class project or something I’m working 
        on for fun, I always enjoy figuring out how things work and how to make them better.
         When I'm not coding, I love spending time reading about new trends in tech or diving
          into personal coding projects that let me experiment with new tools and techniques. 
          I'm particularly excited about AI and its potential to change the world, and I can't
           wait to contribute to meaningful projects in this space.
           </p>
        <a href={resume} className="resume-link" target="_blank" rel="noopener noreferrer">
          Download my Resume (PDF)
        </a>
      </div>
    </>
  );
}