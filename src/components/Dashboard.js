import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ onLogout }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };

    if (editingIndex !== null) {
      const updated = [...users];
      updated[editingIndex] = newUser;
      setUsers(updated);
      setEditingIndex(null);
    } else {
      setUsers([...users, newUser]);
    }

    setName('NAME');
    setEmail('EMAIL');
  };

  const handleEdit = (index) => {
    setName(users[index].name);
    setEmail(users[index].email);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = users.filter((_, i) => i !== index);
    setUsers(filtered);
  };

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-header">
        <h2>User Dashboard</h2>
        <button onClick={onLogout}>Log Out</button>
      </div>

      <form onSubmit={handleSubmit} className="User-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
      </form>

      <div className="user-list">
        {users.length === 0 ? (
          <p>No users added yet.</p>
        ) : (
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <span>{user.name} - {user.email}</span>
                <div>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
