// src/components/TransactionHistoryDetails.js
import React from "react";
import { FaUserCircle, FaReceipt } from "react-icons/fa"; // Import des icônes nécessaires
import "./TransactionHistoryDetails.css";

function TransactionHistoryDetails() {
  // Exemple de données pour un utilisateur
  const user = {
    name: "Diallo Abdoulaye Demba",
    phone: "72832413",
    points: 1500,
    transactions: [
      { date: "01/02/2024", type: "Conversion", points: "25 points", amount: "10000 Fcfa" },
      { date: "15/02/2024", type: "Conversion", points: "50 points", amount: "5000 Fcfa" },
      { date: "15/02/2024", type: "Conversion", points: "10 points", amount: "1000 Fcfa" },
      { date: "01/02/2024", type: "Conversion", points: "45 points", amount: "4500 Fcfa" },
      { date: "01/02/2024", type: "Conversion", points: "25 points", amount: "25000 Fcfa" },
      { date: "15/02/2024", type: "Conversion", points: "30 points", amount: "3000 Fcfa" },
    ]
  };

  return (
    <div className="transaction-history-details-container">
      <div className="header">
        <h2>
          <FaReceipt className="header-icon" /> {/* Icone de reçu pour l'en-tête */}
          Historique des transactions
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
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type de transaction</th>
            <th>Points</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {user.transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>{transaction.points}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistoryDetails;
