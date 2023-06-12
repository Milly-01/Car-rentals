import React from "react";

import "./Signin.css";

import Navbar from "./Navbar";

import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

// User context so that all my routes can have the email
import { UserContext } from "./UserContext";
import { useContext } from "react";
// User context so that all my routes can have the email

function Signin(){
    const {emailContext, setEmailContext, nameContext, setNameContext} = useContext(UserContext);


    const navigate = useNavigate();
    const [si_email, setSIEmail] = useState("");
    const [si_password, setSIPassword] = useState("");

    function signinDetails(event){
        event.preventDefault();

        axios.post("http://localhost:3001/api/signin", {si_email, si_password})
            .then(function(response){
                if(response.data === "Fail"){
                    alert("Something went wrong.");
                    
                }else{
                    alert("You are now logged in");
                    setEmailContext(si_email);
                    setNameContext(response.data);
                    navigate("/");
                   
                }
                
            });

    }
    return(
        <div>
            <Navbar/>
            <div className="signin-component">
                <h4 className="my-signin-heading">Signin</h4>
                <form onSubmit={signinDetails}>
                    <input 
                        required 
                        type="email" 
                        placeholder="Email" 
                        className="my-signin-inputs" 
                        onChange={function(event){
                         setSIEmail(event.target.value);
                        }}/>

                    <input 
                        required 
                        type="password" 
                        className="my-signin-inputs" 
                        placeholder="Password" 
                        onChange={function(event){
                         setSIPassword(event.target.value);
                        }}/>
                    <button className="btn my-signin-btn" type="submit">Signin</button>
                    <label className="my-signin-link"><Link to={"/signup"} className="my-signin-link2">Don't have an account? Signup</Link></label>

                </form>
                
            </div>
            
            
        </div>
    );
}

export default Signin;