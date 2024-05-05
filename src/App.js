import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters';
import JobList from './components/JobList';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions';
import { useEffect, useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remoteOnsite: '',
    role: '',
    minBasePay: '',
  });

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <h1>Candidate Application Platform</h1>
      <Filters onFilterChange={setFilters} jobs={jobs} />
      <JobList jobs={jobs} filters={filters} />
    </Container>
  );
}

export default App;
