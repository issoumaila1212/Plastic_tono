import React from 'react'
import './User.css'

const User = () => {
    return (
        <div className="page-container">
            <div className="gestion-utilisateurs-container">
                <header className="gestion-utilisateurs-header">
                    <h1><p>GESTION DES UTILISATEURS</p>INSCRITS</h1>
                    <i className="bi bi-people"></i> {/* Ajout de l'icône à droite */}
                </header>
                <div className="search-filter">
                    <input type="text" placeholder="Rechercher" className="search-input" />
                    <select className="filter-select">
                        <option value="">Filtrer par points</option>
                        <option value="1000">1000</option>
                        <option value="1500">1500</option>
                        <option value="2500">2500</option>
                    </select>
                    <button className="filter-button">Filtrer</button>
                </div>
                <table className="utilisateurs-table">
                    <thead>
                        <tr>
                            <th>Nom et prénom</th>
                            <th>Téléphone</th>
                            <th>Points Accumulés</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Diallo Abdoulaye Demba</td>
                            <td>72832413</td>
                            <td>1500</td>
                            <td><button className="action-button"><i className="bi bi-eye"></i></button></td>
                        </tr>
                        <tr>
                            <td>Tall Madani</td>
                            <td>77335620</td>
                            <td>2500</td>
                            <td><button className="action-button"><i className="bi bi-eye"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User