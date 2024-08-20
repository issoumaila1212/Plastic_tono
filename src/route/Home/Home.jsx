import React from 'react'
import { Outlet } from 'react-router-dom';

import Card from '../../components/card/card';
import { Bar, Line } from 'react-chartjs-2';

import { BarChart, LineChart } from '../../components/chart/chart';
import Map from '../../components/Map/Map';
import Notification from '../../components/Noti/Notification';
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
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
            data: [65, 59, 80, 81, 56, 55, 40],
        },
    ],
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
            data: [65, 59, 80, 81, 56, 55, 40, 85, 60, 75, 90, 100],
        },
    ],
};
  return (
    <div>

      <main>
        <div className="dashboard">
          <div className="content">
            <Row className="top-cards">
              <Col>
                <Card
                  title="Plastique Collecté Aujourd'hui"
                  value="250 kg"
                  color="orange"
                  icon="/icons/bouteille.png"
                />
              </Col>
              <Col>
                <Card
                  title="Utilisateurs Actifs Aujourd'hui"
                  value="120"
                  color="green"
                  icon="/icons/people.png"
                />
              </Col>
              <Col>
                <Card
                  title="Points Distribués ce Mois-ci"
                  value="5000"
                  color="black"
                  icon="/path/to/points_icon.png"
                />
              </Col>
              <Col>
                <Card
                  title="Total Utilisateurs"
                  value="1000"
                  color="blue"
                  icon="/path/to/utilisateurs_total_icon.png"
                />
              </Col>
            </Row>
            <Row className="charts">
              <Col>
              <Bar data={barData} title="Collecte Hebdomadaire (kg)" />
              </Col>
              <Col>
              <Line data={lineData} title="Points Distribués Mensuellement" /></Col>
            </Row>
            <Row className="map">
              <Col className="map-container"><Map /></Col>
            </Row>
            <Row className="notifications">
              <Col><Notification type="full" time="5 minutes" /></Col>
              <Col><Notification type="operational" time="15 minutes" /></Col>
            </Row>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home