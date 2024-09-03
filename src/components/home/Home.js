// src/components/home/Home.js
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line
} from "recharts";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaWeightHanging, FaUserAlt, FaStar, FaPercentage } from 'react-icons/fa'; // Import des icônes
import "./Home.css";

const weeklyData = [
  { name: "Lun", collecte: 200 },
  { name: "Mar", collecte: 300 },
  { name: "Mer", collecte: 250 },
  { name: "Jeu", collecte: 400 },
  { name: "Ven", collecte: 300 },
  { name: "Sam", collecte: 350 },
  { name: "Dim", collecte: 500 }
];

const monthlyData = [
  { name: "Jan", points: 2000 },
  { name: "Fév", points: 2500 },
  { name: "Mar", points: 3000 },
  { name: "Avr", points: 2800 },
  { name: "Mai", points: 3500 },
  { name: "Juin", points: 4000 },
  { name: "Juil", points: 4500 },
  { name: "Août", points: 5000 }
];

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 12.6392, // Remplacez par vos coordonnées
  lng: -8.0029  // Remplacez par vos coordonnées
};

function Home() {
  return (
    <div className="home-container">
      <div className="stats-cards">
        {/* Cartes de statistiques avec icônes */}
        <div className="card orange">
          <FaWeightHanging className="card-icon" />
          <h3>Collecte d'Aujourd'hui</h3>
          <p>250 kg</p>
        </div>
        <div className="card green">
          <FaUserAlt className="card-icon" />
          <h3>Utilisateurs Actifs Aujourd'hui</h3>
          <p>120</p>
        </div>
        <div className="card yellow">
          <FaStar className="card-icon" />
          <h3>Points Distribués ce Mois-ci</h3>
          <p>5000</p>
        </div>
        <div className="card white">
          <FaPercentage className="card-icon" />
          <h3>Total Utilisateurs</h3>
          <p>65%</p>
        </div>
      </div>
      
      {/* Conteneur des graphiques */}
      <div className="charts-container">
        <div className="chart">
          <h4>Collecte Hebdomadaire (Kg)</h4>
          <BarChart width={300} height={200} data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="collecte" fill="#2e7d32" />
          </BarChart>
        </div>
        <div className="chart">
          <h4>Points Distribués Mensuellement</h4>
          <LineChart width={300} height={200} data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="points" stroke="#ffc107" />
          </LineChart>
        </div>
      </div>

      {/* Carte Google Maps */}
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyAVCJpQFCtODkzMqMxLi-5QRYAmhzm0az0">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            <Marker position={center} />
            {/* Ajouter d'autres marqueurs ici si nécessaire */}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Informations sur les kiosques */}
      <div className="kiosks-info">
        <div className="kiosk-status full">
          <h4>Niveau : Kiosques Pleins</h4>
          <p>Il y a 5 minutes</p>
          <button>Voir</button>
        </div>
        <div className="kiosk-status not-full">
          <h4>Niveau : Kiosques Non Plein</h4>
          <p>Il y a 15 minutes</p>
          <button>Voir</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
