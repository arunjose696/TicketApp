
import CustomError from "./custom-error"

export default class DatabaseConnectionError extends CustomError{
  reason="Databsase connection failed"
  status=502
  constructor(){
    super("Databsase connection failed")
    Object.setPrototypeOf(this,DatabaseConnectionError.prototype)

  }
  serialiseError(){

    return [{message:this.reason}]
    
  }

}