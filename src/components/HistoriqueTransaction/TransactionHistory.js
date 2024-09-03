// src/components/TransactionHistory.js
import React, { useState } from "react";
import "./TransactionHistory.css";

function TransactionHistory() {
  // Exemple de données de transaction
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Diallo Abdoulaye Demba", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "30 juillet 2024", time: "14:00" },
    { id: 2, name: "Tall Madani", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "25 juillet 2024", time: "14:00" },
    { id: 3, name: "Traore Thierno Oumar", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "25 juillet 2024", time: "12:00" },
    { id: 4, name: "Diallo Fousseni", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "23 juillet 2024", time: "12:00" },
    { id: 5, name: "Sidibe Sounkalo", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "19 juillet 2024", time: "12:00" },
    { id: 6, name: "Diakite Aminata", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "27 juin 2024", time: "10:00" },
    { id: 7, name: "Diallo Kandia", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "27 juin 2024", time: "10:00" },
    { id: 8, name: "Diawara Abdoulaye", type: "Conversion de points", points: "1000 Points", amount: "10000 FCFA", date: "27 juin 2024", time: "10:00" },
  ]);

  return (
    <div className="transaction-history-container">
      <div className="transaction-header">
        <h2>Historique des transactions</h2>
      </div>
      <div className="transaction-content">
        <div className="transaction-search">
          <input type="text" placeholder="Rechercher" />
        </div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Nom et prénom</th>
              <th>Type de transactions</th>
              <th>Points convertis</th>
              <th>Montant</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.name}</td>
                <td>{transaction.type}</td>
                <td>{transaction.points}</td>
                <td>{transaction.amount}</td>
                <td>{`${transaction.date} ${transaction.time}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span>‹</span>
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>›</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistory;
