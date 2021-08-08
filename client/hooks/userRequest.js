import axios from 'axios';
import { useState } from 'react';

const userRequest = ({ method, url, body, onSuccess }) => {
  const [errs, setErrs] = useState(null);
  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  async function makeRequest() {
    try {
      setErrs(null);
      setErrEmail('');
      setErrPassword('');
      const response = await axios[method](url, body);
      onSuccess();
    } catch (error) {
      console.log(error);
      error.response.data.errors.map((err) => {
        if (err.field == 'email') setErrEmail(err.message);
        if (err.field == 'password') setErrPassword(err.message);
      });
      setErrs(
        <div className="alert alert-danger">
          <h4>Ooops</h4>
          <ul>
            {error.response.data.errors.map((err) => {
              //if (!err.field) {
              return <li key={err.message}>{err.message}</li>;
              //} else {
              //return null;
              //}
            })}
          </ul>
        </div>
      );
    }
  }
  return { errs, makeRequest, errEmail, errPassword };
};
export default userRequest;
