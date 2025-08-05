// src/pages/ApplyPage.jsx
import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { JobContext } from '../context/JobContext';
import styles from './ApplyPage.module.css';

const ApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { jobs, addApplication } = useContext(JobContext);
  const job = jobs.find(j => j.id === id);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      coverLetter: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      coverLetter: Yup.string().min(20, 'Must be at least 20 characters').required('Required'),
    }),
    onSubmit: (values) => {
      setSubmitting(true);
      addApplication({ ...values, jobId: id, jobTitle: job.title });
      setSuccessMessage('Application submitted successfully!');
      setSubmitting(false);
      setTimeout(() => {
        navigate('/jobs');
      }, 2000);
    },
  });

  if (!job) return <div>Job not found</div>;

  // Show back button only if navigation history length > 1
  const canGoBack = window.history.length > 1;

  return (
    <div className={styles.container}>
      {canGoBack && (
        <button className={styles.backButton} onClick={() => navigate(-1)} aria-label="Go back">
          &#8592; Back
        </button>
      )}
      <h2>Apply for {job.title}</h2>
      <p>at {job.company}</p>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.error}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
        </div>
        
        <div className={styles.formGroup}>
          <label htmlFor="coverLetter">Cover Letter</label>
          <textarea id="coverLetter" rows="6" {...formik.getFieldProps('coverLetter')} />
          {formik.touched.coverLetter && formik.errors.coverLetter ? (
            <div className={styles.error}>{formik.errors.coverLetter}</div>
          ) : null}
        </div>

        <button type="submit" className={styles.submitButton} disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
      {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
    </div>
  );
};

export default ApplyPage;
