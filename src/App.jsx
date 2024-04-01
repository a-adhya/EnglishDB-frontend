import React, { useState } from 'react';
import Nav from './components/Nav/Nav.jsx';
import DatabaseInfo from './components/DBInfo/DBInfo.jsx';
import QueryInput from './components/QueryInput/QueryInput.jsx';
import ResultsDisplay from './components/ResultsDisplay/ResultsDisplay.jsx';
import QueryDisplay from './components/QueryDisplay/QueryDisplay.jsx';
import './styles.css';

function App() {
  const [selectedDatabase, setSelectedDatabase] = useState(null);
  const [queryResult, setQueryResult] = useState(null);
  const [sqlQuery, setSqlQuery] = useState(null);
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

    
  // Handler function to update selected database and clear query results
  const handleDatabaseSelect = (database) => {
    setSelectedDatabase(database);
    setSqlQuery(null);
    setQueryResult(null); // Reset query results
  };


  const handleQuerySubmit = (query) => {
    //TODO: Test and ensure that this is giving the right results 
    // Prevent submission if no database is selected or query is empty
     if (!selectedDatabase || !query.trim()) {
      alert("Please select a database and enter a query.");
      return;
    }

    setSqlQuery(null);
    setQueryResult(null);
    //collect user query as form data to send to endpoint
    const formData = {"database": selectedDatabase, "query": query}

    // API endpoint
    const endpoint = `https://sy8uqdk1sf.execute-api.us-east-2.amazonaws.com/test/app`;
    
    //fetch from endpoint
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
      credentials: "same-origin",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();

    })
    .then(data => {
      //Save results, including query result and sql query
      setQueryResult(data.query_result);
      setSqlQuery(data.sql_query);
    })
    .catch(error => {
      console.error('Failed to fetch data:', error);
      alert('There was an issue fetching the query results.');
    });
  };

  return (
    <div className="app">
        <Nav 
        onSelectDatabase={handleDatabaseSelect} 
        />
      <main className='main-content'>
        <div className='card'>
        <DatabaseInfo database={selectedDatabase} />
        <QueryInput onQuerySubmit={handleQuerySubmit} database={selectedDatabase} />
        </div>
        {queryResult &&
        <div className='cont'>
        <div className='results-card'>
        <ResultsDisplay data={queryResult} query={sqlQuery} />
        </div>
        
        <div className="results-card">
          <QueryDisplay query={sqlQuery} />
        </div>
        </div>
        }
      </main>
    </div>
  );
}

export default App;
