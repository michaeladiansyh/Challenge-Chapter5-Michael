// const express = require("express");
// const app = express();

const user = require("../db/user.json");

module.exports = {
  sign(req, res) {
    const email = req.body.email;
    console.log(typeof email);
    const password = req.body.password;
    console.log(typeof user.email);

    if (user.email !== email) {
      req.flash("danger", "Wrong Email");
      const messageData = {
        msg: req.flash("danger"),
        class: "alert-dark",
      };
      return res.render("login", {
        layout: "../views/layouts/main.ejs",
        title: "Login Page",
        message: messageData,
      });
    }

    if (user.password !== password) {
      req.flash("danger", "Wrong Password");
      const messageData = {
        msg: req.flash("danger"),
        class: "alert-danger",
      };
      return res.render("login", {
        layout: "../views/layouts/main.ejs",
        title: "Login Page",
        message: messageData,
      });
    }

    req.flash("user", user.name);
    res.status(200).redirect("/").json({
      status: true,
      message: "Succesfully logged in",
    });
  },
  loginIndex(req, res) {
    res.render("login", {
      layout: "../views/layouts/main.ejs",
      title: "Login Page",
      message: "",
    });
  },
};
