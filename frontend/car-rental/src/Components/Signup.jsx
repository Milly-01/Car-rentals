import React from "react";

import "./Signup.css";

import Navbar from "./Navbar";

import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Signup(){
    const [su_name, setSUName] = useState("");
    const [su_email, setSUEmail] = useState("");
    const [su_password, setSUPassword] = useState("");

    const navigate = useNavigate();

    function signupDetails(event){
        event.preventDefault();

        axios.post("http://localhost:3001/api/signup", {su_name, su_email, su_password})
            .then(function(response){
                if(response.data === "Success"){
                    alert("You can now login");
                    navigate("/signin");
                }else{
                    alert("Something went wrong. Please try again");
                }
            });
    }


    return(
        <div>
        <Navbar/>
        <div className="signup-component">
            <h4 className="my-signup-heading">Signup</h4>
            <form onSubmit={signupDetails}>

                <input 
                    required 
                    type="text" 
                    placeholder="Name" 
                    className="my-signup-inputs" 
                    onChange={function(event){
                      setSUName(event.target.value);
                     }}/>

                <input 
                    required 
                    type="email" 
                    placeholder="Email" 
                    className="my-signup-inputs" 
                    onChange={function(event){
                        setSUEmail(event.target.value);
                    }}/>

                <input 
                    required 
                    type="password" 
                    className="my-signup-inputs" 
                    placeholder="Password" 
                    onChange={function(event){
                        setSUPassword(event.target.value);
                    }}/>

                <button className="btn my-signup-btn" type="submit">Signup</button>
                <label className="my-signup-link"><Link to={"/signin"} className="my-signup-link2">Already have an account? Signin</Link></label>

            </form>
            
        </div>
        
        
    </div>
    );
}

export default Signup;