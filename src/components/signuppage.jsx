import React, { useState } from 'react';


//sign up page
export default function SignUpPage({ onBackClick }) {
    const SignUp = () => {
      //const { signIn } = useAuth();
      const [username, setUserName] = useState('');
      const [fullname, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const [successMessage, setSuccessMessage] = useState('');
      
      const handleSignUp = async (e) => {
        e.preventDefault()

        const user = {username, fullname, email, password}
        const response = await fetch('/api/user', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()

        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok){
          setUserName('');
          setFullName('');
          setError(null);
          setSuccessMessage('User successfully registered!');
          onBackClick();
        }
      };
  
      return (
        <div className="signup-box">
          <h1>Sign Up</h1>
          <p>USERNAME</p>
          <input
            className="input-style"
            id="userName"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <p>FULLNAME</p>
          <input
            className="input-style"
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
          <p>PASSWORD</p>
          <input
            className="input-style"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>EMAIL</p>
          <input
            className="input-style"
            id="email"
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="signUpSubmitButton" onClick={handleSignUp}>
            Sign Up
          </button>
          {error && <div className="error">{error}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
        </div>
      );
    };
  
    return (
      <div className="home-section">
        <div className="left-column">
          <div className="left-box">
            <SignUp />
          </div>
          <button onClick={onBackClick}>Back to Home</button>
        </div>
      </div>
    );
  }