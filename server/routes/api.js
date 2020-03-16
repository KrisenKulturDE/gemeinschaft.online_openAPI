const express = require("express");
const router = express.Router();
const Request = require("../models/request");

router.post("/requests", (req, res, next) => {
  if (req.body) {
    Request.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "One or more input fields are empty"
    });
  }
});

module.exports = router;
