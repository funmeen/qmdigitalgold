import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Body from './components/body';
import UserPage from './components/UserPage';

function App() {
  const [showSignInPage, setShowSignInPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showGSAPage, setShowGSAPage] = useState(false);
  const [showGCAPage, setShowGCAPage] = useState(false);
  const [showGAEPage, setShowGAEPage] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);

  const handleSignInClick = () => {
    setShowSignInPage(true);
  };

  const handleBackClick = () => {
    setShowSignInPage(false);
    setShowSignUpPage(false);
    setShowGSAPage(false);
    setShowGCAPage(false);
    setShowGAEPage(false);
  };

  const handleSignIn = (userData) => {
    console.log('Signed in as:', userData);
    setSignedInUser(userData.username);
  };

  return (
    <Router>
      <div>
        <Header onSignInClick={handleSignInClick} />
        <Routes>
          <Route
            path="/"
            element={
              <Body
                showSignInPage={showSignInPage}
                showSignUpPage={showSignUpPage}
                showGSAPage={showGSAPage}
                showGCAPage={showGCAPage}
                showGAEPage={showGAEPage}
                onSignUpClick={() => setShowSignUpPage(true)}
                gotoGSAPage={() => setShowGSAPage(true)}
                gotoGCAPage={() => setShowGCAPage(true)}
                gotoGAEPage={() => setShowGAEPage(true)}
                handleBackClick={handleBackClick}
                handleSignIn={handleSignIn}
              />
            }
          />
          <Route
            path="/user"
            element={<UserPage signedInUsername={signedInUser} onBackClick={handleBackClick} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
