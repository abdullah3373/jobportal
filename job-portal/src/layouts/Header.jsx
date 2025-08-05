// src/layouts/Header.jsx
import React, { useContext } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './Header.module.css';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Show back button only if navigation history length > 1 and we're not on the home page
  const canGoBack = window.history.length > 1 && location.pathname !== '/';

  return (
    <header className={styles.header}>
      {canGoBack && (
        <button className={styles.backButton} onClick={() => navigate(-1)} aria-label="Go back">
          &#8592; Back
        </button>
      )}
      <Link to="/" className={styles.logo}>JobPortal</Link>
      <nav className={styles.nav}>
        <NavLink to="/jobs" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Jobs</NavLink>
        {user ? (
          <>
            {user.role === 'admin' && (
              <NavLink to="/admin/jobs" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Admin Panel</NavLink>
            )}
            <NavLink to="/logout" className={styles.link}>Logout</NavLink>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Login</NavLink>
        )}
      </nav>
    </header>
  );
};

// Export the component as default
export default Header;
