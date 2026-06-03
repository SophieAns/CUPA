import { useState } from 'react';
import LoanDetailsModal from './LoanDetailsModal';
import FinancialInformation from './FinancialInformation';
import ReviewSubmit from './ReviewSubmit';
import ApplicationSubmitted from './ApplicationSubmitted';

const LoanFlowModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [loanData, setLoanData] = useState({});
  const [financialData, setFinancialData] = useState({});

  if (!isOpen) return null;

  const handleLoanNext = (data) => {
    setLoanData(data);
    setStep(2);
  };

  const handleFinancialNext = (data) => {
    setFinancialData(data);
    setStep(3);
  };

  const handleSubmit = () => {
    // perform submit (API) here if needed
    console.log('Submitting application', { loanData, financialData });
    setStep(4);
  };

  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>✕</button>
        {step === 1 && <LoanDetailsModal isOpen={true} onClose={handleClose} onNext={handleLoanNext} />}
        {step === 2 && <FinancialInformation initial={financialData} onNext={handleFinancialNext} onBack={()=>setStep(1)} />}
        {step === 3 && <ReviewSubmit loanData={loanData} financialData={financialData} onBack={()=>setStep(2)} onEditLoan={()=>setStep(1)} onEditFinancial={()=>setStep(2)} onSubmit={handleSubmit} />}
        {step === 4 && <ApplicationSubmitted />}
      </div>
    </div>
  );
};

export default LoanFlowModal;
