import React, { useState, useEffect } from 'react';
import { JobContext } from './JobContextValue';
import { initialJobs } from '../data/jobs';

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const localData = localStorage.getItem('jobs');
    return localData ? JSON.parse(localData) : initialJobs;
  });

  const [applications, setApplications] = useState(() => {
    const localData = localStorage.getItem('applications');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(applications));
  }, [applications]);

  const addJob = (job) => setJobs([...jobs, { ...job, id: Date.now().toString() }]);
  const updateJob = (updatedJob) => setJobs(jobs.map(job => job.id === updatedJob.id ? updatedJob : job));
  const deleteJob = (jobId) => setJobs(jobs.filter(job => job.id !== jobId));
  
  const addApplication = (application) => setApplications([...applications, { ...application, id: Date.now().toString() }]);
  const deleteApplication = (appId) => setApplications(applications.filter(app => app.id !== appId));

  return (
    <JobContext.Provider value={{ jobs, addJob, updateJob, deleteJob, applications, addApplication, deleteApplication }}>
      {children}
    </JobContext.Provider>
  );
};
