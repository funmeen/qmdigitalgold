import React, { useState } from 'react';
import ntlogo from './assets/website.nt.logo.png';
import qmmobileapps1 from './assets/mobileapps1.png';
import qmmobileapps2 from './assets/mobileapps2.png';
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
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <img src={qmmobileapps1} alt="" className="qm-mobile-1" />
          <img src={qmmobileapps2} alt="" className="qm-mobile-2" />
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
            <p>PASSWORD</p>
            <p>EMAIL</p>
            <div className="content-container">
              <button className="signUpSubmitButton" onClick={onSignUpSubmitClick}>
                  Sign Up
                </button>
            </div>
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
