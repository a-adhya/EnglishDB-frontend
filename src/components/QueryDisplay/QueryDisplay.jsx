import React from 'react';
import '../../styles.css'

function QueryDisplay({query}) {

  return (
   <>
   <h2>Query Used:</h2>
   <p>{query}</p>
   </>
  );
}

export default QueryDisplay;
