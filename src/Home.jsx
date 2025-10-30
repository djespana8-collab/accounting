import React, { useState } from "react";
import "./Home.css";
import menuIcon from "./home_png/menu_icon_no_background.png"; // ✅ your menu icon path

function Home({ onLogout }) {
  const [activeTab, setActiveTab] = useState("to receive");

  return (
    <div className="home-page">
      <div className="outer">
        {/* Top Bar */}
        <div className="topbar">
          <button className="menu-btn">
            <img src={menuIcon} alt="Menu" />
          </button>

          <div className="nav">
            <div
              className={`tab ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              HOME
            </div>
            <div
              className={`tab ${activeTab === "transactions" ? "active" : ""}`}
              onClick={() => setActiveTab("transactions")}
            >
              TRANSACTIONS
            </div>
             <div
              className={`tab ${activeTab === "contacts" ? "active" : ""}`}
              onClick={() => setActiveTab("contacts ")}
            >
              CONTACTS 
            </div>
            <div
              className={`tab ${activeTab === "inventory" ? "active" : ""}`}
              onClick={() => setActiveTab("inventory ")}
            >
              INVENTORY 
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="dashboard">
          <div className="left-section">
            <div className="box green">TO RECEIVE</div>
            <div className="box red">TO GIVE</div>
            <div className="box">SALES</div>
            <div className="box">PURCHASE</div>
            <div className="box">EXPENSE TRACKER</div>
            <div className="box">TOTAL BALANCE</div>
          </div>

          <div className="right-section">
            <div className="box green contacts-box">CONTACTS</div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
