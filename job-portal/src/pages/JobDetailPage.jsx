// src/pages/JobDetailPage.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JobContext } from '../context/JobContext';

const JobDetailPage = () => {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);
  const job = jobs.find(j => j.id === id);

  if (!job) return <div>Job not found</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <Link to={`/apply/${id}`}>Apply Now</Link>
    </div>
  );
};

export default JobDetailPage;