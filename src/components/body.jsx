// Body.js
import React from 'react';
import HomePage from './homepage';
import SignInPage from './signinpage';
import SignUpPage from './signuppage';
import GSAPage from './gsapage';
import GCAPage from './gcapage';
import GAEPage from './gaepage';
import UserPage from './UserPage';

export default function Body({
  showSignInPage,
  showSignUpPage,
  showGSAPage,
  showGCAPage,
  showGAEPage,
  onSignUpClick,
  gotoGSAPage,
  gotoGCAPage,
  gotoGAEPage,
  handleBackClick,
  handleSignIn,
  showUserPage,
}) {
  return (
    <div>
      {showSignInPage ? (
        <SignInPage onBackClick={handleBackClick} handleSignIn={handleSignIn} />
      ) : showSignUpPage ? (
        <SignUpPage onBackClick={handleBackClick} />
      ) : showGSAPage ? (
        <GSAPage onBackClick={handleBackClick} />
      ) : showGCAPage ? (
        <GCAPage onBackClick={handleBackClick} />
      ) : showGAEPage ? (
        <GAEPage onBackClick={handleBackClick} />
      ) : showUserPage ? (
        <UserPage
          onBackClick={handleBackClick}
          showUserPage={showUserPage} 
        />
      ) : (
        <HomePage
          onSignUpClick={onSignUpClick}
          gotoGSAPage={gotoGSAPage}
          gotoGCAPage={gotoGCAPage}
          gotoGAEPage={gotoGAEPage}
        />
      )}
    </div>
  );
}
