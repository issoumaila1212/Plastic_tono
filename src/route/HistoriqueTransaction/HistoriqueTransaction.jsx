import React from 'react'
import './HistoriqueTransaction.css'
import {FaHistory } from 'react-icons/fa';


const HistoriqueTransaction = () => {
    return (
        <div className="historique-container">
            <div className="historique-header">
                <h1>Historique des transactions</h1>
                <FaHistory className="icon" />
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Rechercher" className="search-input" />
                <i className="search-icon bi bi-search"></i>
            </div>

            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Nom et prénom</th>
                        <th>Type de transactions</th>
                        <th>Points convertis</th>
                        <th>Montant</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Diallo Abdoulaye Demba</td>
                        <td>Conversion de points</td>
                        <td>1000 Points</td>
                        <td>10000 fcfa</td>
                        <td>30 juillet 2024 14:00</td>
                    </tr>
                    <tr>
                        <td>Diallo Abdoulaye Demba</td>
                        <td>Conversion de points</td>
                        <td>1000 Points</td>
                        <td>10000 fcfa</td>
                        <td>30 juillet 2024 14:00</td>
                    </tr>
                    {/* Ajoutez d'autres lignes ici */}
                </tbody>
            </table>

            <div className="pagination">
                <span className="page-number">1</span>
                <span className="page-number">2</span>
                <span className="page-number">3</span>
                <span className="page-number">4</span>
                <span className="page-number">5</span>
            </div>
        </div>
    );
};

export default HistoriqueTransaction