import * as express from "express";
import Request, { IRequest } from "../models/request";
import checkAuth from "../middlewares/check-auth";
import HttpException from "../exceptions/HttpException";

const router = express.Router();

router.post("/requests", checkAuth, (req, res, next) => {
  if (req.body.phone && req.body.zip) {
    Request.create({
      phone: req.body.phone,
      zip: req.body.zip,
      timestamp: Date.now(),
      request:
        req.body.request || req.body.request === 0 ? req.body.request : -1
    })
      .then((data: IRequest) => {
        res.json(data);
      })
      .catch((err: Error) => next(new HttpException(500, null)));
  } else {
    next(new HttpException(400, "One or more inputs are empty"));
  }
});

export default router;
