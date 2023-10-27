'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transacciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_Estación: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Cantidad_Vendida: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      Precio_Galon: {
            type: Sequelize.DECIMAL,
            allowNull: false
      },
      Id_Cliente: {
            type: Sequelize.INTEGER,
            allowNull: false
      },
      Fecha: {
            type: Sequelize.DATE,
            allowNull: false
      },
      Tipo_Pago: {
            type: Sequelize.STRING,
            allowNull: false
      },
      Descuento: {
            type: Sequelize.INTEGER,
            allowNull: false
      },
      Empleado: {
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
    await queryInterface.dropTable('transacciones');
  }
};