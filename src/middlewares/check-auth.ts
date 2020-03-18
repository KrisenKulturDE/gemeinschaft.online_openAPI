import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/HttpException";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
    res.locals.userData = decoded;
    next();
  } catch (error) {
    next(new HttpException(401, "Auth failed"));
  }
};

export default checkAuth;
