import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';

function Loginscreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    async function Login(event) {
        event.preventDefault();

        const user = {
            email,
            password
        };
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', user);
            const data = response.data;
            console.log(data);
            setLoading(false);
            localStorage.setItem('currentUser', JSON.stringify(data));
            window.location.href='/home';
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
        }
    }
    return (
        <div className="img">
            {loading && (<Loader/>)}
            {error && (<Error message="Invalid Credentials"/>)}
            <div className="container111">
                <img src="" alt="" />
                <h2>LogIn Form</h2><br />
                <form onSubmit={Login}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='abc@gmail.com' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Eg. abc@1234' required />
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginscreen;
