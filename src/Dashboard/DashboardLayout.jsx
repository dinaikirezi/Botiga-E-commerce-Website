import React from "react";
import SideBar from "./SideBar";
import DashboardNavBar from "./DashboardNavBar";
import { Outlet } from "react-router-dom";
import "../Dashboard/DashboardStyles/DashboardLayout.css";

const DashboardLayout = () => {
    return (
<div className="dashboardContainer">
    <div className="firstPart">
        <SideBar/>
    </div>
    <div className="secondPart">
        <DashboardNavBar/>
        <Outlet/>
    </div>
    
</div>
    );
};
export default DashboardLayout;