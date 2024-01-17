import ntlogo from '../assets/website.nt.logo.png';

//header page
export default function Header({ onSignInClick }) {
    return (
      <header className="header">
        <img src={ntlogo} alt="" className="logo" />
          {/* <button className="signInButton" onClick={onSignInClick}>
            Sign In
    </button> */}
      </header>
    );
  }