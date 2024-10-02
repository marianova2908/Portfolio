import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  
  const styles = {
    home: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#eacdc2',
      marginBottom: '1rem',
    },
    paragraph: {
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '1.5rem',
    },
    missionStatement: {
      fontSize: '1.1rem',
      fontStyle: 'italic',
      color: '#444',
      marginTop: '2rem',
    },
    buttonContainer: {
      marginTop: '2rem',
    },
    button: {
      display: 'inline-block',
      padding: '0.75rem 1.5rem',
      margin: '0 0.5rem',
      backgroundColor: '#bda79e',  
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#eacdc2',  
    },
  };

  
  return (
    <div style={styles.home}>
      <h1 style={styles.heading}>Welcome to My Portfolio</h1>
      <p style={styles.paragraph}>
        I am Maria Paula Nova, I am from Colombia and I am currently studiyng Software Engineering.
        Explore my portafolio that contains my work and learn more about my journey.
      </p>

      <p style={styles.missionStatement}>
        <strong>Mission Statement:</strong>  To blend creativity and passion with technology, striving 
        to develop thoughtful solutions that not only solve problems but also inspire positive change,
         embracing the human side of innovation in every step
      </p>

      <div style={styles.buttonContainer}>
        <Link
          to="/about"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          About Me
        </Link>
        <Link
          to="/project"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}