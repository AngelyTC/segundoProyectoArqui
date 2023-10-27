const { Router } = require('express');
const router = Router();

// facturas
const facturasController = require('../controllers/cuenta/facturaControler');
const externoController = require('../controllers/externo/externoController');
const serviciosController = require('../controllers/servicio/servicioController');
//RUTAS

module.exports = (app) => {
    //facturas
    router.get('/factura/find', facturasController.find);
    router.post('/contabilidad/create', facturasController.create);
    router.get('/factura/find/fecha', facturasController.find);

    app.use('/', router);

    //externo
    router.post('/visitas/ver', externoController.updateVisits);

    //servicios
    router.get('/servicios/find', serviciosController.find);
    router.post('/servicios/create', serviciosController.create);
};