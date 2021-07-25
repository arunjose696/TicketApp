import {Request, NextFunction, Response } from "express";
import  NotAuthorisedError  from "../errors/not-authorised-error";

export default function checkAuthenticated(
  req:Request,
  res:Response,
  next:NextFunction

){
  if(!req.currentUser){
    throw new NotAuthorisedError()
  }
  next()



}