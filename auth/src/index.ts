import express from "express";
import {CurrentUserRouter} from "./routes/current-user"
import {SignInRouter} from "./routes/signin"
import {SignOutRouter} from "./routes/signout"
import {SignUpRouter} from "./routes/signup"

import RouteNotFoundError from "./errors/route-not-found";

import errorhandler from  "./middleware/error-handler"
const app=express()
app.use(express.json())
app.use(CurrentUserRouter)
app.use(SignInRouter)
app.use(SignOutRouter)
app.use(SignUpRouter)



app.get("/api/users",(req,res)=>{
  res.send("hi there")
})

app.get("*",(req,res)=>{
  throw new RouteNotFoundError();
})

app.use(errorhandler)

app.listen(3000,()=>{
  console.log("listening on port 3000")
})
