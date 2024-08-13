import React from 'react';
import './Legend.css';
import KiosqueIcon from '../../Assets/Kiosque.png';

const Legend = () => (
  <div className="legend">
    <h3>Légende</h3>
    <div className="legend-item">
      <span className="icon" style={{ backgroundImage: `url(/icons/kiosque_vert.png)` }}></span>
      Non plein
    </div>
    <div className="legend-item">
      <span className="icon" style={{ backgroundImage: `url(/icons/kiosque_rouge.png)` }}></span>
      Plein
    </div>
  </div>
);

export default Legend;