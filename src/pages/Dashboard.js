// src/pages/Dashboard.js
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaTrash, FaBell, FaWallet, FaUserCircle } from "react-icons/fa";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="avatar-circle">
            <FaUserCircle className="avatar-icon" />
          </div>
          <h2>ABDOULAYE DIALLO</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={location.pathname === "/dashboard" ? "active" : ""}>
              <Link to="/dashboard">
                <FaHome className="icon" /> Accueil
              </Link>
            </li>
            <li className={location.pathname === "/dashboard/users" ? "active" : ""}>
              <Link to="/dashboard/users">
                <FaUsers className="icon" /> Utilisateurs
              </Link>
            </li>
            <li className={location.pathname === "/dashboard/kiosks" ? "active" : ""}>
              <Link to="/dashboard/kiosks">
                <FaTrash className="icon" /> Kiosques
              </Link>
            </li>
            <li className={location.pathname === "/dashboard/notifications" ? "active" : ""}>
              <Link to="/dashboard/notifications">
                <FaBell className="icon" /> Notifications
              </Link>
            </li>
            <li className={location.pathname === "/dashboard/transactions" ? "active" : ""}>
              <Link to="/dashboard/transactions">
                <FaWallet className="icon" /> Historique des Transactions
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
