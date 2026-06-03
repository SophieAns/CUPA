import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';
import CupaLogo from '../assets/CupaLogo.png';

const LoginPage = () => {
  const [userType, setUserType] = useState('individual');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { userType, email, password });
    // Add your login logic here (API call, authentication, etc.)

    // Redirect to dashboard on successful login
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Brand Logo */}
        <div className="logo-section">
          <img src={CupaLogo} alt="CupaLogo" className="brand-logo" />
        </div>

        {/* User Type Selector */}
        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === 'individual' ? 'active' : ''}`}
            onClick={() => setUserType('individual')}
          >
            Individual
          </button>
          <button
            className={`type-btn ${userType === 'organization' ? 'active' : ''}`}
            onClick={() => setUserType('organization')}
          >
            Organisation
          </button>
        </div>

        {/* Login Form */}
        <div className="login-form-container">
          <h2 className="login-title">Log in</h2>
          <p className="login-subtitle">
            Kindly input the login details that was sent to your registered email after verification.
          </p>

          <form onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">EMAIL</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">PASSWORD</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="•••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-button">
              Log in
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="signup-text">
            Want to join a Cooperative/Society? <Link to={userType === 'organization' ? '/cooperative-details' : '/signup'} target={userType === 'organization' ? '' : '_blank'} rel={userType === 'organization' ? '' : 'noopener noreferrer'} className="signup-link">{userType === 'individual' ? 'Click here' : 'Sign Up'}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
