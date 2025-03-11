import React from "react";
import '../styles/Footer.css';
import payment from "../assets/payment.jpg";
import { FaFacebook, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (

    <footer className="footer">

        <div className="first-col">
            <div className="newsletter">
                <h2>Stay up to date</h2>
                <p>Subscribe to our newsletter and get 20% discount offer in your first order.</p>
                <form className="newsletter-form">
                    <input type="textbox" placeholder="Enter your email" required className="email-input"/>
                    <button type="submit" className="submit-button"> SUBMIT </button>
                </form>
            </div>

            <div className="contact">
                <h2>Happy to help</h2>
                <p>1279 Thorn Street, NY</p>
                <p>Phone: 307-549-2480</p>
                <p>Mail: demo@gmail.com</p>
                <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
                </div>
            </div>
        </div>   
      

      <div className="footer-columns">
        <div className="column">
          <h3>SHOP</h3>
          <ul>
            <li>Body Lotion</li>
            <li>Computer Gadget</li>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>General</li>
            <li>Shoes</li>
            <li>Sports</li>
          </ul>
        </div>
        <div className="column">
          <h3>COMPANY</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="column">
          <h3>ABOUT</h3>
          <ul>
            <li>Who We Are</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="accepted-payment">
          <h3>ACCEPT FOR</h3>
          <div className="payment-icons">
            <img src={payment} alt="payment method" width="250" />
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;

