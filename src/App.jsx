import React, { useState } from 'react';
import './App.css';
import Cashflow_logo from './assets/Cashflow_logo.png';
import './Login.css'; // Make sure to import the login styles
import Home from './Home'; // ← ADDED: import your Home component

function App() {
  // Changed: single state to manage three views: 'landing', 'login', 'home'
  // Start as 'home' to bypass login temporarily. Change back to 'landing' later.
  const [currentView, setCurrentView] = useState('home'); // <-- set to 'home' to bypass

  // Render Login view
  if (currentView === 'login') {
    return (
      <Login
        onBack={() => setCurrentView('landing')}
        onLoginSuccess={() => setCurrentView('home')}
      />
    );
  }

  // Render Home view (this is where you land when bypassing login)
  if (currentView === 'home') {
    return <Home onLogout={() => setCurrentView('landing')} />;
  }

  // Default: Landing page
  return (
    <>
      <div>
        <img src={Cashflow_logo} className="logo" alt="logo" />
      </div>
      <h2>Where you monitor your cash</h2>
      <div className="card">
        <button onClick={() => setCurrentView('login')}>LOG IN</button>
      </div>
      <br />
      <p>A project made by Team Cash-Flow</p>
    </>
  );
}

// Login Component (updated to accept onLoginSuccess)
const Login = ({ onBack, onLoginSuccess }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { employeeId, password, userType });
    // TEMP: automatically treat login as successful and go to Home
    // Later: replace with actual auth logic
    onLoginSuccess();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#667eea',
            cursor: 'pointer',
            fontSize: '16px',
            marginBottom: '20px',
            padding: '5px 0'
          }}
        >
          ← Back to Home
        </button>

        {/* Header */}
        <div className="login-header">
          <img src={Cashflow_logo} className="login-logo" alt="logo" />
          <h2 className="login-title">LOGIN</h2>
        </div>

        {/* User Type Selection */}
        <div className="user-type-selector">
          <button
            className={`user-type-btn ${userType === 'employee' ? 'active' : ''}`}
            onClick={() => setUserType('employee')}
            type="button"
          >
            EMPLOYEE
          </button>
          <button
            className={`user-type-btn ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => setUserType('admin')}
            type="button"
          >
            ADMIN
          </button>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">EMPLOYEE/ADMIN ID</label>
            <input
              type="text"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter you ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
