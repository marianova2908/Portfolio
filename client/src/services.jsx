import programmingImage from './assets/programming.jpg';
import web from './assets/web.jpg';
import app from './assets/app.jpg';
import dataBase from './assets/database.jpg';
import test from './assets/test.jpg';



import React from 'react';
import './services.css';

export default function services() {
  return (
    <div className="services-page">
      <h1>My Services</h1>

      <div className="service">
        <img src={programmingImage} alt="General Programming" className="service-img" />
        <h2>General Programming</h2>
        <p>
          I offer programming services in languages like Python, Java, and C++. Whether it’s writing scripts or solving algorithmic challenges, I can assist with various tasks.
        </p>
      </div>

      <div className="service">
        <img src={web} alt="Web Development" className="service-img" />
        <h2>Web Development</h2>
        <p>
          I build responsive and interactive websites using HTML, CSS, JavaScript, and React. I can help create modern and user-friendly web experiences.
        </p>
      </div>

      <div className="service">
        <img src={app} alt="Mobile App Development" className="service-img" />
        <h2>Mobile App Development</h2>
        <p>
          I develop cross-platform mobile apps using Flutter, creating intuitive designs and ensuring smooth functionality across devices.
        </p>
      </div>

      <div className="service">
        <img src={dataBase} alt="Database Management" className="service-img" />
        <h2>Database Management</h2>
        <p>
          I can design and manage databases using SQL and NoSQL. Whether it's setting up a new database or optimizing queries, I can help you handle your data efficiently.
        </p>
      </div>

      <div className="service">
        <img src={test} alt="Debugging and Testing" className="service-img" />
        <h2>Debugging and Testing</h2>
        <p>
          I offer debugging and software testing services to ensure your code runs smoothly and is free of errors. I use various debugging tools and testing frameworks to find and fix issues.
        </p>
      </div>

    </div>
  );
}