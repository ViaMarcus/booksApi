const { Strategy, ExtractJwt } = require("passport-jwt");
const salt = "ohmygodwhatisthisstringdoinginthisfile";
const models = require("./models");
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: salt,
};

module.exports = (passport) => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      await models.Author.findOne({ where: { email: payload.email } })
      .then(author => {
        if ( author.validatePassword(payload.password)){
          return done(null, {
            id: author.id,
            name: author.name,
            email: author.email,
          })
        } else {
          return done(null, false, { message: "Incorrect password"})
        }
      })
      .catch(error => {
        console.log(error)
        return done(null, false, {message: "This user does not exist"})
      })
    })
  );
};
