import React from 'react';
import './App.css';
import ParticleBackground from './components/Particle/ParticleBackground';
import Navigation from './components/Navigation';
import {Services} from './components/Services';
import {Home }from './components/Home';
import {About} from './components/About';
import {Skills }from './components/Skills';
import {Contact} from './components/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "portfolio/",
    element: <Home />, 
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />, 
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  
]);

function App() {
  return (

         <div className="App">
            <ParticleBackground />
            <Navigation />
            <RouterProvider router={router} />
           
        </div>

  );
}

export default App;
