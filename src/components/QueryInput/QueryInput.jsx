import React, { useState } from 'react';
import '../../styles.css'

function QueryInput({ onQuerySubmit, database }) {
  const [query, setQuery] = useState('');

  if (!database) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    onQuerySubmit(query);
    setQuery(''); // Clear the input after submitting
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="queryInput">Enter your query:</label>
      <input
        id="queryInput"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default QueryInput;
