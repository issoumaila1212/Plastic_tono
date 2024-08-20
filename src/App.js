import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './route/LoginForm/LoginForm';
import Dashboard from './route/Dashboard/Dashboard';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk7HPbtrgVUcSt4Z88i1C18k7OfB22yrU",
  authDomain: "plastictono-e26cd.firebaseapp.com",
  databaseURL: "https://plastictono-e26cd-default-rtdb.firebaseio.com",
  projectId: "plastictono-e26cd",
  storageBucket: "plastictono-e26cd.appspot.com",
  messagingSenderId: "936871321591",
  appId: "1:936871321591:web:42967684a5578881d418f2",
  measurementId: "G-BZ82760Y99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
