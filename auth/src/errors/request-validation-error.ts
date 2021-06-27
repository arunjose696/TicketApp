
import {ValidationError} from "express-validator";
import CustomError from "./custom-error"
export default class RequestValidationError extends CustomError{
  status=400
  constructor(public errors:ValidationError[] ){
    super("Request validation")
    Object.setPrototypeOf(this,RequestValidationError.prototype)
  }
  serialiseError(){
    var serialisedError=this.errors.map((error)=>{

      return { 
        message:error.msg,
        field:error.param
      }
    }  
    )
    return serialisedError


  }
  
}