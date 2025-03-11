import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FiUser, FiHeart } from "react-icons/fi";
import { PiShoppingBag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import "../styles/style.css";
import { useState } from "react";
import LogInForm from "./LogInForm";

const NavBar = () => {
  const[modal,setModal]=useState(false);
  const HandleLogInForm=()=>{
    setModal(!modal);
  }
  const Categories = ['Body Lotion','Computer Gadget','Electronics','Fashion','General','Shoes','Sports Wear','Watches'];
  const Trending = ['Shoes','Sports Wear','Watches'];
  
  return (
   
      <div className="navbar">
        {modal && <LogInForm HandleLogInForm={HandleLogInForm}/>}
       
        <div className="navbar-top">
          <div className="logo">Botiga</div>
          <div className="search-bar">
            <select className="category-select">
              <option value="all">All Categories</option>
              {Categories.map((category,index) => (<option key={index} value={category.toLowerCase()}>{category}</option>))}
            </select>
            <input type="text" placeholder="Search products..." />
            <button className="search-btn">
            <CiSearch className="icon" />
            </button>
          </div>
          <div className="icons">
            <Link to = "/LogInForm"><FiUser className="icon" onClick={HandleLogInForm}/></Link>
            <div className="icon-badge">
              <PiShoppingBag className="icon" />
              <span className="badge">0</span>
            </div>
            <div className="icon-badge">
              <FiHeart className="icon" />
              <span className="badge">0</span>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <div className="categories"><select className="Trend-select">
              <option value="all">Trending Categories</option>
              {Trending.map((category,index) => (<option key={index} value={category.toLowerCase()}>{category}</option>))}
            </select></div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/vendors">Vendors</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="phone">
            <FaPhoneAlt className="phone-icon" />
            800-123-4567
          </div>
          
        </div>
      </div>
   
  );
};

export default NavBar;
