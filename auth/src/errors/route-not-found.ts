import CustomError from "./custom-error"
export default class RouteNotFoundError extends CustomError{
  status=404
  reason="Route not found"
  constructor(){
    super("Ro")
    Object.setPrototypeOf(this,RouteNotFoundError.prototype)

  }

  serialiseError(){
    return [{message:this.reason}]

  }

}