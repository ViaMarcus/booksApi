"use strict";

const models = require("../../models");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert("Authors", [
      { name: "J.R.R. Tolkien", createdAt: new Date(), updatedAt: new Date() },
      { name: "Stieg Larsson", createdAt: new Date(), updatedAt: new Date() },
    ]);

    const authors = await models.Author.findAll()

    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Lord of the Rings",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: authors.find(item => item.name == "J.R.R. Tolkien").id
        },
        {
          title: "Girl with the Dragon Tattoo",
          createdAt: new Date(),
          updatedAt: new Date(),
          authorId: authors.find(item => item.name == "Stieg Larsson").id
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
