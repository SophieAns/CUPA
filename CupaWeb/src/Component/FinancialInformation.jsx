import { useState } from 'react';

const FinancialInformation = ({ initial = {}, onNext, onBack }) => {
  const [monthlyIncome, setMonthlyIncome] = useState(initial.monthlyIncome || '');
  const [monthlyExpenses, setMonthlyExpenses] = useState(initial.monthlyExpenses || '');
  const [employmentType, setEmploymentType] = useState(initial.employmentType || '');
  const [position, setPosition] = useState(initial.position || '');
  const [years, setYears] = useState(initial.years || '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!monthlyIncome) e.monthlyIncome = 'Enter your monthly income';
    if (!monthlyExpenses) e.monthlyExpenses = 'Enter estimated monthly expenses';
    if (!employmentType) e.employmentType = 'Select employment type';
    if (!position) e.position = 'Enter job title';
    if (!years) e.years = 'Enter years of employment';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    onNext({ monthlyIncome, monthlyExpenses, employmentType, position, years });
  };

  return (
    <div>
      <div className="modal-header">
        <h2 className="modal-title">Financial Information</h2>
        <p className="modal-subtitle">Help us understand your financial standing to assess loan eligibility.</p>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label className="form-label">Monthly Income</label>
          <div className="input-wrapper">
            <span className="currency-symbol">₦</span>
            <input className={`form-input ${errors.monthlyIncome ? 'error' : ''}`} placeholder="Enter your average monthly income" value={monthlyIncome} onChange={(e)=>setMonthlyIncome(e.target.value)} />
          </div>
          {errors.monthlyIncome && <span className="error-message">{errors.monthlyIncome}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Estimated Monthly Expenses</label>
          <div className="input-wrapper">
            <span className="currency-symbol">₦</span>
            <input className={`form-input ${errors.monthlyExpenses ? 'error' : ''}`} placeholder="Enter estimated monthly expenses" value={monthlyExpenses} onChange={(e)=>setMonthlyExpenses(e.target.value)} />
          </div>
          {errors.monthlyExpenses && <span className="error-message">{errors.monthlyExpenses}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Employment Type</label>
          <select className={`form-select ${errors.employmentType ? 'error' : ''}`} value={employmentType} onChange={(e)=>setEmploymentType(e.target.value)}>
            <option value="">Select your current employment status</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="self-employed">Self Employed</option>
            <option value="unemployed">Unemployed</option>
          </select>
          {errors.employmentType && <span className="error-message">{errors.employmentType}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Position/Job Title</label>
          <input className={`form-input ${errors.position ? 'error' : ''}`} placeholder="Enter your current job title or role" value={position} onChange={(e)=>setPosition(e.target.value)} />
          {errors.position && <span className="error-message">{errors.position}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Years of Employment</label>
          <input className={`form-input ${errors.years ? 'error' : ''}`} placeholder="Enter the number of years in your current role" value={years} onChange={(e)=>setYears(e.target.value)} />
          {errors.years && <span className="error-message">{errors.years}</span>}
        </div>
      </div>
      <div className="modal-footer">
        <div style={{display:'flex',gap:12}}>
          <button className="btn-next" onClick={onBack} style={{background:'#fff',color:'#0f172a',border:'1px solid #e6edf3',minWidth:140}}>Back</button>
          <button className="btn-next" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FinancialInformation;
