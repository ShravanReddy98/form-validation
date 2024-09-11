import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, error, role } = useSelector(
    (state) => state.user
  );

  const initialUser = {
    name: "",
    password: "",
    role: "user",
  };

  const [userDetails, setUserDetails] = useState(initialUser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, password } = userDetails;
    if (name !== "" && password !== "") {
      dispatch(actions.loginRequest(userDetails));
      setUserDetails(initialUser);
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (role === "user") {
        navigate("/");
      } else {
        navigate("/admin");
      }
    }
  }, [isAuthenticated, navigate, role]);

  return (
    <div>
      <h2>Login</h2>
      <div>
        <div>
          <div>
            Name :
            <input
              type="text"
              value={userDetails.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div>
            Password :
            <input
              type="password"
              value={userDetails.password}
              onChange={handleChange}
              name="password"
            />
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          {role === "admin" ? (
            <button
              onClick={() => {
                dispatch(actions.updateRole("user"));
                setUserDetails((prev) => ({ ...prev, role: "user" }));
                navigate("/login");
              }}
            >
              User
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(actions.updateRole("admin"));
                setUserDetails((prev) => ({ ...prev, role: "admin" }));
                navigate("/admin/login");
              }}
            >
              Admin
            </button>
          )}
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
