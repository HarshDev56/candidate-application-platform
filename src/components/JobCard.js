import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import './jobCardStyles.css'; // Import the CSS file

const JobCard = ({ job }) => {
    const [showMore, setShowMore] = useState(false);

    const handleApply = () => {
        // Redirect user to the job link
        window.location.href = job.jdLink;
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };



    return (
        <div className="cardWrapper">
            <Card elevation={3} className="cardContainer">
                <CardContent>
                    <div className='cardHeader'>
                        <img src={job.logoUrl} alt="Company Logo" className="logo" />
                        <div >
                            <div>{job.companyName}</div>
                            <div>{job.jobRole}</div>
                            <div>{job.location}</div>
                        </div>
                    </div>
                    <div>
                        <div>Estimated Salary: {job.minJdSalary && job.maxJdSalary ? `$${job.minJdSalary}K-$${job.maxJdSalary}K✅` : job.minJdSalary ? `$${job.minJdSalary}K✅` : job.maxJdSalary ? `$${job.maxJdSalary}K✅` : 'Salary not provided'} </div>
                    </div>

                    {showMore ? (
                        <div className="description">
                            <h3>About Company</h3>
                            <p>{job.jobDetailsFromCompany}</p>
                            <Button onClick={toggleShowMore} color="primary">Read Less</Button>
                        </div>
                    ) : (
                        <div className="description">
                            <h3>About Company</h3>
                            <p>{job.jobDetailsFromCompany.slice(0, job.jobDetailsFromCompany.length / 2)}...</p>
                            <Button onClick={toggleShowMore} color="primary">View Job</Button>
                        </div>
                    )}
                    <div>
                        <div>Minimum Experience</div>
                        <div>{job.minExp ? `${job.minExp} years` : 'Experience information not available'}</div>
                    </div>
                    <div className="buttonContainer">
                        <Button variant="contained" color="primary" onClick={handleApply} style={{ backgroundColor: 'rgb(85, 239, 196)', color: "black", "font-weight": "bold" }}>
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
