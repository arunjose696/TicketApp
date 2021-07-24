import {body,validationResult} from "express-validator"
import {Request} from "express"
import RequestValidationError from "../errors/request-validation-error"
export function validateRequest(req:Request){
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    throw new RequestValidationError(errors.array())
  }


}