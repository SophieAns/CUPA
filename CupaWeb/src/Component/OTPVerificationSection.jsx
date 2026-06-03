import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OTPVerificationSection.css';

export default function OTPVerificationSection() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take the last digit
    setOtp(newOtp);

    // Clear error when user starts typing
    if (error) setError('');

    // Auto move to next field
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const pastedNumbers = pastedData.replace(/\D/g, '').slice(0, 6);

    if (pastedNumbers.length === 6) {
      setOtp(pastedNumbers.split(''));
      inputRefs.current[5]?.focus();
    }
  };

  const handleEnter = () => {
    const otpString = otp.join('');

    if (otpString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    console.log('OTP Verified:', otpString);
    // Navigate to registration number page
    navigate('/registration-number');
  };

  const handleResend = () => {
    setIsResending(true);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      setOtp(['', '', '', '', '', '']);
      setError('');
      inputRefs.current[0]?.focus();
      console.log('OTP Resent');
    }, 2000);
  };

  return (
    <div className="otp-verification-container">
      <div className="otp-verification-card">
        <h2 className="otp-verification-title">OTP Verification</h2>
        <p className="otp-verification-subtitle">
          An OTP was sent to the email address you provided,<br />
          enter it below
        </p>

        {/* OTP Input Fields */}
        <div className="otp-input-group">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`otp-input ${error ? 'otp-input-error' : ''}`}
              placeholder=""
              inputMode="numeric"
            />
          ))}
        </div>

        {/* Error Message */}
        {error && <span className="error-message">{error}</span>}

        {/* Enter Button */}
        <button className="enter-button" onClick={handleEnter}>
          Enter
        </button>

        {/* Resend Link */}
        <p className="resend-text">
          Didn't receive the OTP?{' '}
          <button
            className={`resend-link ${isResending ? 'disabled' : ''}`}
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? 'Resending...' : 'Resend'}
          </button>
        </p>
      </div>
    </div>
  );
}
