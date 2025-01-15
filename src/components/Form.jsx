import React, { useState } from "react";
import { use } from "react";

const Form = ({ addUserList }) => {
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handlOnSubmit = (e) => {
    e.preventDefault();
    addUserList(user);
  };

  return (
    <div className="w-50 bg-primary p-5 m-auto mt-5 rounded shadow-lg ">
      <form action="" onSubmit={handlOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3 ">
            <select
              id="inputState"
              name="gender"
              className="form-select"
              onChange={handleOnChange}
            >
              <option selected>Choose...</option>
              <option value="M">Male</option>
              <option value="F">FeMale</option>
            </select>
          </div>
          <div className="col-md">
            <input
              required
              onChange={handleOnChange}
              name="input"
              type="text"
              className="form-control"
              placeholder="User Name"
              aria-label="User Name"
            />
          </div>
          <div className="col-md-3 d-grid ">
            <button className="btn btn-danger">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
