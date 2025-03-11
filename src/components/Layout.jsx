import NavBar from "./Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
function Layout () {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
      
    );
}
export default Layout;