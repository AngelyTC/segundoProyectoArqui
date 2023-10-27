'use strict'
const Sequelize = require('sequelize');
const db = require("../../models");
const TRANSACCION = db.transacciones;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");
const transacciones = require('../../models/transacciones/transacciones');


module.exports = {
    //MOSTRAR DATOS
    async find(req, res) {
        const options = {
            method: 'GET',
            url: 'http://localhost:8081/tanque/getTanque',
            headers: {
                'Content-Type': 'application/json'
            },
        };
    
        try {
            const result = await axios(options);
            
            if (result && result.data) {
                // Si la respuesta contiene datos, envía esos datos en la respuesta de tu API
                res.status(200).json(result.data);
            } else {
                res.status(404).send("No se encontraron datos de tanques");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Error al obtener los datos de los tanques de gasolina");
        }
    },


    //create
   async create (req, res) {
        let datos = req.body //Serializar los datos
        const datos_ingreso = { //Objeto
            Id_Estacion: datos.Id_Estacion,
            Cantidad_Vendida: datos.Cantidad_Vendida,
            Precio_Galon: datos.Precio_Galon,
            Id_Cliente: datos.Id_Cliente,
            Fecha: datos.Fecha,
            Tipo_Pago: datos.Tipo_Pago,
            Descuento: datos.Descuento,
            Empleado: datos.Empleado
        };

        TRANSACCION.create(datos_ingreso)
        .then(async (transacciones) => {
            axios.put('http://localhost:8081/tanque/actualizar', {
                tanqueId: datos.Id_Estacion,
                nivel_actual: datos.Cantidad_Vendida
            })
            .then((response) => {
                console.log('Nivel actual del tanque actualizado en la otra API');
                res.send(transacciones);
            })
            .catch((error) => {
                console.error('Error al intentar actualizar el nivel actual del tanque en la otra API:', error);
                res.send(transacciones);
            });
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).json({ error: 'Error al insertar' });
        });
    },
   //prueba
};