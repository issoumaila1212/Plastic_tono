import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure chart.js is loaded
import './chart.css';

const BarChart = ({ data, title }) => (
  <div className="chart">
    <h3>{title}</h3>
    <Bar data={data} />
  </div>
);

const LineChart = ({ data, title }) => (
  <div className="chart">
    <h3>{title}</h3>
    <Line data={data} />
  </div>
);

export { BarChart, LineChart };
