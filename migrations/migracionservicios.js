'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('servicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        Usuario: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Servicio: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Costo: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Fecha: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Hora: {
            type: Sequelize.STRING,
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
    await queryInterface.dropTable('servicios');
  }
};