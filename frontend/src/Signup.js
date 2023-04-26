import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';
import './SignUp.css'
function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate= useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const err = Validation(values);
    setErrors(err);
    if (err.name === "" && err.email === "" && err.password === "") {
      axios.post('http://localhost:8081/signup', values)
        .then(res => {
            navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-50'>
        <h2>Registrati</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>Nome</label>
            <input type='text' placeholder='Inserici Nome' name="name"
              onChange={handleInput} />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className='mb-3'>
                    <label htmlFor='surname'>Cognome</label>
                    <input type='text' placeholder='Inserici Cognome'/>
                </div>
                <div className='mb-3'>
            <label htmlFor='birthdate'>Data di nascita</label>
            <input type='date' placeholder='Inserici Data di nascita' name="birthdate" onChange={handleInput} className="form-control"/>
            {errors.birthdate && <span>{errors.birthdate}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Inserici Email' name='email'
              onChange={handleInput} />
            {errors.email && <span>{errors.email}</span>}

          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Inserici Password' name="password"
              onChange={handleInput} />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type="submit" className='btn btn-success'>Sign up </button>

          <Link to='/' className='btn btn-defaukt bordere'>Log in</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup;
