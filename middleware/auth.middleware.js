const express = require("express");
const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    jwt.verify(token, "nasir1234", (err, decoded) => {
      if (decoded) {
        req.body.user_id = decoded.user_id;
        next();
      } else {
        res.send("Please Login First");
      }
    });
  } else {
    res.send("Please Login First");
  }
};

module.exports = {
  authentication,
};
