import React from "react";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const LogInForm = ({HandleLogInForm}) => {
   

    <form className="FormContainer">
        <div className="head">
            <div>LogIn</div>
            <IoClose onClick={HandleLogInForm} className="IconHead"/>
        </div>
        <input type="text" placeholder="Enter your UserName" className="Input" />
        <input type="email" placeholder="Enter your E-mail" className="Input" />
        <button type="button" className="Button"> LogIn </button>
    </form>

};
export default LogInForm;