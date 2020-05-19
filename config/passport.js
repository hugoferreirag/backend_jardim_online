const passport = require("passport");
const passportJWT = require("passport-jwt");
const UserModel = require('../models/users');
const cfg = require("../config.js");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function() {
const strategy = new Strategy(params, async function(payload, done) {
const user = await UserModel.callDatabaseFunction.getById(payload);
  if (user) {
    return done(null, {id: user.id, email: user.email, fullName: user.fullName});
  } else {
    return done(new Error("User not found"), null);
  }
  });
  passport.use(strategy);
  return {
  initialize: function() {
    return passport.initialize();
  },
  authenticate: function() {
    return passport.authenticate("jwt", cfg.jwtSession);
  }
  };
};