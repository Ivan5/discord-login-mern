const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "/dashboard",
  }),
  (req, res) => {
    res.send(req.user);
  }
);

router.get("/logout", (req, res) => {
  if (req.user) {
    req.logOut();
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

function isAuthorized(req, res, next) {
  if (req.user) {
    console.log(req.user);
    next();
  } else {
    console.log("User is not logged in");
    res.redirect("/");
  }
}
module.exports = router;
