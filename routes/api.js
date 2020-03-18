const express = require("express");
const router = express.Router();
const Request = require("../models/request");
const checkAuth = require("../middlewares/check-auth");

router.post("/requests", checkAuth, (req, res, next) => {
  if (req.body.phone && req.body.zip) {
    Request.create({
      phone: req.body.phone,
      zip: req.body.zip,
      timestamp: Date.now(),
      request:
        req.body.request || req.body.request === 0 ? req.body.request : -1
    })
      .then(data => res.json(data))
      .catch(err => next(err));
  } else {
    res.json({
      error: "One or more inputs are empty"
    });
  }
});

module.exports = router;
