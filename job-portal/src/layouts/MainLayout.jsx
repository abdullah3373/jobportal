// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        <Outlet /> {/* Child routes will render here */}
      </main>
      <footer className={styles.footer}>
        <p>© 2025 JobPortal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;