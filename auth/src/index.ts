import express from "express";
import {CurrentUserRouter} from "./routes/current-user"
import {SignInRouter} from "./routes/signin"
import {SignOutRouter} from "./routes/signout"
import {SignUpRouter} from "./routes/signup"

import errorhandler from  "./middleware/error-handler"
const app=express()
app.use(express.json())
app.use(CurrentUserRouter)
app.use(SignInRouter)
app.use(SignOutRouter)
app.use(SignUpRouter)
app.use(errorhandler)


app.get("/api/users",(req,res)=>{
  res.send("hi there")
})


app.listen(3000,()=>{
  console.log("listening on port 3000")
})
