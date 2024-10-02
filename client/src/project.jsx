/*
 * File Name: project.jsx
 * Student's Name: Maria Paula Nova
 * StudentID: 301374220
 * Date: October 2, 2024
 */
import weather from './assets/weather.jpg';
import ecommerce from './assets/web.jpg';
import fitness from './assets/app.jpg';





import React from 'react';
import './project.css';



export default function Project() {
    return (
        <div className="projects-page">
          <h1>My Projects</h1>
    
          <div className="project">
            <img src={weather} alt="Project 1" className="project-img" />
            <h2>Interactive Weather Dashboard</h2>
            <p>
              <strong>Role:</strong> Full Stack Developer <br />
              <strong>Outcome:</strong> Developed an interactive weather dashboard. Users can search for a city and 
              receive current weather data, a 5-day forecast, and visual graphs. This project enhanced my skills in
              working with APIs, asynchronous JavaScript, and dynamic data visualization.
            </p>
          </div>
    
          <div className="project">
            <img src={ecommerce} alt="Project 2" className="project-img" />
            <h2>E-Commerce Product Page</h2>
            <p>
              <strong>Role:</strong> Frontend Developer <br />
              <strong>Outcome:</strong> Designed and built a responsive e-commerce product page. The page includes a product 
              carousel, product details, and user reviews. This project strengthened my knowledge in UI/UX design and managing 
              state with marketing.
            </p>
          </div>
    
          <div className="project">
            <img src={fitness} alt="Project 3" className="project-img" />
            <h2>Fitness Tracker Application</h2>
            <p>
              <strong>Role:</strong> Full Stack Developer <br />
              <strong>Outcome:</strong> Developed a fitness tracking application using Python with Flask for the back-end and 
              SQLite for the database. Users can log their workouts, track progress, and view data analytics through interactive
               charts created with Chart.js. This project helped me strengthen my understanding of back-end development, database 
               management, and data visualization using Chart.js
            </p>
          </div>
        </div>
      );
    }