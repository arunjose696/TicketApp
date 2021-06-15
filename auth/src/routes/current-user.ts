import express from "express"
const router=express.Router()
router.get("/currentuser",(req,res)=>{
  res.send("hi there")

})

export {router as CurrentUserRouter}