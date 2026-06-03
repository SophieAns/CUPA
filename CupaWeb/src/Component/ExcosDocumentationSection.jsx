import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ExcosDocumentationSection.css';

export default function ExcosDocumentationSection() {
  const navigate = useNavigate();
  const [excos, setExcos] = useState([
    { id: 1, position: 'PRESIDENT', personName: 'John Doe', email: 'john@example.com', phone: '08012345678', ninDocument: 'BVN.pdf', status: 'completed' },
    { id: 2, position: 'VICE PRESIDENT', personName: 'Jane Smith', email: 'jane@example.com', phone: '08087654321', ninDocument: 'BVN.pdf', status: 'completed' },
    { id: 3, position: 'SECRETARY', personName: '', email: '', phone: '', ninDocument: null, status: 'pending' },
    { id: 4, position: 'TREASURER', personName: '', email: '', phone: '', ninDocument: null, status: 'pending' },
    { id: 5, position: 'PROVOST', personName: '', email: '', phone: '', ninDocument: null, status: 'pending' }
  ]);

  const [error, setError] = useState('');
  const [modalError, setModalError] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    personName: '',
    email: '',
    phone: '',
  });


  const handleEditClick = (exco) => {
    setEditingId(exco.id);
    setEditFormData({
      personName: exco.personName,
      email: exco.email,
      phone: exco.phone,
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNINDocumentUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setModalError('Only PDF files are allowed');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setModalError('File size must be less than 5MB');
        return;
      }
      setEditFormData(prev => ({
        ...prev,
        ninDocument: file
      }));
      setModalError('');
    }
  };

  const handleSaveEdit = () => {
    if (!editFormData.personName.trim()) {
      setModalError('Please enter a name');
      return;
    }
    if (!editFormData.email.trim()) {
      setModalError('Please enter an email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(editFormData.email)) {
      setModalError('Please enter a valid email address');
      return;
    }
    if (!editFormData.phone.trim()) {
      setModalError('Please enter a phone number');
      return;
    }
    if (!editFormData.bvn.trim()) {
      setModalError('Please enter a bank verification number');
      return;
    }

    const existingExco = excos.find(e => e.id === editingId);
    const ninDoc = editFormData.ninDocument || existingExco.ninDocument;

    if (!ninDoc) {
      setModalError('Please upload a valid ID card in PDF format');
      return;
    }

    setExcos(prevExcos =>
      prevExcos.map(exco =>
        exco.id === editingId
          ? {
              ...exco,
              personName: editFormData.personName,
              email: editFormData.email,
              phone: editFormData.phone,
              ninDocument: editFormData.ninDocument ? editFormData.ninDocument.name : existingExco.ninDocument,
              status: 'completed'
            }
          : exco
      )
    );

    setEditingId(null);
    setModalError('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setModalError('');
  };

  const handleDeletePosition = (id) => {
    setDeleteConfirmId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmId) {
      setExcos(prevExcos =>
        prevExcos.map(exco =>
          exco.id === deleteConfirmId
            ? { ...exco, personName: '', email: '', phone: '', ninDocument: null, status: 'pending' }
            : exco
        )
      );
      setDeleteConfirmId(null);
      setEditingId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const handleContinue = () => {
    const allCompleted = excos.every(exco => exco.status === 'completed');
    
    if (!allCompleted) {
      setError('Please add information for all positions');
      return;
    }

    console.log('Excos Documentation:', excos);
    // Navigate to account review page before final success
    navigate('/signup/review');
  };

  return (
    <div className="excos-documentation-container">
      <div className="excos-documentation-card">
        <h2 className="excos-documentation-title">Excos' Documentation</h2>
        <p className="excos-documentation-subtitle">
          Upload the required documents for each exco. Click to add<br />
          shareholder's information
        </p>

        {/* Progress Bar */}
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }}></div>
          </div>
          <span className="progress-text">Step 4 of 4</span>
        </div>

        {/* Error Message */}
        {error && <div className="error-banner">{error}</div>}

        {/* Excos List */}
        <div className="excos-list">
          {excos.map((exco) => (
            <div key={exco.id} className="exco-item">
              <div className="exco-header">
                {exco.status === 'completed' ? (
                  <svg className="status-icon completed" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                ) : (
                  <svg className="status-icon pending" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                )}
                <div className="exco-info">
                  <span className="exco-position">{exco.position}</span>
                  {exco.personName && (
                    <span className="exco-person-name">{exco.personName}</span>
                  )}
                </div>
              </div>

              {exco.status === 'completed' && (
                <div className="exco-actions">
                  <button
                    className="action-btn edit-btn"
                    onClick={() => handleEditClick(exco)}
                    title="Edit person details"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDeletePosition(exco.id)}
                    title="Delete person from position"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
              )}

              {exco.status === 'pending' && (
                <button
                  className="add-btn"
                  onClick={() => handleEditClick(exco)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingId && (
          <div className="modal-overlay" onClick={handleCancelEdit}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3 className="modal-title">Add Exco</h3>
              <p className="modal-subtitle">Upload the required documents for each exco.</p>

              {modalError && <div className="error-banner">{modalError}</div>}

              <div className="modal-form">
                <div className="form-group">
                  <label htmlFor="personName" className="form-label">NAME</label>
                  <input
                    type="text"
                    id="personName"
                    name="personName"
                    placeholder="E.g Ajibola"
                    value={editFormData.personName}
                    onChange={handleEditFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={editFormData.email}
                      onChange={handleEditFormChange}
                      className="form-input"
                    />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">PHONE NUMBER</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                      value={editFormData.phone}
                      onChange={handleEditFormChange}
                      className="form-input"
                    />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="bvn" className="form-label">BANK VERIFICATION NUMBER</label>
                  <input
                    type="text"
                    id="bvn"
                    name="bvn"
                    placeholder="Enter BVN"
                    value={editFormData.bvn}
                    onChange={handleEditFormChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">VALID ID CARD (NIN)</label>
                  <div className="file-upload-wrapper">
                    <div className="file-upload-area">
                      <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <p className="upload-text">
                        {editFormData.ninDocument ? (
                          <>
                            <span className="file-name">{editFormData.ninDocument.name}</span>
                          </>
                        ) : (
                          <>
                            <span>Upload your document</span>
                            <span className="upload-hint">PDF format • Max. 5MB</span>
                          </>
                        )}
                      </p>
                    </div>
                    <label className="upload-button">
                      Upload
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleNINDocumentUpload}
                        style={{ display: 'none' }}
                      />
                    </label>
                  </div>
                </div>

                <div className="modal-actions">
                  <button className="btn-add-shareholder" onClick={handleSaveEdit}>Add Shareholder</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmId && (
          <div className="modal-overlay" onClick={handleCancelDelete}>
            <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
              <div className="delete-icon-wrapper">
                <svg className="delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                  <path d="M5 7h14" />
                  <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
                  <path d="M9 7V4h6v3" />
                </svg>
              </div>
              <h3 className="modal-title">Are you sure?</h3>
              <p className="delete-message">
                This action cannot be undone. All files and information associated with this exco will be lost.
              </p>
              <button className="btn-delete" onClick={handleConfirmDelete}>Delete</button>
              <button className="btn-cancel" onClick={handleCancelDelete}>Cancel</button>
            </div>
          </div>
        )}

        {/* Continue Button */}
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}
