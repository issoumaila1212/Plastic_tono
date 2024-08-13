import React from 'react';
import './NotificationVide.css'; // Fichier CSS pour la mise en forme

const NotificationVide = () => {
    const kiosques = [
        { id: 10, location: 'Bacodjicoroni Aci' },
        { id: 100, location: 'Bacodjicoroni Aci' },
        { id: 12, location: 'Bacodjicoroni Aci' },
        { id: 110, location: 'Bacodjicoroni Aci' },
        { id: 111, location: 'Bacodjicoroni Aci' },
        { id: 5, location: 'Bacodjicoroni Aci' },
    ];

    return (
        <div className="notification-vide-container">
            <header className="notification-vide-header">
                <button className="back-button">
                    <i className="bi bi-arrow-left"></i>
                </button>
                <h1>Kiosque Vide</h1>
                <button className="trash-button">
                    <i className="bi bi-trash"></i>
                </button>
            </header>
            <div className="search-bar">
                <input type="text" placeholder="Rechercher par localisation" />
            </div>
            <div className="kiosque-list">
                {kiosques.map((kiosque) => (
                    <div key={kiosque.id} className="kiosque-item">
                        <div>ID: {kiosque.id}</div>
                        <div>Localisation: {kiosque.location}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationVide ;
