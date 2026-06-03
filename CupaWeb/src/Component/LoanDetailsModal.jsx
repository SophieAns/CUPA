import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoanDetailsModal.css';

const LoanDetailsModal = ({ isOpen, onClose, onNext }) => {
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
  const [errors, setErrors] = useState({});

  const MIN_LOAN = 1000;
  const MAX_LOAN = 50000;
  const MAX_PURPOSE_LENGTH = 250;

  const loanTypes = [
    { value: 'personal', label: 'Personal Loan' },
    { value: 'business', label: 'Business Loan' },
    { value: 'education', label: 'Education Loan' },
    { value: 'emergency', label: 'Emergency Loan' },
    { value: 'other', label: 'Other' },
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!loanType) {
      newErrors.loanType = 'Please select a loan type';
    }

    if (!loanAmount) {
      newErrors.loanAmount = 'Loan amount is required';
    } else if (parseInt(loanAmount) < MIN_LOAN) {
      newErrors.loanAmount = `Minimum loan amount is ₦${MIN_LOAN.toLocaleString()}`;
    } else if (parseInt(loanAmount) > MAX_LOAN) {
      newErrors.loanAmount = `Maximum loan amount is ₦${MAX_LOAN.toLocaleString()}`;
    }

    if (!loanPurpose) {
      newErrors.loanPurpose = 'Please describe the purpose of the loan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext({
        loanType,
        loanAmount: parseInt(loanAmount),
        loanPurpose,
      });
    }
  };


  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <h2 className="modal-title">Loan Details</h2>
          <p className="modal-subtitle">
            Provide the necessary details about the loan you wish to apply for.
          </p>
        </div>

        <div className="modal-body">
          {/* Loan Type */}
          <div className="form-group">
            <label htmlFor="loanType" className="form-label">
              Loan Type
            </label>
            <select
              id="loanType"
              value={loanType}
              onChange={(e) => {
                setLoanType(e.target.value);
                if (errors.loanType) {
                  setErrors({ ...errors, loanType: '' });
                }
              }}
              className={`form-select ${errors.loanType ? 'error' : ''}`}
            >
              <option value="">Please choose</option>
              {loanTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.loanType && (
              <span className="error-message">{errors.loanType}</span>
            )}
          </div>

          {/* Loan Amount */}
          <div className="form-group">
            <label htmlFor="loanAmount" className="form-label">
              Loan Amount
            </label>
            <div className="input-wrapper">
              <span className="currency-symbol">₦</span>
              <input
                type="number"
                id="loanAmount"
                placeholder="Enter amount"
                value={loanAmount}
                onChange={(e) => {
                  setLoanAmount(e.target.value);
                  if (errors.loanAmount) {
                    setErrors({ ...errors, loanAmount: '' });
                  }
                }}
                className={`form-input ${errors.loanAmount ? 'error' : ''}`}
              />
            </div>
            <div className="amount-limits">
              <span>Minimum: ₦{MIN_LOAN.toLocaleString()} Maximum: ₦{MAX_LOAN.toLocaleString()}</span>
            </div>
            {errors.loanAmount && (
              <span className="error-message">{errors.loanAmount}</span>
            )}
          </div>

          {/* Purpose of Loan */}
          <div className="form-group">
            <label htmlFor="loanPurpose" className="form-label">
              Purpose of Loan
            </label>
            <div className="textarea-wrapper">
              <textarea
                id="loanPurpose"
                placeholder="Briefly describe the purpose of this loan (required)"
                value={loanPurpose}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_PURPOSE_LENGTH) {
                    setLoanPurpose(e.target.value);
                    if (errors.loanPurpose) {
                      setErrors({ ...errors, loanPurpose: '' });
                    }
                  }
                }}
                className={`form-textarea ${errors.loanPurpose ? 'error' : ''}`}
              ></textarea>
              <div className="character-count">
                {loanPurpose.length}/{MAX_PURPOSE_LENGTH}
              </div>
            </div>
            {errors.loanPurpose && (
              <span className="error-message">{errors.loanPurpose}</span>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanDetailsModal;
