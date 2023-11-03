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

    async create(req, res) {
        try {
            const datos = req.body; // Serializar los datos

           // const transacciones = await TRANSACCION.create(datos_ingreso);

            const nivelActualResponse = await axios.get(`http://localhost:8081/tanque/nivelActual/${datos.Id_Estacion}`);
            const nivelActual = nivelActualResponse.data;

            const nuevoNivel = nivelActual - datos.Cantidad_Vendida;

            const options = {

                method: 'PUT',
                url: 'http://localhost:8081/tanque/actualizarNivel',
                headers: {
                'Content-Type': 'application/json'
                },

                data: {
                    
                    request:{
                        nuevo_nivel: nuevoNivel,
                        tanque:{
                            id: datos.Id_Estacion,
                            capacidad: datos.capacidad,
                            nivel_actual: nuevoNivel,
                            tipo_gasolina: datos.tipo_gasolina,
                            ubicacion: datos.ubicacion,
                            precio_galon: datos.precio_galon,
                            Id_Cliente: datos.Id_Cliente,
                            tipo_pago: datos.tipo_pago,
                            fecha: 1698985586885
                        }
                    }
                
                }
            }

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
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Error al insertar o actualizar el nivel del tanque' });
        }
    }
};