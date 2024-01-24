import helmet from "helmet";
import cors from "cors";
import express from "express";
import basicAuth from "express-basic-auth";

export default server => {    
    server.use(cors()); ////inject CORS
    server.use(helmet()); //injects helmet
    server.use(  //applies basic authentication checks Authentication header)
        basicAuth({
            users: {
                admin: "supersecret"
            },
            challenge: true
        })
    )
    server.use(express.json());//handles request JSON (no need to use parser lib)
}