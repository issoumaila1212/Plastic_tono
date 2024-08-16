import React from 'react'
import './HistoriqueDepots.css';
import { FaBoxOpen,FaUser } from 'react-icons/fa';

const HistoriqueDepots = () => {
  return (
    <div className="historique-depots-container">
            <div className="header">
                <h1>Historique des dépôts</h1>
                <FaBoxOpen className="header-icon" />
            </div>
            <div className="user-info">
        <FaUser className="profile-icon" />
        <h2>Diallo Abdoulaye Demba</h2>   
        </div> 
        <div className="user-details"> 
                <p><strong>Téléphone </strong> : 72832413</p>
                <p><strong>Points accumulés </strong>: 1500</p>
                <h2>Actions Récentes</h2>
            </div>
            <div className="table-container">
                <table className="depots-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Poids du Déchet</th>
                            <th>Points Gagnés</th>
                            <th>Kiosque</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01/02/2024</td>
                            <td>2.5 kg</td>
                            <td>25 points</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>15/02/2024</td>
                            <td>2.5 kg</td>
                            <td>50 points</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>15/02/2024</td>
                            <td>1.0 kg</td>
                            <td>10 points</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>01/02/2024</td>
                            <td>1.0 Kg</td>
                            <td>45 points</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>01/02/2024</td>
                            <td>1.5 kg</td>
                            <td>25 points</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>15/02/2024</td>
                            <td>3.7 kg</td>
                            <td>30 points</td>
                            <td>30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoriqueDepots