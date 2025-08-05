// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Find Your Next Career Move</h1>
        <p className={styles.subtitle}>
          Discover thousands of job opportunities from top companies and apply with ease.
        </p>
        <Link to="/jobs" className={styles.ctaButton}>
          Start Exploring Jobs
        </Link>
      </div>
    </div>
  );
};

export default HomePage;