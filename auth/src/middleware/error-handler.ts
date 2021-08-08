import { Request, Response, NextFunction } from 'express';
import RequestValidationError from '../errors/request-validation-error';
import DatabaseConnectionError from '../errors/database-connection-error';
import CustomError from '../errors/custom-error';

export default function errorhandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return res.status(err.status).send({ errors: err.serialiseError() });
  }
  res.status(500).send({ errors: [{ message: 'An unknown error occured' }] });
}
