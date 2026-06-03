import { Link } from 'react-router-dom';

const ApplicationSubmitted = ({ onClose }) => {
  return (
    <div>
      <div className="modal-header">
        <h2 className="modal-title">Application Submitted</h2>
        <p className="modal-subtitle">Please click on the highlighted link to proceed to dashboard</p>
      </div>

      <div className="modal-body" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minHeight:180}}>
        <p style={{color:'#6b7280',textAlign:'center'}}>Your loan application has been submitted successfully.</p>
      </div>

      <div className="modal-footer">
        <div style={{display:'flex',gap:12}}>
          <Link to="/dashboard" className="btn-next" style={{textDecoration:'none',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>Proceed to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSubmitted;
