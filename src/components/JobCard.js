
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
const JobCard = ({ job }) => {
    return (
        <Card>
            <CardContent>
                <h5>{job.title}</h5>
                <div variant="subtitle1">{job.company}</div>
                <div variant="body1">{job.location}</div>
                <div variant="body2">{job.description}</div>
                <div variant="body2">Experience Required: {job.experience}</div>
                <Button variant="contained" color="primary">Apply</Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;
