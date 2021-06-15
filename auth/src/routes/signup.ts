import express,{Request,Response} from "express"
import {body,validationResult} from "express-validator"
import errorhandler from  "../middleware/error-handler"
import RequestValidationError from "../errors/request-validation-error"
import DatabaseConnectionError from "../errors/database-connection-error"
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

  (req:Request,res:Response)=>{
    
    const errors=validationResult(req)    
    if (!errors.isEmpty()){
      throw new RequestValidationError(errors.array());      
    }
    console.log("validation check pass")   



    const {email,password}=req.body
    throw new DatabaseConnectionError();
    
    console.log("user created")

    res.send({})

  })

export {router as SignUpRouter}