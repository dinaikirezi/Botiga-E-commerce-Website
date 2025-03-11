import React from "react";
import { GoBell, GoSearch } from "react-icons/go";
import Mamba from "../assets/Mamba.jpeg";
import "../Dashboard/DashboardStyles/DashboardNavBar.css";

const DashboardNavBar = () => {
    return (
<div className="dashboard-container">
   <div className="leftPart">
        <h3>Welcome back, Fox!</h3>
   </div>

   <div className="rightPart">
    <div className="dashboardIcons">
    <GoSearch />
    <GoBell />
    </div>
       
    <div className="profile">
        <img src= {Mamba} alt="user-picture" className="profile-img" />
        <div className="profile-txt">
            <h4>User Names</h4>
            usermail@gmail.com
        </div>
        
    </div>
   </div>
</div>
    );
};
export default DashboardNavBar;