import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BankDetailsSection.css';

export default function BankDetailsSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    accountNumber: '',
    bankName: ''
  });
  const [errors, setErrors] = useState({});

  const banks = [
    'SpitalLabs Cooperatives Inc.',
    'First Bank of Nigeria',
    'Zenith Bank',
    'Guaranty Trust Bank',
    'Access Bank',
    'United Bank for Africa',
    'Stanbic IBTC Bank',
    'Diamond Bank'
  ];

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

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = 'Account number is required';
    } else if (!/^\d{10,}$/.test(formData.accountNumber.replace(/\D/g, ''))) {
      newErrors.accountNumber = 'Please enter a valid account number';
    }

    if (!formData.bankName.trim()) {
      newErrors.bankName = 'Bank name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      console.log('Bank Details:', formData);
      // Navigate to excos documentation page
      navigate('/excos-documentation');
    }
  };

  return (
    <div className="bank-details-container">
      <div className="bank-details-card">
        <h2 className="bank-details-title">Bank Details</h2>
        <p className="bank-details-subtitle">
          Enter the cooperative or society's account details for<br />
          financial transactions
        </p>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
          <span className="progress-text">Step 3 of 4</span>
        </div>

        {/* Form Fields */}
        <form className="bank-form">
          {/* Account Number Field */}
          <div className="form-group">
            <label htmlFor="accountNumber" className="form-label">
              ACCOUNT NUMBER
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter account number"
              value={formData.accountNumber}
              onChange={handleChange}
              className={`form-input ${errors.accountNumber ? 'input-error' : ''}`}
              inputMode="numeric"
            />
            {errors.accountNumber && (
              <span className="error-message">{errors.accountNumber}</span>
            )}
          </div>

          {/* Bank Name Field */}
          <div className="form-group">
            <label htmlFor="bankName" className="form-label">
              BANK NAME
            </label>
            <select
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className={`form-select ${errors.bankName ? 'input-error' : ''}`}
            >
              <option value="">Choose a bank</option>
              {banks.map((bank) => (
                <option key={bank} value={bank}>
                  {bank}
                </option>
              ))}
            </select>
            {errors.bankName && (
              <span className="error-message">{errors.bankName}</span>
            )}
          </div>

          {/* Selected Bank Display */}
          {formData.bankName && (
            <div className="selected-bank">
              <svg className="check-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span className="bank-name-text">{formData.bankName}</span>
            </div>
          )}
        </form>

        {/* Continue Button */}
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
