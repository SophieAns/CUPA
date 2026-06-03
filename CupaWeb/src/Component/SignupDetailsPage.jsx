import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';
import CupaLogo from '../assets/CupaLogo.png';

const SignupDetailsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup details submitted:', { name, email, phone, address });
    navigate('/signup/verification');
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-logo">
          <img src={CupaLogo} alt="CupaLogo" className="brand-logo" />
        </div>

        <div className="signup-card">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-subtitle">Kindly enter the basic information needed.</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-group">
              <label htmlFor="name" className="signup-label">
                NAME
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-group">
              <label htmlFor="email" className="signup-label">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-group">
              <label htmlFor="phone" className="signup-label">
                PHONE NUMBER
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <div className="signup-group">
              <label htmlFor="address" className="signup-label">
                ADDRESS
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <button type="submit" className="signup-button" disabled={!name || !email || !phone || !address}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupDetailsPage;
