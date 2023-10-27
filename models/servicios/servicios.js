'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class servicios extends Model {
        static associate(models) {
        }
    };
    servicios.init({
        Usuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Servicio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Costo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Fecha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Hora: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'servicios',
    });
    return servicios;
};