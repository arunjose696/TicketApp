import CustomError from "./custom-error";
export default class NotAuthorisedError extends CustomError{
  status=401
  serialiseError(){
    return([{message:"user not authorised"}])     
  }
  constructor(){
    super("user not authorised constructor message")
    Object.setPrototypeOf(this,NotAuthorisedError.prototype)

  }
  



}