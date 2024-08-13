import React from 'react';
import './Notification.css';

const Notification = ({ type, time }) => {
  const getColor = () => {
    switch (type) {
      case 'full':
        return 'red';
      case 'operational':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'full':
        return '/icons/kiosque_rouge.png';
      case 'operational':
        return '/icons/Kiosque_vert.png';
      default:
        return '/icons/default-icon.png';
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'full':
        return 'Niveau : Kiosques Pleins';
      case 'operational':
        return 'Niveau : Kiosques Non pleins';
      default:
        return 'Notification';
    }
  };

  return (
    <div className={`notification ${getColor()}`}>
      <div className="notification-icon">
        <img src={getIcon()} alt={type} />
      </div>
      <div className="notification-content">
        <h4>{getTitle()}</h4>
        <p>Il y a {time}</p>
        <button className={`btn ${getColor()}`}>Voir</button>
      </div>
    </div>
  );
};

export default Notification;
