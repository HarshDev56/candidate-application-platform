
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
const JobCard = ({ job }) => {

    const handleApply = () => {
        // Redirect user to the job link
        window.location.href = job.jdLink;
    };


    return (
        <Card>
            <CardContent>
                <h5>{job.jobRole}</h5>
                <div variant="subtitle1">{job.companyName}</div>
                <div variant="body1">{job.location}</div>
                <div variant="body2">{job.jobDetailsFromCompany}</div>
                <div variant="body2">Minimum Experience : {`${job.minExp}`}</div>
                <Button variant="contained" color="primary" onClick={handleApply} style={{ backgroundColor: 'rgb(85, 239, 196)' }}>⚡ Easy Apply</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;
