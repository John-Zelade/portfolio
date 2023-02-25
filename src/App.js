import React from 'react';
import './App.css';
import ParticleBackground from './components/Particle/ParticleBackground';
import Navigation from './components/Navigation';
import {Services} from './components/Services';
import {Home }from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (

         <div className="App">
            <ParticleBackground />
            <Navigation />
            <BrowserRouter basename='/portfolio'>
              <Routes>
                  <Route exact path="/portfolio" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/services" element={<Services/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </BrowserRouter>
        </div>

  );
}

export default App;
