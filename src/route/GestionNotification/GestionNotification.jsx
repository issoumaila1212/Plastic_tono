import React from 'react'
import './GestionNotification.css'

const GestionNotification = () => {
    return (
        <div className="notification-container">
            <div className="notification-header">
                <h1>Gestion des notifications</h1>
                <i className="header-icon bi bi-bell"></i>
            </div>

            <div className="notification-form">
                <label>Type de Notification :</label>
                <input type="text" className="form-input" value="Promotion" readOnly />
                
                <label>Titre :</label>
                <input type="text" className="form-input" />

                <label>Message :</label>
                <textarea className="form-input" rows="2"></textarea>

                <label>Destinataire :</label>
                <input type="text" className="form-input" />

                <button className="submit-button">Envoyer</button>
            </div>
        </div>
    );
};

export default GestionNotification