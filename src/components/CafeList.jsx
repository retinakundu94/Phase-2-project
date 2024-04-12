import React, { useState, useEffect } from 'react';

function CafeList() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/cafes')
      .then(response => response.json())
      .then(data => setCafes(data))
      .catch(error => console.error('Error fetching cafes:', error));
  }, []);

  return (
    <div>
      <h2>Aesthetic Cafes in NYC</h2>
      <ul>
        {cafes.map(cafe => (
          <li key={cafe.id}>
            <h3>{cafe.name}</h3>
            <p>{cafe.description}</p>
            <p>Location: {cafe.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CafeList;
