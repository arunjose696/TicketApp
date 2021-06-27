export default abstract class CustomError extends Error{

  abstract status:number
  constructor(message:string){
    super(message)
    Object.setPrototypeOf(this,CustomError.prototype)

  }
  abstract serialiseError():{message:string;
  field?:string
  }[]
   



}