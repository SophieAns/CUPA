import { Link } from 'react-router-dom';
import '../styles/SignupPage.css';

const AccountReviewPage = () => {
  return (
    <div className="success-container">
      <div className="success-wrapper">
        <div className="success-icon">⏰</div>
        <h1 className="success-title">Account Under Review</h1>
        <h2 className="success-subtitle">Your organisation's details have been submitted successfully.</h2>
        <p className="success-text">
          Our team is currently verifying your information. You&apos;ll receive an email notification once your account has been approved.
        </p>
        <Link to="/signup/success" className="success-link">
          Proceed to check your email
        </Link>
      </div>
    </div>
  );
};

export default AccountReviewPage;
