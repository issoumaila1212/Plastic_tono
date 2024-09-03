// src/components/Notifications.js
import React, { useState } from "react";
import "./Notifications.css";

function Notifications() {
  // États pour gérer les champs de saisie
  const [type, setType] = useState("Promotion");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSendNotification = () => {
    // Logic for sending notification (this could be an API call)
    console.log("Notification sent:", { type, title, message, recipient });
    // Réinitialiser les champs après l'envoi
    setTitle("");
    setMessage("");
    setRecipient("");
  };

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h2>Gestion des notifications</h2>
      </div>
      <div className="notifications-form">
        <div className="form-group">
          <label>Type de Notification :</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Promotion">Promotion</option>
            <option value="Alert">Alert</option>
            <option value="Info">Info</option>
          </select>
        </div>
        <div className="form-group">
          <label>Titre :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Entrez le titre"
          />
        </div>
        <div className="form-group">
          <label>Message :</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Entrez le message"
          />
        </div>
        <div className="form-group">
          <label>Destinataire :</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Entrez le destinataire"
          />
        </div>
        <button onClick={handleSendNotification} className="send-button">
          Envoyer
        </button>
      </div>
    </div>
  );
}

export default Notifications;
