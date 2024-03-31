import React, {useState} from 'react';
import '../../styles.css'

function Nav({ onSelectDatabase }) {
  // Placeholder databases. Replace or extend as necessary.
  const databases = ['Media DB', 'Car Sales DB', 'Products DB'];

  return (
    <nav className="nav">
      <div onClick={() => onSelectDatabase(null)} className="nav-item">Home</div>
      {databases.map((db, index) => (
        <div className="nav-item" key={index} onClick={() => onSelectDatabase(db)}>
          <p className="nav-text"> {db} </p>
        </div>
      ))}
    </nav>
  );
}

export default Nav;
