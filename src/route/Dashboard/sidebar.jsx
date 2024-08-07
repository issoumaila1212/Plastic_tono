import React from 'react'
import "../../styles/sidebar.css"
const Sidebar=()=>
  (
    <div className="sidebar">
    <div className="profile">
      <img src="path/to/profile-pic.png" alt="Profile" className="profile-pic" />
      <h2>ABDOULAYE DIALLO</h2>
    </div>
    <nav>
      <ul>
        <li>Accueil</li>
        <li>Utilisateurs</li>
        <li>Kiosques</li>
      </ul>
    </nav>
  </div>
   
  )


export default Sidebar