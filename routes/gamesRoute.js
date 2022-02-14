const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/rps", (req, res, next) => {
  res.render("games", {
    title: "Rock Paper Scissors",
    layout: "../views/layouts/main-games.ejs",
  });
  // ...
});

module.exports = router;
