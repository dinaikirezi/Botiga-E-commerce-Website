import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Vendors from "./components/Vendors";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import LogInForm from "./components/LogInForm";
import DashboardLayout from "./Dashboard/DashboardLayout";
import DashboardView from "./Dashboard/DashboardView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Vendors" element={<Vendors/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/LogInForm" element={<LogInForm/>}/>
        </Route>

        <Route path="/" element={<DashboardLayout/>}>
          <Route path="/Dashboard" index element={<DashboardView/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  );
};
export default App;
