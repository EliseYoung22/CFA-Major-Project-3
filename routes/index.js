var express = require('express');
var router = express.Router();
const Brand = require('../models/Brand')
const brandController = require ('../controllers/brandController');

//GET
router.get('/', brandController.getBrand);

//POST
router.post('/', brandController.postBrand);


//GET-Edit
router.get('/brand/:id/edit',  brandController.getEditBrand);



//POST-Update
router.post('/brand/:id/edit', brandController.updateBrand);


//DELETE
router.get('/brand/:id/delete', brandController.deleteBrand);



module.exports = router;
