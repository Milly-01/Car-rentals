import react from "react";

// My imports components
import Navbar from "./Navbar";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
// My imports components

// Need this for creating routes
import {BrowserRouter, Routes, Route} from "react-router-dom";
// Need this for creating routes


// User Context, so that some specific data can be available on all routes
import { UserContext } from "./UserContext";
// User Context, so that some specific data can be available on all routes

// Need useState to put values inside variable
import { useState, useEffect } from "react";
// Need useState to put values inside variable


function App(){

    const [emailContext, setEmailContext] = useState("");
    const [nameContext, setNameContext] = useState("");


    
     // Login Email Address made available to every page after login in using User Context
     useEffect(()=>{
        const data = localStorage.getItem("emailContext");
            if(data){
                setEmailContext(data);
            }
         },[])
  
       useEffect(()=>{
        localStorage.setItem("emailContext", emailContext);
         },[emailContext]);
      // Login Email Address made available to every page after login in using User Context


       // Login Names made available to every page after login in using User Context
     useEffect(()=>{
        const data = localStorage.getItem("nameContext");
            if(data){
                setNameContext(data);
            }
         },[])
  
       useEffect(()=>{
        localStorage.setItem("nameContext", nameContext);
         },[nameContext]);
      // Login Email Address made available to every page after login in using User Context


    return(
        <div>
         
            <BrowserRouter>

                <UserContext.Provider value={{emailContext, setEmailContext, nameContext, setNameContext}}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/signin"} element={<Signin/>}/>
                        <Route path={"/nav"} element={<Navbar/>}/>
                    </Routes>

                </UserContext.Provider>
                
            </BrowserRouter>
        </div>
    );
}

export default App;