'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class visitas extends Model {
        static associate(models) {
        }
    };
    visitas.init({
        Name_User: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Name_Airport: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Visits: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'visitas',
    });
    return visitas;
};