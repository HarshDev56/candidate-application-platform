// src/components/Filters.js
import React from 'react';
import TextField from '@mui/material/TextField';

const Filters = () => {
    return (
        <div>
            <TextField
                id="standard-basic"
                label="Min Experience"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
};

export default Filters;
