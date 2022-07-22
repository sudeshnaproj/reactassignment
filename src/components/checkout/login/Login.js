import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const checkEmailAndPassword = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (values.email !== "test@gmail.com") {
    errors.email = "Invalid Email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password !== "Test@12345") {
    errors.password = "Invalid passord";
  }
  return errors;
};

const Login = (props) => {
  const { setLoggedIn } = props;
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
    setErrors(checkEmailAndPassword(values));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      navigate("/checkout");
      setLoggedIn(true);
    }
  }, [errors]);

  return (
    <>
      <div className="login__wrapper" aria-labelledby="login-form">
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <h1 className="login__title">Login</h1>
          <div className="login__input">
            <input onChange={handleChange} value={values.email || ""} autoComplete="off" type="email" name="email" placeholder="Email"
              required="" />
          </div>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          <div className="login__input">
            <input type="password" name="password" autoComplete="off" placeholder="Password"  required=""
              value={values.password || ""} onChange={handleChange} />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className="login__button">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
