import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import './filtersStyles.css';

const Filters = ({ onFilterChange, jobs }) => {
    // State to hold initial filter options and current filter options
    const [initialFilterOptions, setInitialFilterOptions] = useState({
        minExperience: [],
        companyName: [],
        location: [],
        remoteOnsite: [],
        role: [],
        minBasePay: [],
    });
    const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

    // useEffect to update filter options when jobs data changes
    useEffect(() => {
        if (jobs && jobs.length > 0) {
            // Function to get unique values for a given key from jobs data
            const uniqueValues = (key) => [...new Set(jobs.map(job => job[key]))];
            // Define new filter options based on unique values from jobs data
            const newFilterOptions = {
                minExperience: uniqueValues('minExp'),
                companyName: uniqueValues('companyName'),
                location: uniqueValues('location'),
                remoteOnsite: ['Remote', 'On-site'], // Assuming 'remote' means 'Remote' and 'onsite' means 'On-site'
                role: uniqueValues('jobRole'),
                minBasePay: uniqueValues('minJdSalary'),
            };
            // Update initial and current filter options
            setInitialFilterOptions(newFilterOptions);
            setFilterOptions(newFilterOptions);
        }
    }, [jobs]);

    // Function to handle filter changes
    const handleFilterChange = (filterName, value) => {
        // Update remoteOnsite options based on location selection
        if (filterName === 'location') {
            const remoteOnsiteOptions = value && value.toLowerCase() === 'remote' ? ['Remote'] : ['On-site'];
            setFilterOptions(prevOptions => ({
                ...prevOptions,
                remoteOnsite: remoteOnsiteOptions,
            }));
        }
        // Update parent component with new filter values
        onFilterChange(prevFilters => ({
            ...prevFilters,
            [filterName]: value,
        }));
    };

    return (
        <div className="filterContainer">

            {/* Filter for minimum experience */}
            <FormControl fullWidth className="filter">
                <InputLabel id="min-experience-label">Min Experience</InputLabel>
                <Select
                    labelId="min-experience-label"
                    id="min-experience"
                    label="Min Experience"
                    onChange={(e) => handleFilterChange('minExperience', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {/* Map over minExperience options */}
                    {filterOptions.minExperience.map(option => (
                        // Exclude the 'null' option from rendering
                        option !== null && (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )
                    ))}
                </Select>
            </FormControl>

            {/* Filter for company name */}
            <FormControl fullWidth className="filter">
                <InputLabel id="company-name-label">Company Name</InputLabel>
                <Select
                    labelId="company-name-label"
                    id="company-name"
                    label="Company Name"
                    onChange={(e) => handleFilterChange('companyName', e.target.value || null)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {/* Map over companyName options */}
                    {filterOptions.companyName.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for location */}
            <FormControl fullWidth className="filter">
                <InputLabel id="location-label">Location</InputLabel>
                <Select
                    labelId="location-label"
                    id="location"
                    label="Location"
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {/* Map over location options */}
                    {filterOptions.location.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for remote/onsite */}
            <FormControl fullWidth className="filter">
                <InputLabel id="remote-label">Remote/On-site</InputLabel>
                <Select
                    labelId="remote-label"
                    id="remote"
                    label="Remote/On-site"
                    onChange={(e) => handleFilterChange('remoteOnsite', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {/* Map over remoteOnsite options */}
                    {filterOptions.remoteOnsite.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for job role */}
            <FormControl fullWidth className="filter">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                    labelId="role-label"
                    id="role"
                    label="Role"
                    onChange={(e) => handleFilterChange('role', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {/* Map over role options */}
                    {filterOptions.role.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Filter for minimum base pay */}
            <FormControl fullWidth className="filter">
                <InputLabel id="min-base-pay-label">Min Base Pay</InputLabel>
                <Select
                    labelId="min-base-pay-label"
                    id="min-base-pay"
                    label="Min Base Pay"
                    onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
                >
                    <MenuItem value="">
                        None
                    </MenuItem>
                    {/* Map over minBasePay options */}
                    {filterOptions.minBasePay.map(option => (
                        option !== null && <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
};

export default Filters;
