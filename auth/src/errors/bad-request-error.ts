import CustomError from "./custom-error";
export class BadRequestError extends CustomError{
  status=401
  constructor(message:string){
    super(message)
    Object.setPrototypeOf(this,BadRequestError.prototype)

  }
  serialiseError(){
    return([{message:this.message}])

  }
}