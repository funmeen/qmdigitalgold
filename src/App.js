import React, { useState } from 'react';
import ntlogo from './assets/website.nt.logo.png';
import qmmobileapps from './assets/mobileapps.png';
import goldbar from './assets/goldbar.jpg';
import './App.css';

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <img src={ntlogo} alt="" className="logo" />
      <button className="signInButton" onClick={onSignInClick}>
        Sign In
      </button>
    </header>
  );
}

function HomePage({ onSignUpClick }) {
  return (
    <div className="home-section">
      <div className="left-column">
        <div className="left-box">
          <div className="home-tiles-1">
            <div className="content-container">
              <h1>BELI, SIMPAN DAN GANDAKAN EMAS</h1>
              <p>
                Dapatkan panduan daripada pasukan kami yang berpengalaman. Tekan
                butang sekarang untuk menghubungi kami dan mulakan perjalanan ke
                arah kebebasan kewangan bersama Quantum Metal.
              </p>
              <button className="signUpButton" onClick={onSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="home-tiles-2">
          <img src={goldbar} alt="" className="img-tiles-2" />
        </div>
      </div>
      <div className="right-column">
        <div className="home-tiles-3">
          <img src={qmmobileapps} alt="" className="qm-mobile" />
        </div>
      </div>
    </div>
  );
}

function SignInPage({ onBackClick }) {
  return (
    <div className="home-section">
      <h1>Sign In Page</h1>
      <p>Hello</p>
      <button onClick={onBackClick}>Back to Home</button>
    </div>
  );
}

function SignUpPage({ onBackClick, onSignUpSubmitClick }) {
  return (
    <div className="home-section">
      <div className="left-column">
        <div className="left-box">
          <div className="signup-box">
            <h1>Sign Up</h1>
            <p>FULLNAME</p>
              <input className="input-style" id="username" type="text" placeholder="Enter your full name"></input>
            <p>PASSWORD</p>
              <input className="input-style" id="password" type="password" placeholder="******************"></input>
            <p>EMAIL</p>
              <input className="input-style" id="email" type="text" placeholder="Your email address"></input>
              <button className="signUpSubmitButton" onClick={onSignUpSubmitClick}>
                  Sign Up
                </button>
          </div>
          </div>
      <button onClick={onBackClick}>Back to Home</button>
      </div>
      <div className="right-column">

      </div>
    </div>
  );
}

function Body({ showSignInPage, handleBackClick, showSignUpPage, onSignUpClick }) {
  return (
    <div>
      {   showSignInPage ? (
        <SignInPage onBackClick={handleBackClick} />
      ) : showSignUpPage ? (
        <SignUpPage onBackClick={handleBackClick} />
      ) : (
        <HomePage onSignUpClick={onSignUpClick} />
      )}
    </div>
  );
}

function App() {
  const [showSignInPage, setShowSignInPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);

  const handleSignInClick = () => {
    setShowSignInPage(true);
  };

  const handleBackClick = () => {
    setShowSignInPage(false);
    setShowSignUpPage(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpPage(true);
  };

  return (
    <div>
      <Header onSignInClick={handleSignInClick} />
      <Body
        onSignUpClick={handleSignUpClick}
        showSignInPage={showSignInPage}
        
        showSignUpPage={showSignUpPage}
        handleBackClick={handleBackClick}
      />
    </div>
  );
}

export default App;
