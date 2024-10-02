import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout() {
  const styles = {
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      marginRight: '20px',
    },
    hexagonLogo: {
      width: '100px',
      height: '55px',
      backgroundColor: '#eacdc2', 
      position: 'relative',
      display: 'inline-block',
    },
    hexagonBefore: {
      content: '""',
      position: 'absolute',
      width: '0',
      borderLeft: '50px solid transparent',
      borderRight: '50px solid transparent',
      bottom: '100%',
      borderBottom: '27.5px solid #eacdc2',
    },
    hexagonAfter: {
      content: '""',
      position: 'absolute',
      width: '0',
      borderLeft: '50px solid transparent',
      borderRight: '50px solid transparent',
      top: '100%',
      borderTop: '27.5px solid #eacdc2',
    },
    initials: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  };

  return (
    <>
      <h1>My Portfolio</h1>
      <nav style={{ display: 'flex', alignItems: 'center' }}>
       
        <Link to="/" style={styles.logoContainer}>
          <div style={styles.hexagonLogo}>
            <span style={styles.initials}>MN</span>
            
            <div style={styles.hexagonBefore}></div>
            <div style={styles.hexagonAfter}></div>
          </div>
        </Link>

        {/* Navigation Links */}
        <Link to="/" style={{ marginRight: '10px', fontSize: '1.1rem', textDecoration: 'none', color: '#2c3e50' }}>
          Home
        </Link>
        |
        <Link to="/about" style={{ marginRight: '10px', fontSize: '1.1rem', textDecoration: 'none', color: '#2c3e50' }}>
          About
        </Link>
        |
        <Link to="/services" style={{ marginRight: '10px', fontSize: '1.1rem', textDecoration: 'none', color: '#2c3e50' }}>
          Services
        </Link>
        |
        <Link to="/project" style={{ marginRight: '10px', fontSize: '1.1rem', textDecoration: 'none', color: '#2c3e50' }}>
          Project
        </Link>
        |
        <Link to="/contact" style={{ marginRight: '10px', fontSize: '1.1rem', textDecoration: 'none', color: '#2c3e50' }}>
          Contact
        </Link>
      </nav>
      <hr />
    </>
  );
}