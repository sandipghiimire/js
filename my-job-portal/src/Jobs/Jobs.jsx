import React, { useState } from 'react';
import './Jobs.css';

const JobCard = ({ job }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="job-card" onClick={toggleDetails}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <button className="apply-button">Apply Now</button>
            {showDetails && (
                <div className="job-details">
                    <h3>Job Description:</h3>
                    <p>{job.description}</p>
                    <h4>Key Responsibilities:</h4>
                    <ul>
                        {job.responsibilities.map((resp, index) => (
                            <li key={index}>{resp}</li>
                        ))}
                    </ul>
                    <h4>Requirements:</h4>
                    <ul>
                        {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                    <button className="apply-button">Apply Now</button>
                </div>
            )}
        </div>
    );
};

const Jobs = () => {
    const jobs = [
        {
            title: 'Software Engineer',
            company: 'Tech Solutions',
            location: 'New York, NY',
            salary: '$80,000 - $100,000',
            description: 'As a Software Engineer, you will be responsible for developing high-quality software solutions.',
            responsibilities: [
                'Develop and maintain applications.',
                'Collaborate with cross-functional teams.',
            ],
            requirements: [
                "Bachelor's degree in Computer Science.",
                '3+ years of experience in software development.',
            ],
        },
        // Add more job objects as needed
    ];

    return (
        <div className="container">
            <h1>Find Your Dream Job</h1>
            <div className="job-listings">
                {jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Jobs;
