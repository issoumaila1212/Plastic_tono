import React from 'react';
import { Link } from 'react-router-dom'; // Importer le composant Link
import "../../styles/sidebar.css";
import { FaUser, FaHome, FaUsers, FaTrash, FaBell, FaHistory } from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar">
    <div className="profile">
    <div className="profile-icon-wrapper">
        <FaUser className="profile-icon" />
      </div>
      <h2>ABDOULAYE DIALLO</h2>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">
          <FaHome className="icon" /> Accueil
          </Link>
        </li>
        <li>
        <Link to="/dashboard/utilisateur">
            <FaUsers className="icon" /> Utilisateurs
        </Link>
        </li>
        <li>
          <Link to="/dashboard/kiosque">
          <FaTrash className="icon" /> Kiosques
          </Link>
        </li>
        <li>
          <Link to="/dashboard/gestionnotification">
          <FaBell className="icon" /> Notifications
          </Link>
        </li>
        <li>
          <Link to="/dashboard/historiquetransaction">
          <FaHistory className="icon" /> Historique des transactions
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
