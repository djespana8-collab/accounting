import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cashflow_logo from './assets/Cashflow_logo.png';
import './Login.css';
import Home from './Home'; // Import the Home component

function LandingPage({ onNavigateToLogin }) {
  return (
    <>
      <div>
        <img src={Cashflow_logo} className="logo" alt="logo" />
      </div>
      <h2>Where you monitor your cash</h2>
      <div className="card">
        <button onClick={onNavigateToLogin}>LOG IN</button>
      </div>
      <br />
      <p>A project made by Team Cash-Flow</p>
    </>
  );
}

function App() {
  const [currentView, setCurrentView] = useState('landing');

  if (currentView === 'landing') {
    return <LandingPage onNavigateToLogin={() => setCurrentView('login')} />;
  }

  if (currentView === 'login') {
    return <Login onBack={() => setCurrentView('landing')} onLoginSuccess={() => setCurrentView('home')} />;
  }

  if (currentView === 'home') {
    return <Home onLogout={() => setCurrentView('landing')} />;
  }
}

// Your existing Login component here...
const Login = ({ onBack, onLoginSuccess }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('employee');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { employeeId, password, userType });
    // Add your login logic here
    // On successful login:
    onLoginSuccess();
  };

  return (
    <div className="login-container">
      <div className="login-card">
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

        <div className="login-header">
          <h1 className="company-name">Cash-FLOW</h1>
          <h2 className="login-title">LOGIN</h2>
        </div>

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

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="employeeId">EMPLOYEE ID</label>
            <input
              type="text"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter your employee ID"
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