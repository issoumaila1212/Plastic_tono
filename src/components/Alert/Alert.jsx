import React from 'react';
import './Alert.css';

const Alert = ({ type, time }) => {
  let alertClass = '';
  let alertMessage = '';

  switch(type) {
    case 'full':
      alertClass = 'alert-full';
      alertMessage = 'Kiosque Plein';
      break;
    case 'maintenance':
      alertClass = 'alert-maintenance';
      alertMessage = 'Maintenance';
      break;
    case 'operational':
      alertClass = 'alert-operational';
      alertMessage = 'Opérationnel';
      break;
    default:
      break;
  }

  return (
    <div className={`alert ${alertClass}`}>
      <div className="alert-icon"><i className="bi bi-exclamation-circle"></i></div>
      <div className="alert-content">
        <p>{`Alerte : ${alertMessage}`}</p>
        <p>{`Il y a ${time}`}</p>
      </div>
      <button className="alert-button">Messages</button>
    </div>
  );
};

export default Alert;
