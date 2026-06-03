import { Link } from 'react-router-dom';

const SummaryCard = ({ title, rows, onEdit }) => (
  <div style={{border:'1px solid #eef2f6',borderRadius:8,padding:18,marginBottom:18,background:'#fff'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
      <strong>{title}</strong>
      {onEdit && <button style={{background:'transparent',border:'none',color:'#06b6d4',cursor:'pointer'}} onClick={onEdit}>Edit</button>}
    </div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
      {rows.map((r,idx)=>(
        <div key={idx} style={{fontSize:13,color:'#374151'}}>
          <div style={{color:'#9ca3af',fontSize:12}}>{r.label}</div>
          <div style={{marginTop:6}}>{r.value}</div>
        </div>
      ))}
    </div>
  </div>
);

const ReviewSubmit = ({ loanData, financialData, onBack, onEditLoan, onEditFinancial, onSubmit }) => {
  return (
    <div>
      <div className="modal-header">
        <h2 className="modal-title">Review & Submit</h2>
        <p className="modal-subtitle">Please review your loan application details before submission.</p>
      </div>

      <div className="modal-body">
        <SummaryCard
          title="Loan Details"
          rows={[
            { label: 'Loan Type', value: loanData.loanType || '—' },
            { label: 'Loan Amount', value: loanData.loanAmount ? `₦${Number(loanData.loanAmount).toLocaleString()}` : '—' },
            { label: 'Purpose of Loan', value: loanData.loanPurpose || '—' },
          ]}
          onEdit={onEditLoan}
        />

        <SummaryCard
          title="Financial Information"
          rows={[
            { label: 'Monthly Income', value: financialData.monthlyIncome ? `₦${Number(financialData.monthlyIncome).toLocaleString()}` : '—' },
            { label: 'Estimated Monthly Expenses', value: financialData.monthlyExpenses ? `₦${Number(financialData.monthlyExpenses).toLocaleString()}` : '—' },
            { label: 'Employment Type', value: financialData.employmentType || '—' },
            { label: 'Position/Job Title', value: financialData.position || '—' },
            { label: 'Years of Employment', value: financialData.years || '—' },
          ]}
          onEdit={onEditFinancial}
        />

        <div style={{display:'flex',alignItems:'center',gap:8,margin:'12px 0'}}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" style={{fontSize:13,color:'#6b7280'}}>By clicking on this, I agree to the Terms and Conditions applied.</label>
        </div>
      </div>

      <div className="modal-footer">
        <div style={{display:'flex',gap:12}}>
          <button className="btn-next" onClick={onBack} style={{background:'#fff',color:'#0f172a',border:'1px solid #e6edf3',minWidth:140}}>Back</button>
          <button className="btn-next" onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmit;
