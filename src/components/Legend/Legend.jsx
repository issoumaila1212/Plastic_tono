import React from 'react';
import './Legend.css';

const Legend = () => (
  <div className="legend">
    <h3>Légende</h3>
    <div className="legend-item">
      <span className="icon operational"></span>
      Opérationnel
    </div>
    <div className="legend-item">
      <span className="icon full"></span>
      Plein
    </div>
    <div className="legend-item">
      <span className="icon maintenance"></span>
      Maintenance
    </div>
  </div>
);

export default Legend;