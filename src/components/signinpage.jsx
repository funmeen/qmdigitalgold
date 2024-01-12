//sign in page
export default function SignInPage({ onBackClick, onLoginClick }) {
    return (
      <div className="home-section">
        <div className="left-column">
          <div className="left-box">
            <div className="signup-box">
              <h1>Welcome Back</h1>
              <p>EMAIL</p>
              <input className="input-style" id="email" type="text" placeholder="Your email address" />
              <p>PASSWORD</p>
              <input className="input-style" id="password" type="password" placeholder="******************" />
              
              <button className="signUpSubmitButton" onClick={onLoginClick}>
                Sign Up
              </button>
            </div>
          </div>
          <button onClick={onBackClick}>Back to Home</button>
        </div>
      </div>
    );
  }