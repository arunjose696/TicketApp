import express from "express"
import { Request,Response } from "express"
import {body} from "express-validator"
import { validateRequest } from "../middleware/validateRequest"
import { User } from "../models/user"
import jwt from "jsonwebtoken"
import { Password } from "../services/password"
import { BadRequestError } from "../errors/bad-request-error"
const router=express.Router()


router.post("/api/users/signin",
[body("email")
  .isEmail()
  .withMessage("Emai is not valid"),
  body("password")
  .trim()
  .isLength({ min: 5 ,max:20})
  .withMessage("password should be between 5 to 20 chars")],


async (req:Request,res:Response)=>{
  
  validateRequest(req)
  const {email,password}=req.body
  const userData=await User.findOne({email}).exec()
  if(!userData){
    throw new BadRequestError("user does not exist")

  }

  if (userData){
    if(! await Password.comparePasswords(userData.password,password)){
      throw new BadRequestError("wrong password")

    }  
    var token = jwt.sign(
      { id:userData.id,
      email: userData.email }, process.env.JWT_KEY as string
      )
      req.session={
        "JWT" : token
      }
    res.status(200).send(userData)
  }


})

export {router as SignInRouter}