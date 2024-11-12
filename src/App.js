
import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('Status');
  const [sortBy, setSortBy] = useState('Priority');
  const [loading, setLoading] = useState(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, []);

  // Map userId to user name for display purposes
  const getUserById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : 'Unknown';
  };

  // Pass the tickets and user mapping to KanbanBoard
  return (
    <div className="app">
      <div className="controls">
        <label>
          Group by:
          <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
            <option value="Status">Status</option>
            <option value="User">User</option>
            <option value="Priority">Priority</option>
          </select>
        </label>

        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Priority">Priority</option>
            <option value="Title">Title</option>
          </select>
        </label>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} getUserById={getUserById} />
      )}
    </div>
  );
};

export default App;
