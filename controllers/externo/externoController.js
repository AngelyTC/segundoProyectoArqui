const Sequelize = require('sequelize');
const db = require("../../models");
const VISITAS = db.visitas;
const { Op } = require("sequelize");

module.exports = {  
  // ... Otros endpoints ...

  updateVisits(req, res) {
    const { Name_User, Name_Airport, Visits } = req.body;

    VISITAS.findOne({
      where: {
        Name_User,
        Name_Airport,
      }
    })
    .then(visita => {
      if (visita) {
        visita.update({
          Visits: visita.Visits + Visits,
        })
        .then(updatedVisita => {
          res.status(200).json(updatedVisita);
        })
        .catch(error => {
          console.log(error);
          return res.status(500).json({ error: 'Error al actualizar las visitas' });
        });
      } else {
        // Si no se encuentra el registro, crea uno nuevo
          VISITAS.create({
            Name_User,
            Name_Airport,
            Visits,
          })
          .then(newVisita => {
            res.status(201).json(newVisita);
          })
          .catch(error => {
            console.log(error);
            return res.status(500).json({ error: 'Error al crear visita' });
        });
      }
    })
    .catch(error => {
      console.log(error);
      return res.status(500).json({ error: 'Error al buscar visita' });
    });
  },
};
