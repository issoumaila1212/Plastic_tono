// src/components/UserDetails.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";
import { FaBox, FaHistory } from "react-icons/fa";

function UserDetails() {
  const navigate = useNavigate();

  const user = {
    id: 1,
    name: "Diallo Abdoulaye Demba",
    phone: "72832413",
    points: 1500,
  };

  const handleViewTransactions = () => {
    navigate("/dashboard/user-details/transactions");
  };

  const handleViewDeposits = () => {
    navigate("/dashboard/user-details/depots");
  };

  return (
    <div className="user-details-container">
      <div className="user-header">
        <h2>Détails de l'utilisateur</h2>
      </div>
      <div className="user-info">
        <div className="user-avatar">
          <FaBox className="user-icon" />
        </div>
        <div className="user-details">
          <h3>{user.name}</h3>
          <p>Téléphone: {user.phone}</p>
          <p>Points accumulés: {user.points}</p>
        </div>
      </div>
      <div className="recent-actions">
        <h3>Actions Récentes</h3>
        <div className="actions">
          <div className="action-button orange" onClick={handleViewDeposits}>
            <FaBox className="action-icon" />
            <p>Historique des dépôts</p>
          </div>
          <div className="action-button green" onClick={handleViewTransactions}>
            <FaHistory className="action-icon" />
            <p>Historique des transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
