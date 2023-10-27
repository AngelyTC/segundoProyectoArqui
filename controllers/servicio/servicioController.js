'use strict'
const Sequelize = require('sequelize');
const db = require("../../models");
const SERVICIOS = db.servicios;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");


module.exports = {
    find(req, res) {
        return VISITAS.findAndCountAll({
            attributes: ['Usuario' , 'Servicio', 'Costo', 'Fecha', 'Hora']
        }) //Le hacemos una consulta al modelo
            .then(cuenta => res.status(200).send(cuenta)) //Devolvemos los datos
            .catch(error => res.status(400).send(error)) //Enviamos un mensaje de error por si acaso
    },

    create(req, res) {
      const { Usuario, Servicio, Costo, Fecha, Hora  } = req.body;

      SERVICIOS.create({
        Usuario,        
        Servicio,
        Costo,
        Fecha,
        Hora,
      })
        .then(newServicio => {
          axios.post('http://localhost:3000/servicios/createService', {
            Usuario,        
            Servicio,
          })
          .then(response => {
            res.status(201).json(newServicio);
          })
          .catch(error => {
            console.log(error);
            return res.status(500).json({ error: 'Error al crear servicio en API 2 y actualizar en API 1' });
          });
        })
        .catch(error => {
          console.log(error);
          return res.status(500).json({ error: 'Error al crear servicio en API 2' });
        });
    },


};