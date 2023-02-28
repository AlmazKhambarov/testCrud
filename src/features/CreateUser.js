import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../reduxToolkit/user/userSlice";
import "../styles/Create.css";
const CreateUser = (props) => {
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState('UZBEKISTAN');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(
      addUser({
        id: userList[userList.length - 1].id + 1,
        name,
        stack,
        age,
        country,
        isChecked,
      })
    );
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="forms">
          <label>Name</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label>SurName</label>
          <input
            type="email"
            class="form-control"
            onChange={(e) => setStack(e.target.value)}
          />
          <label>Age</label>
          <input
            type="number"
            min={0}
            max={100}
            class="form-control"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="my-select">Country</label>
          <select
            className="form-select form-select-lg mb-2"
            id="my-select"
            name="my-select"
            value={country}
            onChange={handleSelectChange}
          >
            <option value="UZBEKISTAN">Uzbekistan</option>
            <option value="RUSSIA">Russia</option>
            <option value="USA">USA </option>
          </select>
          <label>
            on/off
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
          <br />
          <button className="btn btn-primary" onClick={handleAdd}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
