import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Successo") {
            navigate("/home");
          } else {
            alert("Non esiste tale utente");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-4">
          <div className="card p-3">
            <h1 className="card-title text-center mb-3">Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Inserisci Email"
                  name="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  onChange={handleInput}
                />
                {errors.email && (
                  <span className="invalid-feedback">{errors.email}</span>
                )}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Inserisci Password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  onChange={handleInput}
                />
                {errors.password && (
                  <span className="invalid-feedback">{errors.password}</span>
                )}
              </div>
              <button type="submit" className="btn btn-success w-100 mb-3">
                Log in
              </button>
              <Link
                to="/signup"
                className="btn btn-default border w-100 text-center"
              >
                Crea Account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
