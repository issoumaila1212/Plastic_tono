// src/components/Users.js
import React, { useState } from "react";
import { FaEye, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Users.css";

function Users() {
  const navigate = useNavigate(); // Hook pour la navigation
  const [users, setUsers] = useState([
    { name: "Diallo Abdoulaye Demba", phone: "72832413", points: 1500 },
    { name: "Tall Madani", phone: "77335620", points: 2500 },
    { name: "Traore Thierno Oumar", phone: "82349860", points: 500 },
    { name: "Diallo Fousseni", phone: "71203454", points: 1000 },
    { name: "Sidibe Sounkalo", phone: "62345423", points: 400 },
    { name: "Diakite Aminata", phone: "99453023", points: 500 },
    { name: "Diallo Kandia", phone: "70233434", points: 1000 },
    { name: "Diawara Abdoulaye", phone: "83456323", points: 1500 },
  ]);

  const handleViewDetails = () => {
    navigate("/dashboard/usersdetails"); // Redirige vers une page générique des détails de l'utilisateur
  };

  return (
    <div className="users-container">
      <div className="users-header">
        <h1>
          <FaUsers className="users-icon" /> GESTION DES UTILISATEURS INSCRITS
        </h1>
      </div>
      <div className="users-content">
        <div className="users-filter">
          <input type="text" placeholder="Rechercher" />
          <select>
            <option value="">Filtrer par points</option>
            <option value="0-500">0-500</option>
            <option value="500-1000">500-1000</option>
            <option value="1000+">1000+</option>
          </select>
          <button className="filter-button">Filtrer</button>
        </div>
        <table className="users-table">
          <thead>
            <tr>
              <th>Nom et prénom</th>
              <th>Téléphone</th>
              <th>Points Accumulés</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.points}</td>
                <td>
                  <button
                    className="action-button"
                    onClick={handleViewDetails}
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
