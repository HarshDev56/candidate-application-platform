import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters';
import JobList from './components/JobList';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <h1>Candidate Application Platform</h1>
      <Filters />
      {jobs && <JobList jobs={jobs} />}
    </Container>
  );
}

export default App;
