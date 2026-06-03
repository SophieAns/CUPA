import { useState } from 'react';
import '../styles/DashboardPage.css';
import Testimonies from '../assets/Testimonial Image.png';
import brandlogo from '../assets/brand logo.png';
import { useNavigate } from 'react-router-dom';
// import WindowsLog from '../assets/windowsLog.png';

const DashboardPage = () => {
  const [selectedMonth, setSelectedMonth] = useState('March 2024');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();
  const handleApplyLoan = () => {
    console.log('Apply for Loan clicked');
    // Add navigation to loan application page
    navigate('/Loan-Details');
  };

  const handleMakeContribution = () => {
    console.log('Make a Contribution clicked');
    // Add navigation to contribution page
    // navigate('/make-contribution');
  };

  // Mock data for stats
  const stats = [
    {
      label: 'Total Savings',
      amount: '145,823',
      currency: '₦',
      percentage: '+5%',
      trend: 'up',
    },
    {
      label: 'Loans',
      amount: '71,500',
      currency: '₦',
      percentage: '+10%',
      trend: 'up',
    },
    {
      label: 'Contributions',
      amount: '200,400',
      currency: '₦',
      percentage: '+8%',
      trend: 'up',
    },
    {
      label: 'Investments',
      amount: '602,500',
      currency: '₦',
      percentage: '+12%',
      trend: 'up',
    },
  ];

  // Mock data for recent transactions
  const transactions = [
    {
      id: '9876543221',
      date: '2024-09-09',
      category: 'Loan',
      amount: '-$500',
      status: 'Pending',
      method: 'Bank transfer',
      type: 'Loan Repay',
    },
    {
      id: '1234656789',
      date: '2024-09-02',
      category: 'Savings',
      amount: '+$2000',
      status: 'Success',
      method: 'Credit Card',
      type: 'Deposit',
    },
    {
      id: '5506888111',
      date: '2024-09-01',
      category: 'Investment',
      amount: '+$300',
      status: 'Failed',
      method: 'Bank transfer',
      type: 'Interest',
    },
    {
      id: '6789012349',
      date: '2024-08-30',
      category: 'Contribution',
      amount: '+$150',
      status: 'Success',
      method: 'Mobile Payment',
      type: 'Deposit',
    },
    {
      id: '8887777666',
      date: '2024-08-28',
      category: 'Loan',
      amount: '-$100',
      status: 'Success',
      method: 'Bank transfer',
      type: 'Loan Repay',
    },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Success':
        return 'status-success';
      case 'Pending':
        return 'status-pending';
      case 'Failed':
        return 'status-failed';
      default:
        return '';
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <img src={brandlogo} alt="Brand Logo" />
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">
            <span className="nav-icon">📊</span> Dashboard
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">👤</span> My Account
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💰</span> Savings
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💳</span> Loans
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📋</span> Contributions
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📈</span> Investment
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📄</span> Transactions
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">❓</span> Support/Help
          </a>
        </nav>

        <div className="sidebar-footer">
          <a href="#" className="nav-item">
            <span className="nav-icon">⚙️</span> Settings
          </a>
          <a href="#" className="nav-item logout">
            <span className="nav-icon">🚪</span> Log out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-actions">
            <input type="search" placeholder="Search" className="search-input" />
            <button className="notification-btn">🔔</button>
            <button className="settings-btn">⚙️</button>
            <div className="user-profile">
              <img src={Testimonies} alt="User" />
              <span>MikaiD</span>
            </div>
          </div>
        </header>

        {/* Right Side Action Panel - Above Cards */}
        <div className="right-action-panel">
          <button className="action-button primary" onClick={handleApplyLoan}>
            Apply for Loan
          </button>
          <button className="action-button secondary" onClick={handleMakeContribution}>
            Make a Contribution
          </button>
        </div>

        {/* Stats Cards */}
        <section className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-amount">
                <span className="currency">{stat.currency}</span>
                {stat.amount}
              </div>
              <div className="stat-footer">
                <span className={`percentage ${stat.trend}`}>
                  {stat.percentage} compared to last month
                </span>
                <a href="#" className="view-report">
                  View Snap Report →
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Recent Transactions & Charts */}
        <section className="content-section">
          <div className="transactions-container">
            <div className="section-header">
              <h2>Recent Transactions</h2>
              <span className="page-info">Page 1 of 30</span>
            </div>

            <div className="transactions-table-wrapper">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>TRANSACTION ID</th>
                    <th>DATE</th>
                    <th>CATEGORY</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                    <th>PAYMENT METHOD</th>
                    <th>TYPE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.id}</td>
                      <td>{transaction.date}</td>
                      <td>{transaction.category}</td>
                      <td className="amount">{transaction.amount}</td>
                      <td>
                        <span className={`status-badge ${getStatusBadgeClass(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>{transaction.method}</td>
                      <td>{transaction.type}</td>
                      <td>
                        <button className="action-btn">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              <button className="pagination-btn prev">Previous</button>
              <div className="pagination-numbers">
                <button className="pagination-num">1</button>
                <button className="pagination-num">2</button>
                <button className="pagination-num active">3</button>
                <span className="pagination-dots">...</span>
                <button className="pagination-num">10</button>
                <button className="pagination-num">11</button>
                <button className="pagination-num">12</button>
              </div>
              <button className="pagination-btn next">Go to page</button>
              <select className="pagination-select">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
          </div>

          {/* Charts Container */}
          <div className="charts-container">
            {/* Savings Status Chart */}
            <div className="chart-card savings-chart">
              <div className="chart-header">
                <h3>Savings Status</h3>
                <select className="chart-filter">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="chart-placeholder">
                <svg viewBox="0 0 500 300" className="chart-svg">
                  <defs>
                    <linearGradient id="gradientCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
                    </linearGradient>
                    <linearGradient id="gradientPink" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  {/* Cyan line - Tending */}
                  <polyline
                    points="40,250 100,200 160,180 220,210 280,150 340,170 400,120 460,100"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                  <polygon
                    points="40,250 100,200 160,180 220,210 280,150 340,170 400,120 460,100 460,300 40,300"
                    fill="url(#gradientCyan)"
                  />
                  {/* Pink line - Pending */}
                  <polyline
                    points="40,260 100,220 160,210 220,240 280,200 340,220 400,180 460,160"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="2"
                  />
                  <polygon
                    points="40,260 100,220 160,210 220,240 280,200 340,220 400,180 460,160 460,300 40,300"
                    fill="url(#gradientPink)"
                  />
                  {/* X axis */}
                  <line x1="30" y1="290" x2="480" y2="290" stroke="#e5e7eb" strokeWidth="1" />
                  {/* Day labels */}
                  <text x="40" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Monday
                  </text>
                  <text x="100" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Tuesday
                  </text>
                  <text x="160" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Wednesday
                  </text>
                  <text x="220" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Thursday
                  </text>
                  <text x="280" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Friday
                  </text>
                  <text x="340" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Saturday
                  </text>
                  <text x="400" y="310" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Sunday
                  </text>
                </svg>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#06b6d4' }}></span>
                  <span>Trending</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#ec4899' }}></span>
                  <span>Pending</span>
                </div>
              </div>
            </div>

            {/* Loan Status Chart */}
            <div className="chart-card loan-chart">
              <div className="chart-header">
                <h3>Loan Status</h3>
                <div className="month-selector">
                  <button className="month-btn prev-month">‹</button>
                  <span className="month-display">{selectedMonth}</span>
                  <button className="month-btn next-month">›</button>
                </div>
              </div>
              <div className="donut-chart-container">
                <svg viewBox="0 0 200 200" className="donut-chart">
                  {/* Donut chart - black segment (approximately 65% for ₦21,950 balance) */}
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#1f2937" strokeWidth="40" strokeDasharray="144.51 217.8" />
                  {/* Gray segment (approximately 35% for remaining) */}
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#d1d5db" strokeWidth="40" strokeDasharray="73.29 217.8" strokeDashoffset="-144.51" />
                </svg>
                <div className="donut-center">
                  <div className="donut-value">₦ 21,950</div>
                  <div className="donut-label">Outstanding balance</div>
                </div>
              </div>
              <div className="chart-legend">
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#1f2937' }}></span>
                  <span>Paid off</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot" style={{ backgroundColor: '#d1d5db' }}></span>
                  <span>Outstanding balance</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
