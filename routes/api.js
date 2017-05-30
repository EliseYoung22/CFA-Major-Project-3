var express = require('express');
var router = express.Router();

const Brand = require('../models/Brand');
const apibrandController = require ('../controllers/apibrandController');

router.get('/', apibrandController.getBrandApi);

router.post('/', apibrandController.postBrandApi);

router.get('/:id', apibrandController.getEditBrandApi);

router.post('/:id/edit', apibrandController.updateBrandApi);

router.delete('/:id/delete', apibrandController.deleteBrandApi);


module.exports = router;
