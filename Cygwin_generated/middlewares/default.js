const helmet =  require("helmet");
const cors = require("cors");
const express = require("express");
const basicAuth = require("express-basic-auth");

module.exports = server => {    
    //apply CORS();
    server.use(cors());
    //apply HTTP security headers
    server.use(helmet());
    //applies basic authentication -- checks Authentication header
    server.use(  
        basicAuth({
            users: {
                admin: "supersecret"
            },
            challenge: true
        })
    )
    //handles request JSON (no need to use parser lib)
    server.use(express.json());
};