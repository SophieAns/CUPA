import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CooperativeDetailsSection.css';

export default function CooperativeDetailsSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cooperativeName: '',
    email: '',
    contactPhone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cooperativeName.trim()) {
      newErrors.cooperativeName = 'Cooperative name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = 'Contact phone is required';
    } else if (!/^\d{10,}$/.test(formData.contactPhone.replace(/\D/g, ''))) {
      newErrors.contactPhone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerify = () => {
    if (validateForm()) {
      console.log('Form data:', formData);
      // Navigate to OTP verification page
      navigate('/otp-verification');
    }
  };

  return (
    <div className="cooperative-details-container">
      <div className="cooperative-details-card">
        <h2 className="cooperative-details-title">Cooperative Details</h2>
        <p className="cooperative-details-subtitle">
          Fill in the basic information about your cooperative.
        </p>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '25%' }}></div>
          </div>
          <span className="progress-text">Step 1 of 4</span>
        </div>

        {/* Form Fields */}
        <form className="cooperative-form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="cooperativeName" className="form-label">
              NAME OF COOPERATIVE
            </label>
            <input
              type="text"
              id="cooperativeName"
              name="cooperativeName"
              placeholder="Enter cooperative name"
              value={formData.cooperativeName}
              onChange={handleChange}
              className={`form-input ${errors.cooperativeName ? 'input-error' : ''}`}
            />
            {errors.cooperativeName && (
              <span className="error-message">{errors.cooperativeName}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              EMAIL
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {/* Phone Field */}
          <div className="form-group">
            <label htmlFor="contactPhone" className="form-label">
              CONTACT PHONE
            </label>
            <div className="input-wrapper">
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                placeholder="Enter contact phone"
                value={formData.contactPhone}
                onChange={handleChange}
                className={`form-input ${errors.contactPhone ? 'input-error' : ''}`}
              />
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            {errors.contactPhone && (
              <span className="error-message">{errors.contactPhone}</span>
            )}
          </div>
        </form>

        {/* Verify Button */}
        <button className="verify-button" onClick={handleVerify}>
          Verify
        </button>
      </div>
    </div>
  );
}
