var express = require('express');
var router = express.Router();
const Brand = require('../models/Brand')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function(req, res, next) {
  Brand.find()
  .then(brand => {
    res.render('index', {
      title: 'Brands',
      brand: brand,
    })
  })
});


router.post('/', (req, res) => {
  const name = req.body.brand_name;
  const ethical = req.body.brand_ethical;
  const sustainable = req.body.brand_sustainable;
  const description = req.body.brand_description;
  const certificates = req.body.brand_certificates;
  let brand = new Brand();
  brand.name = name;
  brand.ethical = ethical;
  brand.sustainable = sustainable;
  brand.description = description;
  brand.certificates = certificates;
  brand.save()
  .then(() => {
    res.redirect('/')
  })
})

module.exports = router;
