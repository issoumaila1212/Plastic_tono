import React from 'react'
import './TransactionUser.css'
import { FaUser,FaBoxOpen} from 'react-icons/fa';

const TransactionUser = () => {
    return (
        <div className="transaction-user-container">
            <div className="transaction-header">
                <h1>Historique des transactions</h1>
                <i className="bi bi-wallet2 header-icon"></i>
            </div>
            <div className="user-info">
                <FaUser className="user-icon" />
                <h2>Tall Madani</h2>
                </div>
                <div className="user-details">  
                    <p><strong>Téléphone :</strong> 77335620</p>
                    <p><strong>Points accumulés :</strong> 2500</p>
                </div>
            
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type de transaction</th>
                        <th>Points</th>
                        <th>Montant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01/02/2024</td>
                        <td>Conversion</td>
                        <td>25 points</td>
                        <td>10000 Fcfa</td>
                    </tr>
                    <tr>
                        <td>15/02/2024</td>
                        <td>Conversion</td>
                        <td>50 points</td>
                        <td>5000 Fcfa</td>
                    </tr>
                    <tr>
                        <td>15/02/2024</td>
                        <td>Conversion</td>
                        <td>10 points</td>
                        <td>1000 Fcfa</td>
                    </tr>
                    <tr>
                        <td>01/02/2024</td>
                        <td>Conversion</td>
                        <td>45 points</td>
                        <td>4500 Fcfa</td>
                    </tr>
                    <tr>
                        <td>01/02/2024</td>
                        <td>Conversion</td>
                        <td>25 points</td>
                        <td>25000 Fcfa</td>
                    </tr>
                    <tr>
                        <td>15/02/2024</td>
                        <td>Conversion</td>
                        <td>30 points</td>
                        <td>3000 Fcfa</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TransactionUser