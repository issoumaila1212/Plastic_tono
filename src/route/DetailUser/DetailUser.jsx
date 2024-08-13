import React from 'react';
import './DetailUser.css';
import { FaUsers,FaUser } from 'react-icons/fa';

const DetailUser = () => {
    return (
        <div className="user-detail-container">
            <div className="user-header">
                <h1>Détails des utilisateurs</h1>
                <FaUsers className="header-icon" />
            </div>

            <div className="user-info">
                <FaUser className="user-icon" />
                <div className="user-details">
                    <h2>Diallo Abdoulaye Demba</h2>
                    <p>Téléphone : 72832413</p>
                    <p>Points accumulés : 1500</p>
                </div>
            </div>

            <div className="recent-actions">
                <h2>Actions Récentes</h2>
                <div className="action-card">
                    <p>Date : Le 20 Juillet 2023</p>
                    <p>Actions : Déposé 200 g de plastique</p>
                    <p>Points gagnés : 500</p>
                </div>
                <div className="action-card">
                    <p>Date : Le 21 Juillet 2023</p>
                    <p>Actions : Déposé 200 g de plastique</p>
                    <p>Points gagnés : 500</p>
                </div>
                <div className="action-card">
                    <p>Date : Le 30 Juillet 2023</p>
                    <p>Actions : Déposé 200 g de plastique</p>
                    <p>Points gagnés : 500</p>
                </div>
            </div>
        </div>
    );
};

export default DetailUser;
