import React from "react";
import bottle from "../assets/Bottle.jpg";
import ChristianLouboutin from "../assets/ChristianLouboutin.jpg";
import HeadSets from "../assets/HeadSets.jpeg";
import "../styles/Home.css";
import { CiHeart } from "react-icons/ci";
import { Star } from "lucide-react";

const cards = [
    {
        id: 1,
        image: HeadSets,
        cardTitle: "Headset Gamer Legion Plus",
        cardContent: "$22.00 – $55.00",
        colors: ["#C0C0C0", "#8B5E3B", "#EAEAEA"],
    },
    {
        id: 2,
        image: ChristianLouboutin,
        cardTitle: "Christian Louboutin BellaRose",
        cardContent: "$22.00 – $33.00",
        colors: ["#C0C0C0", "#EAEAEA"],
    },
    {
        id: 3,
        image: bottle,
        cardTitle: "All In One Bottle",
        cardContent: "$22.00 – $55.00",
        colors: ["#C0C0C0", "#8B5E3B", "#EAEAEA"],
    },
    
];

const Home = () => {
    return (
        <div>
            <div className="shop-container"> <h1>Explore our latest and greatest electronics</h1>
            <button className="shop-button">Shop Now</button></div>
           
            <div className="card-header">Popular Catergories</div>
        
        <section className="Holder">
            <div className="card-container">
                {cards.map((cardData) => (
                    <div key={cardData.id} className="card">
                        <div className="heart-icon">
                            <CiHeart size={20} />
                        </div>
                        <div className="card-image">
                            <img src={cardData.image} alt={cardData.cardTitle} />
                            <div className="hover-buttons">
                                <button className="hover-button">SELECT OPTIONS</button>
                                <button className="hover-button">QUICK VIEW</button>
                            </div>
                        </div>
                        <div className="text-1">{cardData.cardTitle}</div>
                        <div className="text-2">{cardData.cardContent}</div>

                        <div className="product-rating">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#FFA500" stroke="none" />
                            ))}
                        </div>

                        <div className="product-colors">
                            {cardData.colors.map((color, i) => (
                                    <span
                                    key={i}
                                    className="color-circle"
                                    style={{ backgroundColor: color }}
                                ></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
