import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import './card.css';

const Card = ({ title, value, color, icon, className }) => {
  return (
    <BootstrapCard className={`card ${color} ${className}`}>
      <BootstrapCard.Body className="card-body">
        <div className="icon-container">
          <i className={`bi ${icon}`}></i>
        </div>
        <div className="text-container">
          <BootstrapCard.Title>{title}</BootstrapCard.Title>
          <BootstrapCard.Text>{value}</BootstrapCard.Text>
        </div>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
