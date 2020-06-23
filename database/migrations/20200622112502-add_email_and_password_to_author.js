'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migration = [
      queryInterface.addColumn(
        'Authors',
        'email',
        {
          type: Sequelize.string,
          allowNull: false,
        }
      ),
      queryInterface.addColumn(
        'Authors',
        'password',
        {
          type: Sequelize.string,
          allowNull: false,
        }
      )
    ]

    return Promise.new(migration)
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'Author', 'email'
      ),
      queryInterface.removeColumn(
        'Author', 'password'
      ),
    ]
  }
};
