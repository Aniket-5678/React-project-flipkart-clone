import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {

  return (
    <div>
        <div className="main-Nav">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png" alt='logo' className="website-logo" />
            <input  className="search-bar" type="text" name="name" id="name"  placeholder="search for products and more brands"/>
            
              <Link className="nav"><i class="fa-solid fa-business-time"></i>Beacome a seller</Link>
              <Link className="nav"><i class="fa-solid fa-user"></i>signup</Link>
              <Link to="/cart" className="nav" >cart<i class="fa-solid fa-cart-shopping"></i></Link>
            
        </div>
<nav className="navbar">
    <Link to="/" className="sec-nav">Home</Link>
    <Link to="/phones"  className="sec-nav">Mobile phones</Link>
    <Link to="/fashions" className="sec-nav">fashions</Link>
    <Link to="/" className="sec-nav">Electronics</Link>
    <Link to="/" className="sec-nav">Home & Furniture</Link>
</nav>
    
    </div>
  )
}

export default Navbar