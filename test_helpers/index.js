const chai = require("chai");
const expect = chai.expect;
const sinonChai = require('sinon-chai')

chai.use(sinonChai)

const Models = require("../models");

beforeEach((done) => {
  Models.sequelize.sync({ force: true }).then(() => {
    done();
  });
});

module.exports = { Models, expect };
