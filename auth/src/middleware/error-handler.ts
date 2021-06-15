import {Request,Response,NextFunction} from "express"
import RequestValidationError from "../errors/request-validation-error"
import DatabaseConnectionError from "../errors/database-connection-error"

export default  function errorhandler(
  err:Error,
  req:Request,
  res:Response,
  next:NextFunction){
    if( err  instanceof RequestValidationError){

      var formattedError={errors:err.errors.map((error=>{return {message:error.msg,field:error.param}}))}
      
      return res.status(400).send(formattedError)
    }
    if(err instanceof DatabaseConnectionError){

      return res.status(500).send({errors:[{message:err.reason}]})
    } 

     res.status(400).send({errors:[{message:"An unknown error occured"}]})

       
}