import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './route/LoginForm/LoginForm';
import Dashboard from './route/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<LoginForm /> }/>
        <Route path='/dashboard' element={<Dashboard /> }/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
