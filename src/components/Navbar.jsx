// src/components/Navbar.js
// src/components/Navbar.js

import { Link, NavLink } from "react-router-dom";   // <== IMPORT

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
     <div class="container">
     <a class="navbar-brand" href="/">LAB - WikiCountries</a>
      <ul>
        {/* <Link to="/"> Home </Link> */}
        {/* <Link to="/about"> About </Link> */}
        {/* <Link to="/projects"> Projects </Link> */}
        
        {/*    ADD    */}
    
        <NavLink 
          to="/CountriesList" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Countries List
        </NavLink>
        
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
