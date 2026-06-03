import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';
import CupaLogo from '../assets/CupaLogo.png';

const SignupPage = () => {
  const [society, setSociety] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (!society) return;
    console.log('Continue signup with society:', society);
    navigate('/signup/details');
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-logo">
          <img src={CupaLogo} alt="CupaLogo" className="brand-logo" />
        </div>

        <div className="signup-card">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-subtitle">
            Select a cooperative/society in order to create an account
          </p>

          <form onSubmit={handleContinue} className="signup-form">
            <label htmlFor="society" className="signup-label">
              COOPERATIVE/SOCIETY
            </label>
            <select
              id="society"
              value={society}
              onChange={(e) => setSociety(e.target.value)}
              className="signup-select"
              required
            >
              <option value="" disabled>
                Select a cooperative/society
              </option>
              <option value="cooperative-a">Cooperative A</option>
              <option value="cooperative-b">Cooperative B</option>
              <option value="cooperative-c">Cooperative C</option>
            </select>

            <button type="submit" className="signup-button" disabled={!society}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
