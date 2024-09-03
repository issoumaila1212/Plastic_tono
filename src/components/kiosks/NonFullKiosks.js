// src/components/NonFullKiosks.js
import React, { useState } from "react";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa"; // Import des icônes nécessaires
import "./NonFullKiosks.css";

function NonFullKiosks() {
  // Exemple de données pour les kiosques non pleins
  const [kiosks, setKiosks] = useState([
    { id: 13, location: "Bacodjicoroni ACI" },
    { id: 7, location: "Bacodjicoroni ACI" },
    { id: 9, location: "Bacodjicoroni ACI" },
    { id: 112, location: "Bacodjicoroni ACI" },
    { id: 2, location: "Bacodjicoroni ACI" },
    { id: 113, location: "Bacodjicoroni ACI" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKiosks = kiosks.filter((kiosk) =>
    kiosk.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="non-full-kiosks-container">
      <div className="header">
        <FaArrowLeft className="back-icon" />
        <h2>Kiosque non plein</h2>
        <FaTrashAlt className="trash-icon" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher par localisation"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="kiosk-list">
        {filteredKiosks.map((kiosk) => (
          <div key={kiosk.id} className="kiosk-item">
            <p>Id: {kiosk.id}</p>
            <p>Localisation: {kiosk.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NonFullKiosks;
