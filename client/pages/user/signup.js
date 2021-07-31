import React, { useState } from 'react';
import axios from 'axios';

const signUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', {
        email,
        password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-50 row g-3">
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default signUpPage;
