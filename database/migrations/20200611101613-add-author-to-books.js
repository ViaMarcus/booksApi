'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Books',
      'authorId',
      { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Author',
          as: 'author',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Books',
      'authorId'
    )
  }
};
