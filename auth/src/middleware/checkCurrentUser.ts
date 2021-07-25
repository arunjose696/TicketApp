import {Request, NextFunction, Response } from "express";
import jwt from "jsonwebtoken"
interface UserPayload{
  id:string,
  email:string

}

declare global {
  namespace Express {
      // These open interfaces may be extended in an application-specific manner via declaration merging.
      // See for example method-override.d.ts (https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/method-override/index.d.ts)
      interface Request {
        currentUser?:UserPayload

      }

  }
}

export default function checkCurrentUser(
  req:Request,
  res:Response,
  next:NextFunction
){
  if(!req.session?.JWT){
    return next()
  }
  try {
    var payload = jwt.verify(req.session.JWT, process.env.JWT_KEY!) as UserPayload ;
    req.currentUser=payload
  } catch(err) {
     
  }

  next()

}