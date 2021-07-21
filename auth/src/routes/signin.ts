import express from "express"
const router=express.Router()
router.get("/api/users/signin",(req,res)=>{
  process.env.JWT_KEY
  res.send("hi theree"+process.env.JWT_KEY)


})

export {router as SignInRouter}