import React from 'react';
import './nav.css';

const Nav = ()=> {
  return (
  <>
<nav className="navbar">
      <div className="navbar-container">
    <img src="./images/logo.png" alt = "my logo img"/>
    <div className='navbar-div'>
    <ul className="navbar-list">
        
        <li className="navbar-item"><a href="#">Home</a></li>
        <li className="navbar-item"><a href="#">About</a></li>
        <li className="navbar-item"><a href="#">Courses</a></li>
        <li className="navbar-item"><a href="#">Blog</a></li>
        <li className="navbar-item"><a href="#">Contact</a></li>


      </ul>
    </div>
        
      <button className="btn">Get Started</button>
      </div>
    </nav>
  </>
    
  );
}

export default Nav;
