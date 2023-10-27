'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('visitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name_User: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Name_Airport: {
        type: Sequelize.STRING,
        allowNull: false,
      },
        Visits: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('visitas');
  }
};