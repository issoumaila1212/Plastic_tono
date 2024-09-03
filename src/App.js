// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Dashboard from "./pages/Dashboard";
import Home from "./components/home/Home";
import Users from "./components/Users/Users";
import Kiosks from "./components/kiosks/Kiosks";
import FullKiosks from "./components/kiosks/FullKiosks";
import NonFullKiosks from "./components/kiosks/NonFullKiosks";
import UserDetails from "./components/Users/UserDetails";
import Notifications from "./components/Notifications/Notifications";
import TransactionHistory from "./components/HistoriqueTransaction/TransactionHistory";
import TransactionHistoryDetails from "./components/DetailsUser/TransactionHistoryDetails";
import DepositHistoryDetails from "./components/DetailsUser/DepositHistoryDetails";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Route parent pour le tableau de bord */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Routes enfants pour les pages du tableau de bord */}
          <Route path="" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="kiosks" element={<Kiosks />} />
          <Route path="kiosks/full" element={<FullKiosks />} /> {/* Route pour les kiosques pleins */}
          <Route path="kiosks/nonfull" element={<NonFullKiosks />} /> {/* Route pour les kiosques non pleins */}
          <Route path="notifications" element={<Notifications />} />
          <Route path="usersdetails" element={<UserDetails />} />
          <Route path="user-details/transactions" element={<TransactionHistoryDetails />} /> {/* Route pour les détails des transactions */}
          <Route path="user-details/depots" element={<DepositHistoryDetails />} /> {/* Route pour les détails des dépôts */}

          <Route path="transactions" element={<TransactionHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
