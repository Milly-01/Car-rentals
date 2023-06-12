import React from "react";


// Importing the Navbar CSS File - This file will add css properties that bootstrap can't
import "./Navbar.css";
// Importing the Navbar CSS File - This file will add css properties that bootstrap can't


// Routes
import { Link } from "react-router-dom";
// Routes


// User context so that all my routes can have the email
import { UserContext } from "./UserContext";
import { useContext } from "react";
// User context so that all my routes can have the email

import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();
    const {emailContext, setEmailContext, nameContext, setNameContext} = useContext(UserContext);

  

    return(
        <div>


            <nav className="navbar navbar-expand-lg border-me">
                <div className="container-fluid">

                    <label className="navbar-brand">Rent The Car</label>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link">Disabled</a>
                        </li>
                      </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                          
                            {/*User Profile Picture*/}
                            
                            {/*User Profile Picture*/}


                            {
                                nameContext === ""? 

                                    <Link to={"/signin"} className="user-image">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 heroicon-user-image ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>

                                    </Link>

                                    :

                                    <form className="d-flex"> 
                                          <button 
                                                type="submit" 
                                                className="btn btn-primary my-btns" 
                                                onClick={function(){
                                                    localStorage.removeItem("nameContext");
                                                    setNameContext("");
                                                    setEmailContext("");
                                                    navigate("/");
                                                }}>Logout</button>
                                                
                                          <div className="user-image2">
                                              <label className="initial-me">{nameContext[0].toUpperCase()}</label>
                                          </div>
                                         
                                    </form>

                                
                                
                                
                                
                            }

                            
                
                        </form>

                       
                    </div>
 
                 </div>

                </nav>


        </div>
    );
}

export default Navbar;