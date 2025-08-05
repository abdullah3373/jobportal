// src/pages/JobsPage.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import styles from './JobsPage.module.css';

const JobsPage = () => {
  const { jobs } = useContext(JobContext);

  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.map(job => (
        <div key={job.id} style={{ border: '1px solid #0d0b0b', margin: '10px', padding: '10px' }}>
          <h2 className={styles.jobTitle}>{job.title}</h2>
          <p>{job.company} - {job.location}</p>
          <Link to={`/jobs/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobsPage;

