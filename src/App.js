import logo from './logo.svg';
import './App.css';
import Filters from './components/Filters';
import JobList from './components/JobList';

function App() {
  return (
    <div className="App">
      <h1>Candidate Application Platform</h1>
      <Filters />
      {/* <JobList /> */}
    </div>
  );
}

export default App;
