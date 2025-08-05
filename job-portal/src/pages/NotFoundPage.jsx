import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  // Show back button only if navigation history length > 1
  const canGoBack = window.history.length > 1;

  return (
    <div className={styles.container}>
      {canGoBack && (
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Go Back
        </button>
      )}
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button className={styles.homeButton} onClick={() => navigate('/')}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
