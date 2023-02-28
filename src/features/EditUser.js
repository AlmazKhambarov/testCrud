import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../reduxToolkit/user/userSlice";

const EditUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);


  const existingUser = userList.find((user) => user.id == params.id);

  const { id, name, stack, age, country, isChecked } = existingUser;

  const [values, setValues] = useState({
    id,
    name,
    stack,
    age,
    country,
    isChecked,
  });

  const submit = () => {
    dispatch(updateUser(values));
    navigate("/");
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, name: e.target.value }))
        }
        className="form-control"
        value={values.name}
      />
      <input
        type="text"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, stack: e.target.value }))
        }
        className="form-control"
        value={values.stack}
      />
      <input
        type="text"
        onChange={(e) =>
          setValues((prev) => ({ ...prev, age: e.target.value }))
        }
        className="form-control"
        value={values.age}
      />
      <label htmlFor="my-select">Country</label>
      <select
        className="form-select form-select-lg mb-2"
        onChange={(e) => {
          setValues((prev) => ({ ...prev, country: e.target.value }));
        }}
        value={values.country}
      >
        {/* <option value="UZBEKISTAN">COUNTRY</option> */}
        <option value="RUSSIA">Russia</option>
        <option value="USA">USA </option>
        <option value="UZBEKISTAN">UZBEKISTAN</option>
      </select>
      <label>
        on/off
        <input
          type="checkbox"
          onChange={(e) => {
            setValues((prev) => ({ ...prev, isChecked: e.target.checked }));
          }}
          checked={values.isChecked}
        />
      </label>
      <button className="btn btn-success" onClick={submit}>
        Update
      </button>
    </div>
  );
};

export default EditUser;
