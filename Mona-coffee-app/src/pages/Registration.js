import { useDispatch } from "react-redux";
import { loggedIn } from "../actions";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
function Registration(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({});
  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(loggedIn(input.name));
    let path = "/profile";
    history.push(path);
  };
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <h2 className="card-heading">
            Get started
            <small>Let us create your account</small>
          </h2>
        </div>
        <form className="card-form" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              name="name"
              className="input-field"
              onChange={onChange}
              required
            />
            <label className="input-label">Full name</label>
          </div>

          <div className="input">
            <input
              type="text"
              name="email"
              className="input-field"
              onChange={onChange}
              required
            />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              className="input-field"
              onChange={onChange}
              required
            />
            <label className="input-label">Password</label>
          </div>
          <div className="action">
            <button type="submit" className="action-button btn">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Registration;
