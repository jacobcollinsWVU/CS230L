import logo from './logo.svg';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from './Navbar'; 
import Card from './Card'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App">
      <h1>CS230L</h1>
        <h2>Section - 03</h2>
          <p>WVU ID: 800321122</p>
          <p>Hi I am Jacob</p>
    </div>
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
