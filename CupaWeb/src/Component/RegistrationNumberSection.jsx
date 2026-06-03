import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RegistrationNumberSection.css';

export default function RegistrationNumberSection() {
  const navigate = useNavigate();
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setRegistrationNumber(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!registrationNumber.trim()) {
      setError('Registration number is required');
      return false;
    }

    if (registrationNumber.trim().length < 3) {
      setError('Please enter a valid registration number');
      return false;
    }

    return true;
  };

  const handleContinue = () => {
    if (validateForm()) {
      console.log('Registration Number:', registrationNumber);
      // Navigate to bank details page
      navigate('/bank-details');
    }
  };

  return (
    <div className="registration-number-container">
      <div className="registration-number-card">
        <h2 className="registration-number-title">Registration Number</h2>
        <p className="registration-number-subtitle">
          Input the registration number of the cooperative<br />
          certificate issued by the State Ministry of Commerce<br />
          and Industry.
        </p>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '50%' }}></div>
          </div>
          <span className="progress-text">Step 2 of 4</span>
        </div>

        {/* Form Field */}
        <div className="form-group">
          <label htmlFor="registrationNumber" className="form-label">
            COOPERATIVE REGISTRATION NUMBER
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            placeholder="•••"
            value={registrationNumber}
            onChange={handleChange}
            className={`form-input ${error ? 'input-error' : ''}`}
          />
          {error && (
            <span className="error-message">{error}</span>
          )}
        </div>

        {/* Continue Button */}
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
