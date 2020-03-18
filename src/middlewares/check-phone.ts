import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/HttpException";

const checkPhone = (req: Request, res: Response, next: NextFunction) => {
  const phoneNumber = req.body.phone;

  if (phoneNumber && typeof phoneNumber === "string") {
    const firstTwo = phoneNumber.substring(0, 2);
    let firstFour = phoneNumber.substring(0, 4);

    if (firstTwo === "00" && firstFour !== "0049") {
      return next(new HttpException(400, "Not a german number!"));
    } else if (firstFour === "0049") {
      firstFour = "0" + phoneNumber.substring(4, 7);
    }

    switch (firstFour) {
      case "0137":
      case "0700":
      case "0900":
      case "0180":
      case "0190":
      case "1180":
        next(new HttpException(400, "Number not allowed"));
      default:
        next();
    }
  } else {
    next(new HttpException(400, "No phone number provided"));
  }
};

export default checkPhone;
