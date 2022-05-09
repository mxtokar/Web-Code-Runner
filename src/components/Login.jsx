import { useState} from 'react';
import '../styles/login.css'
import axios from '../api/axios';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/auth/local',
      JSON.stringify({ identifier, password }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    setIdentifier('');
    setPassword('');

    if(response?.data.user.confirmed === true){
      window.localStorage.setItem('username', response?.data.user.username)
      window.localStorage.setItem('token', response?.data.jwt)
      window.location.replace('http://localhost:3000/Home')
    }

  }


  return (
    <div className="cont">
      <form onSubmit={handleSubmit}>
        <h2>Welcome</h2>
        <label>
          <span>Username</span>
          <input
            type="text"
            id="username"
            onChange={(e) => setIdentifier(e.target.value)}
            value={identifier}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
        </label>

        <button className="submit" type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Login
