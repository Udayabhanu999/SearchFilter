import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [tableData, setTableData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      // Replace this with actual API call to fetch data
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setTableData(data);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    const keyword = event.target.value.toLowerCase();
    setFilter(keyword);
    const filtered = tableData.filter(item => item.title.toLowerCase().includes(keyword));
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={filter}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
