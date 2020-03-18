import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/HttpException";

const checkPhone = (req: Request, res: Response, next: NextFunction) => {
  const phoneNumber = req.body.phone;

  if (phoneNumber && typeof phoneNumber === "string") {
    const firstTwo = phoneNumber.substring(0, 2);
    let firstFour = phoneNumber.substring(0, 4);

    if (firstTwo === "00" && firstFour !== "0049") {
      return next(new HttpException(400, "Not a german number!"));
    }
    next();
  } else {
    next(new HttpException(400, "No phone number provided"));
  }
};

export default checkPhone;
