const mongoose = require('mongoose');
const Brand = require('../models/Brand');


exports.getBrand = (req, res) => {
  Brand.find()
  .then(brand => {
    res.render('index', {
      title: 'Brands',
      brand: brand,
    })
  })
};

exports.postBrand = (req, res) => {
  const name = req.body.brand_name;
  const ethical = req.body.brand_ethical;
  const sustainable = req.body.brand_sustainable;
  const description = req.body.brand_description;
  const certificates = req.body.brand_certificates;
  const link = req.body.brand_link;

  let brand = new Brand();
  brand.name = name;
  brand.ethical = ethical;
  brand.sustainable = sustainable;
  brand.description = description;
  brand.certificates = certificates;
  brand.link = link;

  brand.save()
  .then(() => {
    res.redirect('/')
  })
};

exports.getEditBrand = (req, res) => {
  Brand.findOne({ _id: req.params.id })
  // shows params. req gets sent when the connection is goign to our server res is what we get sent back
  // res.send(req.params)
    .then(brand => { //render a template
      res.render('editBrand', {brand: brand});
    })
};

exports.updateBrand = (req, res) => {
  Brand.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true // returns new ingredient
  })
    .then(brand => {
      res.redirect('/')
    })
};


exports.deleteBrand = (req, res) => {
	Brand.findByIdAndRemove({_id: req.params.id},
	   function(err){
		  if(err) res.json(err);
		   else    res.redirect('/');
	});
};
