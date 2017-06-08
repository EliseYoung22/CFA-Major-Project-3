const mongoose = require('mongoose');
const Brand = require('../models/Brand');
const formidable = require('formidable');
const fs = require('fs');
const multer = require('multer');



exports.getBrand = (req, res) => {
  Brand.find()
  .then(brand => {
    res.render('index', {
      title: 'Brands',
      brand: brand,
    })
  })
};

// exports.getBrandById = async (req, res) => {
//   try {
//     const brand = await Brand.findOne({ _id: req.params.id })
//       .populate('name');
//     res.setHeader('Content-Type', 'image/png');
//     res.send(brand.file);
//   } catch(err) {
//     throw Error(err);
//   };
// };
exports.getBrandById = (req,res) => {
  Brand.findById({_id: req.params.id})
    .then((brand)=>{
      res.setHeader('Content-Type', 'image/png')
      res.send(brand.file)
    })
}


exports.postBrand = (req, res, next) => {
  let form = new formidable.IncomingForm();

  console.log(form, 'parsing form')
  form.parse(req, function(err, fields, files) {


    if (err) {
      res.status(400).send('Error parsing form', err);
      return;
    }
      console.log('files', files);
      fs.readFile(files.file.path, function(err, data) {
        if (err) {
          res.status(400).send('Error parsing form', err);
          return;
        }
        if (data.length === 0) {
          res.status(400).send('No file provided');
          return;
        }
        console.log(data.length)
        Brand.create({
           name: fields.name,
           ethical:fields.ethical,
           file: data,
           sustainable:fields.sustainable, description:fields.description, certificates:fields.certificates }, function(error) {
          if(err) {
            console.log('Upload failed...');
            return;
          }
          console.log('Upload successful!');
          return;
        });
        res.send("Successful")
      });

  });

};


// exports.postBrand = (req, res) => {
//   const name = req.body.brand_name;
//   const ethical = req.body.brand_ethical;
//   const sustainable = req.body.brand_sustainable;
//   const description = req.body.brand_description;
//   const certificates = req.body.brand_certificates;
//   const link = req.body.brand_link;
//
//   let brand = new Brand();
//   brand.name = name;
//   brand.ethical = ethical;
//   brand.sustainable = sustainable;
//   brand.description = description;
//   brand.certificates = certificates;
//   brand.link = link;
//
//
//   brand.save()
//   .then(() => {
//     res.redirect('/')
//   })
// };

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
