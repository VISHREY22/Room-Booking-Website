import axios from 'axios';
import React, { useState } from 'react';
import Success from '../components/Success';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Registrationscreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success,setsuccess] = useState();

  async function register(event) {
    event.preventDefault();

    if (password === confirmPassword) {
      const user = {
        name,
        email,
        password,
        confirmPassword
      }
      try {
        setLoading(true);
        const result = await axios.post('/api/users/register', user).data;
        setLoading(false)
        setsuccess(true)

        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    } else {
      alert("Password does not match");
    }
  }

  return (
    <div className="img">
      {loading && (<Loader/>)}
      {error && (<Error/>)}
      {success && (<Success message="Registration Successful"/>)}
      <div className="container111">
        <h2>Registration Form</h2><br />
        <form onSubmit={register}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Eg. Vishrey' required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='abc@gmail.com' required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Eg. abc@1234' required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password"> Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} placeholder='Write Password Again' required />
          </div>
          <div className="form-group">
            <button type="submit" onClick={register}>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registrationscreen;
