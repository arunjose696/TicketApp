import express,{Request,Response} from "express"
import {body} from "express-validator"
import DatabaseConnectionError from "../errors/database-connection-error"
import { User } from "../models/user"
import { BadRequestError } from "../errors/bad-request-error"
import {Password} from "../services/password"
import { validateRequest } from "../middleware/validateRequest"
import jwt  from  'jsonwebtoken'

const router=express.Router()
router.post(
  "/api/users/signup",
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
    const existingUser= await User.findOne({email})
    if(existingUser){
      throw new BadRequestError("Email already exists")
    }
    const user = User.build({email,password})
    await user.save()
    
    var token = jwt.sign(
      { id:user.id,
      email: user.email }, process.env.JWT_KEY as string
      )
    
    req.session={
      JWT : token
    }

    return res.status(201).send(user)






  })

export {router as SignUpRouter}