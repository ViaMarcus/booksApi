'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const migrations = [
      queryInterface.addColumn(
        'Authors',
        'email',
        {
          type: Sequelize.STRING,
          allowNull: false,
        }
      ),
      queryInterface.addColumn(
        'Authors',
        'password',
        {
          type: Sequelize.STRING,
          allowNull: false,
        }
      )
    ]

    return Promise.all(migrations)
  },

  down: (queryInterface, Sequelize) => {
    const migrations = [
      queryInterface.removeColumn(
        'Author', 'email'
      ),
      queryInterface.removeColumn(
        'Author', 'password'
      ),
    ]
    
    return Promise.all(migrations)
  }
};
