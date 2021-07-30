import express from "express";
import "express-async-errors"

import {CurrentUserRouter} from "./routes/current-user"
import {SignInRouter} from "./routes/signin"
import {SignOutRouter} from "./routes/signout"
import {SignUpRouter} from "./routes/signup"
import cookieSession from "cookie-session"

import  mongoose  from "mongoose";


import RouteNotFoundError from "./errors/route-not-found";

import errorhandler from  "./middleware/error-handler"
const app=express()
app.set('trust proxy', true);
app.use(express.json())
app.use(cookieSession({
  secure: process.env.NODE_ENV!='test',
  signed:false 
}))
app.use(CurrentUserRouter)
app.use(SignInRouter)
app.use(SignOutRouter)
app.use(SignUpRouter)



app.get("/api/users",(req,res)=>{
  res.send("hi there")
})

app.get("*",async (req,res,next)=>{
  throw new RouteNotFoundError();
})

app.use(errorhandler)

export {app}