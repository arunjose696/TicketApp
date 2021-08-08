import React, { useEffect, useState } from 'react';
import userRequest from '../../hooks/userRequest';
import { useRouter } from 'next/router';
const signUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSuccess = () => {
    router.push('/');
  };

  const { errs, makeRequest, errEmail, errPassword } = userRequest({
    method: 'post',
    url: '/api/users/signin',
    body: { email, password },
    onSuccess,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    console.log('handle submit call');

    makeRequest();
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
          {errEmail && <p className="text-danger">{errEmail}</p>}
        </div>

        <div className="col">
          <label htmlFor="password" className="form-label">
            password.
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errPassword && <p className="text-danger">{errPassword}</p>}
        </div>
        {errs}
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
