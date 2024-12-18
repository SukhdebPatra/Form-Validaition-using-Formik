import React, { useState } from "react";
import "./CurdOpration.css";

const CurdOpration = () => {
  // State to store the form input values
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });

  // State to store the list of users (for CRUD operations)
  const [users, setUsers] = useState([]);

  // State to handle edit mode (for updating an entry)
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // Handle form submit (create or update)
  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(), // Using timestamp as ID
      name: inputData.name,
      email: inputData.email,
    };

    // Using functional state update to ensure we're working with the latest state
    setUsers((prevUsers) => [...prevUsers, newUser]);

    // Optionally clear the form after submission
    setInputData({
      name: "",
      email: "",
    });
  };

  // Handle editing a user
  const handleEdit = (user) => {
    setEditMode(true);
    setCurrentUser(user);
    setInputData({ name: user.name, email: user.email });
  };

  // Handle deleting a user
  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="Mainconatiner">
      <h1>CRUD Operations in React</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputData.name}
          onChange={handleInputChange}
          required
          className="textField"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={inputData.email}
          onChange={handleInputChange}
          required
          className="textField"
        />
        <button className="submitButton" type="submit">
          {editMode ? "Update" : "Add"}
          {/* Add */}
        </button>
      </form>

      {/* User List */}
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} - {user.email}
            </span>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurdOpration;
