import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './card.css';
import { FaRecycle, FaUsers, FaStar, FaUserFriends } from 'react-icons/fa';

const Card = ({ title, value, color, icon, className }) => {
  return (
    <div className={`card ${color}`}>
      <div className="card-content">
        <div className="card-icon">
          <i className={icon}></i>
        </div>
        <div className="card-text">
          <p>{title}</p>
          <h2>{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
