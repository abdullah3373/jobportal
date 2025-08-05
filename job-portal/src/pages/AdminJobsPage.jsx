// src/pages/AdminJobsPage.jsx
import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

const AdminJobsPage = () => {
  const { jobs, deleteJob } = useContext(JobContext);
  // In a real app, "Add" and "Edit" would open a modal with a form.
  // We'll keep it simple here.
  return (
    <div>
      <h1>Manage Jobs</h1>
      <button onClick={() => alert('Implement Add Job Modal')}>Add New Job</button>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            {job.title} - {job.company}
            <button onClick={() => alert('Implement Edit Job Modal')}>Edit</button>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminJobsPage;