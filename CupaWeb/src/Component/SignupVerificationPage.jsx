import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';
import CupaLogo from '../assets/CupaLogo.png';

const SignupVerificationPage = () => {
  const [file, setFile] = useState(null);
  const [bvn, setBvn] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verification submitted:', { file, bvn });
    navigate('/signup/review');
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-logo">
          <img src={CupaLogo} alt="CupaLogo" className="brand-logo" />
        </div>

        <div className="signup-card">
          <h2 className="signup-title">Sign Up</h2>
          <p className="signup-subtitle">Provide a verified means of identification</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-group">
              <label htmlFor="document" className="signup-label">
                NATIONAL IDENTIFICATION NUMBER
              </label>
              <div className="upload-row">
                <div className="upload-box">
                  <div className="upload-icon">⬆️</div>
                  <div>
                    <p className="upload-title">Upload your document</p>
                    <p className="upload-subtext">PDF format • Max. 5MB</p>
                  </div>
                </div>
                <label htmlFor="document" className="upload-button">
                  Upload
                </label>
              </div>
              <input
                id="document"
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="upload-input"
              />
            </div>

            <div className="signup-group">
              <label htmlFor="bvn" className="signup-label">
                BANK VERIFICATION NUMBER
              </label>
              <input
                id="bvn"
                type="text"
                placeholder="Enter BVN"
                value={bvn}
                onChange={(e) => setBvn(e.target.value)}
                className="signup-input"
                required
              />
            </div>

            <button type="submit" className="signup-button" disabled={!file || !bvn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupVerificationPage;
