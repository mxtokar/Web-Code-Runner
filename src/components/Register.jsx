import { useState } from "react";
import axios from '../api/axios';
import { Link } from "react-router-dom";
import '../styles/login.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/local/register',
      JSON.stringify({ username, email, password }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    console.log(JSON.stringify(response?.data));
    setSuccess(true);
    setUsername('');
    setEmail('')
    setPassword('');
  }



  return (
    <>
      {success ? (
        <div className="cont">
          <div className="success">
            <h2>Success!</h2>
            <Link to="/">Sign In</Link>
          </div>
        </div>
      ) : (
        <div className="cont">
          <form onSubmit={handleSubmit}>
            <h2>Create your Account</h2>
            <label>
              <span>Username</span>
              <input
                type="text"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <button className="submit" type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </>
  )
}

export default Register
