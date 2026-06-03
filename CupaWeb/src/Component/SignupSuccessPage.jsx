import { Link } from 'react-router-dom';
import '../styles/SignupPage.css';

const SignupSuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success-wrapper">
        <div className="success-icon">🎉</div>
        <h1 className="success-title">Account</h1>
        <h2 className="success-subtitle">Created Successfully!</h2>
        <p className="success-text">
          At the verification of all information, your login details will be sent to the registered email.
        </p>
        <Link to="/login" target="_blank" rel="noopener noreferrer" className="success-link">
          Proceed to Log in
        </Link>
      </div>
    </div>
  );
};

export default SignupSuccessPage;
