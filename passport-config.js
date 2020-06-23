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
      await models.Author.findOne({ where: { name: payload.name } })
      .then(author => {
        return done(null, {
          id: author.id,
          name: author.name
        })
      })
      .catch(error => {
        console.log(error)
        return done(null, false)
      })
    })
  );
};
