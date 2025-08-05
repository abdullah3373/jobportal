// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobDetailPage from './pages/JobDetailPage';
import ApplyPage from './pages/ApplyPage';
import AdminJobsPage from './pages/AdminJobsPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Public Routes */}
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" element={<Logout />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/:id" element={<JobDetailPage />} />

        {/* Customer Protected Route */}
        <Route element={<PrivateRoute />}>
          <Route path="apply/:id" element={<ApplyPage />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<PrivateRoute requiredRole="admin" />}>
          <Route path="admin/jobs" element={<AdminJobsPage />} />
          {/* <Route path="admin/applications" element={<AdminApplicationsPage />} /> */}
        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
