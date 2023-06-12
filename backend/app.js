require('dotenv').config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


app.use(express.json());

// Enabling reading of data from from frontend forms during requests
app.use(bodyParser.urlencoded({extended: true}));

// Store all out backend static files, i.e css, images ...
app.use(express.static("public"));



mongoose.connect(process.env.MONGO, {useNewUrlParser: true})
    .then(function(result){
        console.log("Connected to database");
    })
    .catch(function(error){
        console.log(error);
    })



const signupSchema = new mongoose.Schema({
    s_name: String,
    s_emailaddress: String,
    s_password: String
});    
   



const User = mongoose.model("User", signupSchema);





app.use(function(req, res, next){
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    res.set("x-requested-with", "XMLHttpRequest");
    res.set("Access-Control-Expose-Headers","Content-Encoding,api_key");
    res.set("origin","http://localhost:3000");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});




app.get("/", function(req, res){
    res.send("Hello");
});

app.post("/api/signup", function(req, res){
    let {su_name, su_email, su_password} = req.body;
    User.find({s_emailaddress: su_email}).then(
        function(result){
            if(result.length===0){
                const my_user = new User({
                    s_name: su_name,
                    s_emailaddress: su_email,
                    s_password: su_password
                });
                my_user.save();
                res.send("Success");
            }else{
                res.send("Fail");
            }
        }
    );

});

app.post("/api/signin", function(req, res){
    let {si_email, si_password} = req.body;
    User.find({s_emailaddress: si_email, s_password: si_password}).then(
        function(result){
            if(result.length!==0){
                res.send(result[0].s_name);
            }else{
                res.send("Fail");
            }
        }
    );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log(`Server running on port ${PORT}`);
});