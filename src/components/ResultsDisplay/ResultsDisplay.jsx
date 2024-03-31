import React from 'react';
import '../../styles.css'

function ResultsDisplay({data, query}) {
  if (!data.length) return <div>No results to display.</div>;

  else if (data==="InfoError") return <div>{query}</div>;

  const headers = Object.keys(data[0]);

  return (
    <div>
      <h2>Query Results</h2>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, index) => (
                <td key={index}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsDisplay;
