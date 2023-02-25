import React from "react";
import './Navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav-bar navbar-expand-md navigation fixed-top">
        <div className="row">
        <div className="col logo-con">
            <div className="logo">JZ</div>
        </div>
        <div className="col-3 navbar-toggler-con">
          <button 
          type="button" 
          className=" navbar-toggler" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbar-con"
          aria-expanded="false" 
          aria-controls="navbar-con"
          aria-label="Toggle navigation"
          >
           <i className="fa-solid fa-bars"></i>
          </button>
          </div>
        <div className="collapse navbar-collapse navbar-con" id="navbar-con"> 
            <ul className="navbar-nav">
                <li className="nav-item"><Link to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/about'>About</Link></li>
                <li className="nav-item"><Link to='/services'>Services</Link></li>
                <li className="nav-item"><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        </div>
    </div>
  );
}

export default Navigation;