import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

//sign up page
export default function SignUpPage({ onBackClick, onSignUpSubmitClick }) {
    const SignUp = () => {
      const { signIn } = useAuth();
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
  
      const handleSignUp = async () => {
        // Implement sign-up logic (e.g., API request)
        // After successful sign-up, call signIn to update user state
        signIn({ fullName, email, password /* other user data */ });
      };
  
      return (
        <div className="signup-box">
          <h1>Sign Up</h1>
          <p>FULLNAME</p>
          <input
            className="input-style"
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={fullName}
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