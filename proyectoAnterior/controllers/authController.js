const User = require("../models/User");
const passport = require("passport");

async function showLogin(req, res) {
  return res.render("pages/login");
}

async function logIn(req, res) {
  res.render("/");
}

const logInUser = passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/",
});

async function logout(req, res, next) {
  req.logout(function (err) {
    //if (err) { return next(err); }
    res.redirect("/");
  });
}

module.exports = {
  logIn,
  logInUser,
  logout,
  showLogin,
};
