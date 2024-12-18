import { useState } from "react";
import "./CurdOpration.css";

const AddData = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
   
  });
  const [users, setUsers] = useState([]);

  // for edit user
  const [editode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  //   handle Submit add data
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: inputData.name,
      email: inputData.email,
    };
    setUsers((preUser) => [...preUser, newUser]);
    console.log(users);
    setInputData({
      name: "",
      email: "",
      
    });
  };

  const handleEdit = (user) => {
    setEditMode(true);
    setCurrentUser(user);
    setInputData({ name: user.name, email: user.email });
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
                id=""
                value={inputData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                id=""
                value={inputData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <button type="submit" className="btn btn-success">
                {" "}
                Add
              </button>
            </div>
          </div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <span>
                  {user.name} - {user.email}
                </span>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Del
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
};

export default AddData;
