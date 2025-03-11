import React from "react";
import CesarePaciotti from "../assets/CesarePaciotti.jpeg";
import NikeStore from "../assets/NikeStore.jpg";
import PaciottiStore from "../assets/PaciottiStore.jpg";
import PhilKnight from "../assets/PhilKnight.jpeg";
import RalphLaurenStore from "../assets/RalphLaurenStore.png";
import RalphLauren from "../assets/RalphLauren.jpeg";
import GucciStore from "../assets/GucciStore.jpeg";
import Gucci from "../assets/Gucci.jpeg";
import HermesStore from "../assets/HermesStore.jpeg";
import Hermes from "../assets/Hermes.jpeg";
import LouisVuittonStore from "../assets/LouisVuittonStore.jpeg";
import LouisVuitton from "../assets/LouisVuitton.jpeg";
import "../styles/Vendors.css";
import { FaArrowRight } from "react-icons/fa";

const vendors = [
  {
    id: 1,
    name: "Cesare Paciotti's Store",
    rating: 5,
    location: "Central Park, New York, United States (US)",
    image: PaciottiStore,
    profileImage: CesarePaciotti,
  },
  {
    id: 2,
    name: "Nike's Store",
    rating: 4,
    location: "Central Park, New York, United States (US)",
    image: NikeStore,
    profileImage: PhilKnight,
  },
  {
    id: 3,
    name: "Ralph Lauren's Store",
    rating: 4.5,
    location: "Central Park, New York, United States (US)",
    image: RalphLaurenStore,
    profileImage: RalphLauren,
  },
  {
    id: 4,
    name: "Gucci's Boutique",
    rating: 4,
    location: "Central Park, New York, United States (US)",
    image: GucciStore,
    profileImage: Gucci,
  },
  {
    id: 5,
    name: "Hermes's Fashion",
    rating: 5,
    location: "Central Park, New York, United States (US)",
    image: HermesStore,
    profileImage: Hermes,
  },
  {
    id: 6,
    name: "Louis Vuitton's Trends",
    rating: 4.5,
    location: "Central Park, New York, United States (US)",
    image: LouisVuittonStore,
    profileImage: LouisVuitton,
  },
];

const Vendors = () => {
  return (
    <div className="vendors-container">
      <h1 className="vendors-title">Store List</h1>

      <div className="vendors-header">
        <p>Total stores showing: 6</p>
        <div className="vendors-filters">
          <button className="filter-btn">Filter</button>
          <select className="sort-dropdown">
            <option>Most Recent</option>
            <option>Top Rated</option>
          </select>
        </div>
      </div>

      <div className="vendors-grid">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="vendor-card">
            <img src={vendor.image} alt={vendor.name} className="vendor-image" />
            <div className="vendor-info">
              <h3>{vendor.name}</h3>
              <div className="vendor-rating">
                {"★".repeat(Math.floor(vendor.rating))}{" "}
                {vendor.rating % 1 !== 0 ? "½" : ""}
              </div>
              <p>{vendor.location}</p>
            </div>
            <img
              src={vendor.profileImage}
              alt="profile"
              className="vendor-profile"
            />
            <button className="arrow-btn">
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;
