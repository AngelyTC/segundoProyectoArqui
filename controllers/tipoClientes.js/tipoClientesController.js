'use strict'
const Sequelize = require('sequelize'); 
const db = require("../../models");
const TIPOCLIENTE = db.tipo_clientes;
const moment = require('moment');
const axios = require('axios')
const { Op } = require("sequelize");

module.exports = {
    async find (req, res) {
        let id = req.body.id
        const options = {
            'method': 'GET',
            'url': 'http://localhost:3000/tipo_clientes/find/id',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                id: id
            }
          };
        
          try {
            const result = await axios(options);
            if (result.data.id !== undefined){
                console.log(result.data);
                const resultado = result.data
                const mensaje = "El tipo Cliente con id se ha encontrado"
                res.status(200).send(mensaje)
            }
           res.status(404).send("El tipo Cliente no existe en el otro servicio")
          } catch (e) {
               console.log(e);
          }
     
    },

      //create
      async create (req, res) {
        let datos = req.body //Serializar los datos
        const options = {
            'method': 'POST',
            'url': 'http://localhost:3000/tipo_clientes/create',
            'headers': {
              'Content-Type': 'application/json'
            },
            data: {
                Tipo_Cliente: datos.Tipo_Cliente,
                Tipo_Descuento: datos.Tipo_Descuento,
            }
          };
        
          try {
            const result = await axios(options);
            if (result.data.id !== undefined){
                console.log(result.data);
                const resultado = result.data
                const mensaje = "El tipo Cliente con id se ha creado"
                res.status(200).send(mensaje)
            }
           res.status(404).send("No se logro crear el tipo Cliente")
          } catch (e) {
               console.log(e);
          }
    },

    //update
   async update (req, res) {
    let id = req.body.id
    const options = {
        'method': 'PUT',
        'url': 'http://localhost:3000/tipo_clientes/update',
        'headers': {
          'Content-Type': 'application/json'
        },
        data: {
            Tipo_Cliente: datos.Tipo_Cliente,
            Tipo_Descuento: datos.Tipo_Descuento,
        }
      };
    
      try {
        const result = await axios(options);
        if (result.data.id !== undefined){
            console.log(result.data);
            const resultado = result.data
            const mensaje = "El tipo cliente se ha actualizado"
            res.status(200).send(mensaje)
        }
       res.status(404).send("No se pudo actualizar Tipo Cliente")
      } catch (e) {
           console.log(e);
      }
 
},


//delete
async delete(req, res) {
    let id = req.body.id
    const options = {
        'method': 'DELETE',
        'url': 'http://localhost:3000/tipo_clientes/delete/:id',
        'headers': {
          'Content-Type': 'application/json'
        },
      };
    
      try {
        const result = await axios(options);
        if (result.data.id !== undefined){
            console.log(result.data);
            const resultado = result.data
            const mensaje = "El tipo Cliente ha sido eliminado correctamente"
            res.status(200).send(mensaje)
        }
       res.status(404).send("No se pudo eliminar tipo cliente")
      } catch (e) {
           console.log(e);
      }
 
},
  };
