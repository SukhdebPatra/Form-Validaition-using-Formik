import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    id: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  const getData = () => {
    axios
      .get(`http://localhost:5000/users`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      const updatedData = {
        name: inputData.name,
        email: inputData.email,
        id: inputData.id,
      };
      axios
        .put(`http://localhost:5000/users/${inputData.id}`, updatedData)
        .then((res) => {
          // Update users state with the updated user
          //   const updatedUsers = users.map((user) =>
          //     user.id === res.data.id ? res.data : user
          //   );
          //   setUsers(updatedUsers);
          console.log(res.data);
          // Reset the form
          setInputData({ name: "", email: "", id: null });
          setIsEditMode(false); // Reset edit mode after saving
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const data = {
        name: inputData.name,
        Useremail: inputData.email,
        id: inputData.id,
      };
      axios
        .post(`http://localhost:5000/users/`, data)
        .then((res) => {
          console.log(res.data);

          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleEditPreFillData = (user) => {
    setInputData({
      name: user.name,
      email: user.Useremail,
      id: user.id, // Set the ID so we know which user to update
    });
    setIsEditMode(true);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="container">
          <h3>{isEditMode ? "Edit User" : "Add New User"}</h3>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="enter your Id"
                className="form-control"
                name="id"
                id=""
                value={inputData.id}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                placeholder="enter your name"
                className="form-control"
                name="name"
                id=""
                value={inputData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <input
                type="text"
                placeholder="enter your Email"
                className="form-control"
                name="email"
                id=""
                onChange={handleChange}
                value={inputData.email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-3">
              <button className="btn btn-primary">
                {" "}
                {isEditMode ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      </form>
      <h3>Users List</h3>
      <ul>
        {users &&
          users.map((user, id) => (
            <li key={user.id}>
              <span>
                {user.id} {user.name} - {user.Useremail}
              </span>
              <button
                className="btn btn-info"
                onClick={() => handleEditPreFillData(user)}
              >
                Edit
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default User;
