import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; // Import Typography from Material-UI
import './jobCardStyles.css'; // Import the CSS file

const JobCard = ({ job }) => {
    const [showMore, setShowMore] = useState(false);

    // Function to handle the job application
    const handleApply = () => {
        // Redirect user to the job link
        window.location.href = job.jdLink;
    };

    // Function to toggle showing more job details
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="cardWrapper">
            <Card elevation={3} className="cardContainer">
                <CardContent>
                    {/* Header section */}
                    <div className='cardHeader'>
                        <img src={job.logoUrl} alt="Company Logo" className="logo" />
                        <div >
                            {/* Company name in gray */}
                            <Typography variant="body1" style={{ color: '#888', fontWeight: 'bold' }}>{job.companyName}</Typography>
                            <div>{job.jobRole}</div>
                            <div>{job.location}</div>
                        </div>
                    </div>
                    {/* Estimated salary section */}
                    <div>
                        {/* Estimated salary in a different shade */}
                        <Typography variant="body1" style={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'bold' }}>
                            Estimated Salary: {job.minJdSalary && job.maxJdSalary ? `$${job.minJdSalary}K-$${job.maxJdSalary}K✅` : job.minJdSalary ? `$${job.minJdSalary}K✅` : job.maxJdSalary ? `$${job.maxJdSalary}K✅` : 'Salary not provided'}
                        </Typography>
                    </div>

                    {/* Description section */}
                    {showMore ? (
                        <div className="description">
                            <h3>About Company</h3>
                            <p>{job.jobDetailsFromCompany}</p>
                            <div className="viewJobButton">
                                <Button onClick={toggleShowMore} color="primary">Read Less</Button>
                            </div>
                        </div>
                    ) : (
                        <div className="description">
                            <h3>About Company</h3>
                            <p>{job.jobDetailsFromCompany.slice(0, job.jobDetailsFromCompany.length / 2)}...</p>
                            <div className="viewJobButton">
                                <Button onClick={toggleShowMore} color="primary">View Job</Button>
                            </div>
                        </div>
                    )}

                    {/* Minimum experience section */}
                    <div>
                        {/* Minimum Experience label in gray */}
                        <Typography variant="body1" style={{ color: '#888', fontWeight: 'bold' }}>Minimum Experience</Typography>
                        <Typography variant="body1">{job.minExp ? `${job.minExp} years` : 'Experience information not available'}</Typography>
                    </div>

                    {/* Button container section */}
                    <div className="buttonContainer">
                        <Button variant="contained" color="primary" onClick={handleApply} style={{ backgroundColor: 'rgb(85, 239, 196)', color: "black", "fontWeight": "bold" }}>
                            ⚡ Easy Apply
                        </Button>
                        <Button variant="contained" color="secondary" style={{ backgroundColor: 'rgba(64,37, 239, 1)' }} >
                            Unlock Referral Asks
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default JobCard;
