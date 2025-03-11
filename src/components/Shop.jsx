import React from "react";
import BodyLotion from "../assets/BodyLotion.jpeg";
import ComputerMouse from "../assets/ComputerMouse.jpeg";
import AmazonAlexa from "../assets/AmazonAlexa.jpeg";
import HeadSetGamers from "../assets/HeadSetGamers.jpeg";
import JordanShoe from "../assets/JordanShoe.jpeg";
import StylingWatch from "../assets/StylingWatch.jpeg";
import CameraRecorder from "../assets/CameraRecorder.jpeg";
import FacialCream from "../assets/FacialCream.jpeg";
import bottle from "../assets/Bottle.jpg";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import "../styles/Shop.css";

const products = [
    { id: 1, name: 'All In One Bottle', priceRange: '$22.00 - $55.00', rating: 3, colors: ['white', 'chamoisee', 'silver', 'arsenic'], image: bottle },
    { id: 2, name: 'Computer Mouse', priceRange: '$49.00 - $69.00', rating: 5, colors: ['white', 'gray'], image: ComputerMouse },
    { id: 3, name: 'Amazon Alexa', priceRange: '$22.00 - $55.00', rating: 4, colors: ['brown', 'gray', 'white', 'black'], image: AmazonAlexa },
    { id: 4, name: 'Headset Gamer Legion Plus', priceRange: '$22.00 - $55.00', rating: 4, colors: ['brown', 'gray', 'white', 'black'], image: HeadSetGamers },
    { id: 5, name: 'Air Jordan Shoe', priceRange: '$22.00 - $33.00', rating: 5, colors: ['gray', 'white'], image: JordanShoe },
    { id: 6, name: 'Stlying Watches', priceRange: '$22.00 - $55.00', rating: 5, colors: ['brown', 'gray', 'white', 'black'], image: StylingWatch },
    { id: 7, name: 'Fashion Shoes', priceRange: '$29.00 - $65.00', rating: 4, colors: ['brown', 'black'], image: CameraRecorder },
    { id: 8, name: 'Sports Bottle', priceRange: '$18.00 - $40.00', rating: 4, colors: ['green', 'white'], image: FacialCream },
    { id: 9, name: 'Wireless Keyboard', priceRange: '$30.00 - $70.00', rating: 5, colors: ['gray', 'black'], image: BodyLotion },
  ];
  
  const Shop= () => {
    return (
      <div className="shop-page">
        <aside className="filters">
          <h3>Categories</h3>
          <ul>
            <li>Body Lotion (1)</li>
            <li>Computer Gadget (3)</li>
            <li>Electronics (5)</li>
            <li>Fashion (3)</li>
            <li>General (1)</li>
            <li>Shoes (2)</li>
            <li>Sports (3)</li>
            <li>Watch (1)</li>
            <li>Woman Clothes (3)</li>
          </ul>
          <h3>Color</h3>
          <div className="color-options">
            <span className="color brown"></span>
            <span className="color gray"></span>
            <span className="color white"></span>
            <span className="color green"></span>
          </div>
          <h3>Rating</h3>
          <ul>
            <li>★★★★★ (8)</li>
            <li>★★★★☆ (4)</li>
            <li>★★★☆☆ (1)</li>
          </ul>
          <h3>Price</h3>
          <div className="price-slider">
            <input type="range" min="0" max="79" />
            <div className="price-range">
              <span>$0</span>
              <span>$79</span>
            </div>
          </div>
        </aside>
        <main className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container">
                <img src={product.image} alt={product.name} />
                <div className="hover-icons">
                  <button className="cart-btn">
                    <AiOutlineShoppingCart /> Add to Cart
                  </button>
                </div>
                <span className="heart-icon">
                  <AiOutlineHeart />
                </span>
              </div>
              <h4>{product.name}</h4>
              <p>{product.priceRange}</p>
              <div className="rating">{'★'.repeat(product.rating) + '☆'.repeat(5 - product.rating)}</div>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <span key={index} className={`color ${color}`}></span>
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  };
  
  export default Shop;