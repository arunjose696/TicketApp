import express from "express"
import {Request,Response} from "express"
const router=express.Router()
router.get("/api/users/signout",(req:Request,res:Response)=>{
  req.session=null
  res.send({})

})

export {router as SignOutRouter}