const express = require("express");
const router = express.Router();
const Request = require("../models/request");
const checkAuth = require("../middlewares/check-auth");

router.get("/requestswithoutplz", (req, res, next) => {
  Request.find({ zip: "00000" }, "phone")
    .limit(20)
    .exec()
    .then(docs => res.json(docs))
    .catch(err => next(err));
});

router.post("/requests", checkAuth, (req, res, next) => {
  if (req.body.phone && req.body.zip && req.body.request) {
    Request.create({
      phone: req.body.phone,
      zip: req.body.zip,
      request: req.body.request
    })
      .then(data => res.json(data))
      .catch(err => next(err));
  } else {
    res.json({
      error: "One or more input fields are empty"
    });
  }
});

router.delete("/request", checkAuth, (req, res, next) => {
  if (req.body.id) {
    Request.findByIdAndDelete(req.body.id)
      .exec()
      .then(() => res.send("Success"))
      .catch(err => next(err));
  } else {
    res.json({
      error: "No id"
    });
  }
});

module.exports = router;
