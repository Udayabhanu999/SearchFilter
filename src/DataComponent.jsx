// DataComponent.js

import React, { useState, useEffect } from 'react';

function DataComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend server
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from MongoDB</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <strong>Name:</strong> {item.name}, <strong>Email:</strong> {item.email}, <strong>Address:</strong> {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;
