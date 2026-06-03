import { useNavigate } from 'react-router-dom';
import LoanFlowModal from './LoanFlowModal';
import NavLinks from './NavLinks';
import FooterSection from './FooterSection';
import DashboardPage from './DashboardPage';

const LoanDetailsPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/dashboard');
  };

  const handleNext = (data) => {
    console.log('Loan application submitted:', data);
    // For now, return to dashboard after submitting loan details
    navigate('/dashboard');
  };

  return (
    <>
      <NavLinks />
      <DashboardPage />
      <FooterSection />
      <LoanFlowModal isOpen={true} onClose={handleClose} />
    </>
  );
};

export default LoanDetailsPage;
