import React from 'react';
import './DetailUser.css';
import { FaUsers,FaUser } from 'react-icons/fa';

const DetailUser = () => {
    return (
    <div className="user-detail-container">
        <div className="user-header">
        <h1>Details de l'utilisateur</h1>
         <FaUsers className="header-icon" />{/* Utilisation de l'icône Bootstrap pour les personnes */}
        </div>
        <div className='bordure'>
        <div className="user-info">
        <FaUser className="profile-icon" />
        <h2>Diallo Abdoulaye Demba</h2>   
        </div> 
        <div className="user-details"> 
                <p><strong>Téléphone </strong> : 72832413</p>
                <p><strong>Points accumulés </strong>: 1500</p>
                <h2>Actions Récentes</h2>
            </div>
        <div className="actions-recents">
            
                <div className="recent-actions">
                    <div className="action-card orange">
                        <img src="/icons/historique_depots.png" alt="Historique des Dépôts Icon" className="actions-icon" /> 
                        <p><strong>Historique des<p>dépôts</p></strong></p>
                    </div>
                <div className="action-card green">
                <img src="/icons/historique_transaction.png" alt="Historique des Dépôts Icon" className="action-icon" /> 
                <p><strong>Historique des <p>transactions</p></strong></p>
        </div>
            </div>
        </div>
        </div>
    </div>

    );
};

export default DetailUser;
