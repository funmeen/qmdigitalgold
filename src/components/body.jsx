import HomePage from './homepage';
import SignInPage from './signinpage';
import SignUpPage from './signuppage';
import GSAPage from './gsapage';
import GCAPage from './gcapage';
import GAEPage from './gaepage';

//body where reload when user select pages
export default function Body({ showSignInPage, showSignUpPage, showGSAPage, showGCAPage, showGAEPage, onSignUpClick, gotoGSAPage, gotoGCAPage, gotoGAEPage, handleBackClick }) {
    return (
      <div>
        {showSignInPage ? (
          <SignInPage onBackClick={handleBackClick} />
        ) : showSignUpPage ? (
          <SignUpPage onBackClick={handleBackClick} />
        ) : showGSAPage ? (
          <GSAPage onBackClick={handleBackClick} />
        ) : showGCAPage ? (
          <GCAPage onBackClick={handleBackClick} />
        ) : showGAEPage ? (
          <GAEPage onBackClick={handleBackClick} />
        ) : (
          <HomePage onSignUpClick={onSignUpClick} gotoGSAPage={gotoGSAPage} gotoGCAPage={gotoGCAPage} gotoGAEPage={gotoGAEPage} />
        )}
      </div>
    );
  }