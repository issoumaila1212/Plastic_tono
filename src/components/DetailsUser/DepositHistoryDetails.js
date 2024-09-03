// src/components/DepositHistoryDetails.js
import React from "react";
import { FaUserCircle, FaBoxOpen } from "react-icons/fa"; // Import des icônes nécessaires
import "./DepositHistoryDetails.css";

function DepositHistoryDetails() {
  // Exemple de données pour un utilisateur
  const user = {
    name: "Diallo Abdoulaye Demba",
    phone: "72832413",
    points: 1500,
    deposits: [
      { date: "01/02/2024", weight: "2.5 kg", earnedPoints: "25 points", kiosk: "10" },
      { date: "15/02/2024", weight: "2.5 kg", earnedPoints: "50 points", kiosk: "50" },
      { date: "15/02/2024", weight: "1.0 kg", earnedPoints: "10 points", kiosk: "10" },
      { date: "01/02/2024", weight: "1.0 kg", earnedPoints: "45 points", kiosk: "45" },
      { date: "01/02/2024", weight: "1.5 kg", earnedPoints: "25 points", kiosk: "25" },
      { date: "15/02/2024", weight: "3.7 kg", earnedPoints: "30 points", kiosk: "30" },
    ]
  };

  return (
    <div className="deposit-history-details-container">
      <div className="header">
        <h2>
          <FaBoxOpen className="header-icon" /> {/* Icone de boîte ouverte pour l'en-tête */}
          Historique des dépôts
        </h2>
      </div>
      <div className="user-info">
        <div className="user-details">
          <h3>
            <FaUserCircle className="user-icon" /> {/* Icone de profil utilisateur circulaire */}
            {user.name}
          </h3>
          <p>Téléphone : {user.phone}</p>
          <p>Points accumulés : {user.points}</p>
        </div>
      </div>
      <table className="deposit-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Poids du Déchet</th>
            <th>Points Gagnés</th>
            <th>Kiosque</th>
          </tr>
        </thead>
        <tbody>
          {user.deposits.map((deposit, index) => (
            <tr key={index}>
              <td>{deposit.date}</td>
              <td>{deposit.weight}</td>
              <td>{deposit.earnedPoints}</td>
              <td>{deposit.kiosk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepositHistoryDetails;
