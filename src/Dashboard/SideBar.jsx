import React from "react";
import { LuBadgeHelp, LuGoal, LuLayoutDashboard,LuSettings,LuWallet } from "react-icons/lu";
import { GrLogout, GrTransaction } from "react-icons/gr";
import { SiActualbudget, SiGoogleanalytics } from "react-icons/si";
import "../Dashboard/DashboardStyles/SideBar.css";
import Dashboard from "./Dashboard";

const SideBar = () => {
    return (
<div className="sidebar-container">

    <div className="logo">
        Botiga
    </div>

    <div className="dashboardItems">

        <div className="dashboard" onClick={Dashboard}>
            <LuLayoutDashboard /> Dashboard
        </div>

        <div className="transaction">
            <GrTransaction /> Transactions
        </div>

        <div className="wallet">
            <LuWallet /> Wallet
        </div>

        <div className="goals">
            <LuGoal /> Goals
        </div>

        <div className="budget">
            <SiActualbudget /> Budget
        </div>

        <div className="analytics">
            <SiGoogleanalytics /> Analytics
        </div>

        <div className="settings">
            <LuSettings /> Settings
        </div>

    </div>

    <div className="quickItems">
        <div className="helpMe">
            <LuBadgeHelp /> Help
        </div><div className="logOut">
            <GrLogout/> LogOut
        </div>
    </div>
    
</div>
    );
};
export default SideBar;