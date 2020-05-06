require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const session = require("express-session");
const passport = require("passport");
const discordStrategy = require("./strategies/discordstrategy");

//Routes
const authRoute = require("./routes/auth");

app.use(
  session({
    secret: "some random secret",
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    saveUninitialized: false,
  })
);

//Passport
app.use(passport.initialize());
app.use(passport.session());

//Middleware Routes
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Now listening to request on port http://localhost:${PORT}`);
});
