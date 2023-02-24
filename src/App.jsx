import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import countries from './countries.json';
import Navbar from './components/Navbar.jsx';
import CountriesList from './components/CountriesList';
//import CountriesDetailsPage from './components/CountryDetails';

// src/App.jsx
import './App.css';

function App() {

const [countries, setCountries] = useState('');

  return <div className='App'>
  <Navbar />
  <Routes>

  <Route path='/countries'
    element={ <CountriesList countrie={countries} /> }
  />


    
  </Routes>
  
  </div>
}


export default App
