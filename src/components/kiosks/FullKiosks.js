// src/components/FullKiosks.js
import React, { useState } from "react";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa"; // Import des icônes nécessaires
import "./FullKiosks.css";

function FullKiosks() {
  // Exemple de données pour les kiosques pleins
  const [kiosks, setKiosks] = useState([
    { id: 10, location: "Bacodjicoroni ACI" },
    { id: 100, location: "Bacodjicoroni ACI" },
    { id: 12, location: "Bacodjicoroni ACI" },
    { id: 110, location: "Bacodjicoroni ACI" },
    { id: 111, location: "Bacodjicoroni ACI" },
    { id: 5, location: "Bacodjicoroni ACI" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredKiosks = kiosks.filter((kiosk) =>
    kiosk.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="full-kiosks-container">
      <div className="header">
        <FaArrowLeft className="back-icon" />
        <h2>Kiosque plein</h2>
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

export default FullKiosks;
