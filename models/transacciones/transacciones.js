'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class transacciones extends Model {
        static associate(models) {
        }
    };
    transacciones.init({
        Id_Estación: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Cantidad_Vendida: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Precio_Galon: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Id_Cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Fecha: {
            type: DataTypes.DATETIME,
            allowNull: false
        },
        Tipo_Pago: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Descuento: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Empleado: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'transacciones',
    });
    return transacciones;
};