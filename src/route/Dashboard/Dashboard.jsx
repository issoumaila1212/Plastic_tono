import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Card from '../../components/card/card'; 
import Chart from '../../components/chart/chart';
import { BarChart, LineChart } from '../../components/chart/chart';
import Map from '../../components/Map/Map';
import Legend from '../../components/Legend/Legend';
import Alert from '../../components/Alert/Alert';
import './Dashboard.css'
import { Container, Row, Col } from 'react-bootstrap'; 


const Dashboard = () => {
  const barData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Collecte Hebdomadaire (kg)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Points Distribués Mensuellement',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 85, 60, 75, 90, 100]
      }
    ]
  };
  return (
    <div>
        <nav>
            <Sidebar/>
        </nav>
        <main>
        <div className="dashboard">
      <div className="content">
      <Row className="top-cards">
          <Col><Card title="Plastique Collecté Aujourd'hui" value="250 kg" color="orange" icon="bi bi-recycle" /></Col>
          <Col><Card title="Utilisateurs Actifs Aujourd'hui" value="120" color="green" icon="bi bi-people-fill" /></Col>
          <Col><Card title="Points Distribués ce Mois-ci" value="5000" color="black" icon="bi bi-star-fill" /></Col>
          <Col><Card title="Total Utilisateurs" value="65%" color="blue" icon="bi bi-graph-up" className="total-utilisateurs-card" /></Col>
        </Row>
        <Row className="charts">
        <Col><BarChart data={barData} title="Collecte Hebdomadaire (kg)" /></Col>
        <Col><LineChart data={lineData} title="Points Distribués Mensuellement" /></Col>
        </Row>
        <Row className="map">
          <Col><Map /></Col>
          <Col className="legend-container"><Legend /></Col>
        </Row>
        <Row className="alerts">
          <Col><Alert type="full" time="5 minutes" /></Col>
          <Col><Alert type="maintenance" time="10 minutes" /></Col>
          <Col><Alert type="operational" time="15 minutes" /></Col>
        </Row>
      </div>
    </div>
        </main>
    </div>
  )
}

export default Dashboard