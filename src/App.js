import logo from './logo.svg'; // Import logo image
import './App.css'; // Import App-specific CSS styles
import Filters from './components/Filters'; // Import Filters component
import JobList from './components/JobList'; // Import JobList component
import Container from '@mui/material/Container'; // Import Container component from Material-UI
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React Redux
import { fetchJobs } from './actions'; // Import fetchJobs action creator
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React

// Define the App component
function App() {
  // Initialize useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Get jobs state from the Redux store using useSelector hook
  const jobs = useSelector(state => state.jobs);
  // Initialize filters state using useState hook
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remoteOnsite: '',
    role: '',
    minBasePay: '',
  });

  // Fetch jobs data from the server on component mount
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]); // Dependencies array ensures useEffect runs only once on component mount

  // Render the component
  return (
    <Container maxWidth="lg" className="app-container">
      {/* Container for centered content */}
      <div className="centered-content">
        <h2>Candidate Application Platform</h2> {/* Heading */}
      </div>
      {/* Filters component with props */}
      <Filters onFilterChange={setFilters} jobs={jobs} />
      {/* JobList component with props */}
      <JobList jobs={jobs} filters={filters} />
    </Container>
  );
}

export default App; // Export the App component as default
