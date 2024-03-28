import React, { useState } from 'react';

function Table() {
  const [tableData, setTableData] = useState([
    { id: 1, name: 'ReactJS', type: 'Framework'},
    { id: 2, name: 'Azure',type: 'Framework' },
    { id: 3, name: 'SharePoint Online',type: 'Technology'},
    { id: 4, name: 'PowerBI',type: 'Technology'},
    { id: 5, name: 'Bootstrap',type: 'Technology'},
    { id: 6, name: 'CSS',type: 'Framework'},
    { id: 7, name: 'HTML',type: 'Technology'},
    { id: 8, name: 'JAVA',type: 'Technology'},
    { id: 9, name: 'HTML',type: 'Technology'},
    { id: 10, name: 'GIT',type: 'Framework'},
    { id: 12, name: 'PostgreSQL',type: 'Technology'},
    { id: 13, name: 'Windows',type: 'Operating system'},
    { id: 14, name: 'Mac',type: 'Operating system'},
    { id: 15, name: 'Linux',type: 'Operating system'},
  ]);

  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = tableData.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={handleFilterChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
