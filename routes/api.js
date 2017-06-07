var express = require('express');
var router = express.Router();

const Brand = require('../models/Brand');
const apibrandController = require ('../controllers/apibrandController');

router.get('/', apibrandController.getBrandApi);

router.get('/files/:id', apibrandController.getApiFileById);

// router.post('/brand', apibrandController.postBrandApi);
//
// router.get('/brand/:id', apibrandController.getEditBrandApi);
//
// router.post('/brand/:id/edit', apibrandController.updateBrandApi);
//
// router.delete('/:id/delete', apibrandController.deleteBrandApi);


module.exports = router;
