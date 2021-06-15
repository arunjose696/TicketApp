
export default class DatabaseConnectionError extends Error{
  reason="Databsase connection failed"
  constructor(){
    super()
    Object.setPrototypeOf(this,DatabaseConnectionError.prototype)

  }

}