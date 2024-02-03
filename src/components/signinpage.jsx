import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignInPage({ onBackClick, handleSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [signedInUsername, setSignedInUsername] = useState(null);
  const navigate = useNavigate();

  const handleClickSignIn = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const response = await axios.post('/api/user/signIn', user, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        setError('');
        setSuccessMessage('Sign in successful!');
        setSignedInUsername(username);
        handleSignIn(response.data);
        navigate('/user'); // Use navigate instead of history.push
      } else {
        setError(response.data.error || 'Sign-in failed');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      setError('Error during sign-in. Please try again.');
    }
  };

  return (
    <div className="home-section">
      <div className="left-column">
        <div className="left-box">
          <div className="signup-box">
            <h1>Welcome Back</h1>
            <label htmlFor="username">USERNAME</label>
            <input
              className="input-style"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              className="input-style"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="signInSubmitButton" onClick={handleClickSignIn}>
              Sign In
            </button>
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
            {signedInUsername && (
              <div className="signed-in-username">Signed in as: {signedInUsername}</div>
            )}
          </div>
        </div>
        <button onClick={onBackClick}>Back to Home</button>
      </div>
    </div>
  );
}
