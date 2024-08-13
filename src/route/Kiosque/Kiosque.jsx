import React from 'react'
import './Kiosque.css'

const Kiosque = () => {
    return (
        <div className="page-containerk">
            <div className="gestion-kiosques-container">
                <header className="gestion-kiosques-header">
                    <h1>GESTION DES KIOSQUES</h1>
                    <div className="header-icons">
                        <i className="bi bi-trash" style={{color: 'brown'}}></i>
                        <i className="bi bi-trash" style={{color: 'green'}}></i>
                    </div>
                </header>

                <div className="status-buttons">
                    <button className="kiosque-plein">
                        <i className="bi bi-trash" style={{color: 'brown'}}></i> KIOSQUE PLEIN
                    </button>
                    <button className="kiosque-non-plein">
                        <i className="bi bi-trash" style={{color: 'green'}}></i> KIOSQUE NON PLEIN
                    </button>
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Rechercher par localisation" className="search-input" />
                </div>

                <table className="kiosques-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Localisation</th>
                            <th>Niveau</th>
                            <th>État</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bacodjicoroni ACI</td>
                            <td><i className="bi bi-trash" style={{color: 'brown'}}></i></td>
                            <td>Opérationnel</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Golf</td>
                            <td><i className="bi bi-trash" style={{color: 'green'}}></i></td>
                            <td>Non opérationnel</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Kalaban Coura</td>
                            <td><i className="bi bi-trash" style={{color: 'green'}}></i></td>
                            <td>Non opérationnel</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sebenicoro</td>
                            <td><i className="bi bi-trash" style={{color: 'brown'}}></i></td>
                            <td>Opérationnel</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Kabala</td>
                            <td><i className="bi bi-trash" style={{color: 'brown'}}></i></td>
                            <td>Opérationnel</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Badalabougou</td>
                            <td><i className="bi bi-trash" style={{color: 'brown'}}></i></td>
                            <td>Opérationnel</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Kiosque