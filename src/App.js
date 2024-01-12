import React, { useState } from 'react';
import './App.css';

import Header from './components/header';
import Body from './components/body';

function App() {
  const [showSignInPage, setShowSignInPage] = useState(false);
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showGSAPage, setShowGSAPage] = useState(false);
  const [showGCAPage, setShowGCAPage] = useState(false);
  const [showGAEPage, setShowGAEPage] = useState(false);

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

  const handleSignUpClick = () => {
    setShowSignUpPage(true);
  };

  const handlegotoGSAPage = () => {
    setShowGSAPage(true);
  };

  const handlegotoGCAPage = () => {
    setShowGCAPage(true);
  };

  const handlegotoGAEPage = () => {
    setShowGAEPage(true);
  };

  return (
    <div>
      <Header onSignInClick={handleSignInClick} />
      <Body
        showSignInPage={showSignInPage}
        showSignUpPage={showSignUpPage}
        showGSAPage={showGSAPage}
        showGCAPage={showGCAPage}
        showGAEPage={showGAEPage}
        onSignUpClick={handleSignUpClick}
        gotoGSAPage={handlegotoGSAPage}
        gotoGCAPage={handlegotoGCAPage}
        gotoGAEPage={handlegotoGAEPage}
        handleBackClick={handleBackClick}
      />
    </div>
  );
}

export default App;
