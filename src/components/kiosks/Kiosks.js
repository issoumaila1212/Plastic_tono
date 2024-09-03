// src/components/Kiosks.js
import React, { useState } from "react";
import { FaTrashAlt, FaEdit, FaPlusCircle, FaTrash, FaRecycle } from "react-icons/fa"; // Import des icônes
import "./Kiosks.css";

function Kiosks() {
  // Exemple de données de kiosques
  const [kiosks, setKiosks] = useState([
    { id: 1, location: "Bacodjicoroni ACI", level: "Plein", status: "Opérationnel" },
    { id: 2, location: "Golf", level: "Non Plein", status: "Non opérationnel" },
    { id: 3, location: "Kalaban Coura", level: "Non Plein", status: "Non opérationnel" },
    { id: 4, location: "Sebenicoro", level: "Plein", status: "Opérationnel" },
    { id: 5, location: "Kabala", level: "Plein", status: "Opérationnel" },
    { id: 6, location: "Badalabougou", level: "Non Plein", status: "Opérationnel" },
  ]);

  // États pour gérer l'affichage de la fenêtre modale et les champs du formulaire
  const [showModal, setShowModal] = useState(false);
  const [newKiosk, setNewKiosk] = useState({
    location: "",
    level: "Non Plein",
    status: "Opérationnel"
  });

  const handleFilter = (filter) => {
    console.log("Filtering kiosks:", filter);
  };

  const handleAddKiosk = () => {
    setShowModal(true); // Affiche la fenêtre modale
  };

  const handleCloseModal = () => {
    setShowModal(false); // Ferme la fenêtre modale
    setNewKiosk({ location: "", level: "Non Plein", status: "Opérationnel" }); // Réinitialise le formulaire
  };

  const handleSaveKiosk = () => {
    // Logique pour ajouter un nouveau kiosque
    setKiosks([...kiosks, { ...newKiosk, id: kiosks.length + 1 }]);
    handleCloseModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewKiosk({ ...newKiosk, [name]: value });
  };

  return (
    <div className="kiosks-container">
      <div className="kiosks-header">
        <h2>Gestion des Kiosques</h2>
      </div>
      <div className="kiosks-filters">
        <button className="filter-button full" onClick={() => handleFilter("Plein")}>
          <FaTrash className="filter-icon" /> Kiosque Plein
        </button>
        <button className="filter-button not-full" onClick={() => handleFilter("Non Plein")}>
          <FaRecycle className="filter-icon" /> Kiosque Non Plein
        </button>
        <input type="text" placeholder="Rechercher par localisation" className="search-input" />
        <button className="add-button" onClick={handleAddKiosk}>
          <FaPlusCircle /> Ajouter
        </button>
      </div>
      <table className="kiosks-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Localisation</th>
            <th>Niveau</th>
            <th>État</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {kiosks.map((kiosk) => (
            <tr key={kiosk.id}>
              <td>{kiosk.id}</td>
              <td>{kiosk.location}</td>
              <td>
                {kiosk.level === "Plein" ? (
                  <FaTrash className="icon red" />
                ) : (
                  <FaRecycle className="icon green" />
                )}
              </td>
              <td>{kiosk.status}</td>
              <td>
                <button className="edit-button">
                  <FaEdit />
                </button>
                <button className="delete-button">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Fenêtre modale pour ajouter un kiosque */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Ajouter un Kiosque</h3>
            <div className="form-group">
              <label>Localisation :</label>
              <input
                type="text"
                name="location"
                value={newKiosk.location}
                onChange={handleChange}
                placeholder="Entrez la localisation"
              />
            </div>
            <div className="form-group">
              <label>Niveau :</label>
              <select name="level" value={newKiosk.level} onChange={handleChange}>
                <option value="Plein">Plein</option>
                <option value="Non Plein">Non Plein</option>
              </select>
            </div>
            <div className="form-group">
              <label>État :</label>
              <select name="status" value={newKiosk.status} onChange={handleChange}>
                <option value="Opérationnel">Opérationnel</option>
                <option value="Non opérationnel">Non opérationnel</option>
              </select>
            </div>
            <button onClick={handleSaveKiosk} className="save-button">
              Sauvegarder
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kiosks;
