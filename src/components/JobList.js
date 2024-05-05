import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, filters }) => {
    // Apply filters to the list of jobs
    const filteredJobs = jobs.filter(job => {
        // Check each filter criteria and return true only if all criteria match
        return (
            // Filter by minimum experience
            (filters.minExperience ? job.minExp >= filters.minExperience : true) &&
            // Filter by company name
            (filters.companyName ? job.companyName.toLowerCase() === filters.companyName.toLowerCase() : true) &&
            // Filter by location
            (filters.location ? job.location.toLowerCase() === filters.location.toLowerCase() : true) &&
            // Filter by remote/on-site
            (filters.remoteOnsite ? (filters.remoteOnsite === 'Remote' ? job.location.toLowerCase() === 'remote' : job.location.toLowerCase() !== 'remote') : true) &&
            // Filter by role
            (filters.role ? job.jobRole.toLowerCase() === filters.role.toLowerCase() : true) &&
            // Filter by minimum base pay
            (filters.minBasePay ? job.minJdSalary >= filters.minBasePay : true)
        );
    });

    return (
        <div className="cardWrapper">
            {filteredJobs.map(job => (
                <JobCard key={job.jdUid} job={job} />
            ))}
        </div>
    );
};

export default JobList;
