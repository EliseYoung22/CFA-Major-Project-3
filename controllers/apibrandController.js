const mongoose = require('mongoose');
const Brand = require('../models/Brand');

exports.getBrandApi = (req, res) => {
  Brand.find()
    .then((brand) => {
        res.json(brand)
  })
};
//
// exports.postBrandApi = (req, res) => {
//   console.log('req: ', req)
//   const name = req.query.name;
//   let brand = new Brand();
//   brand.name = name;
//   brand.save()
//     .then(() => {
//       res.json(brand)
//     });
// };
//
// exports.getBrandApi = (req,res) => {
//   console.log("req.params: ", req.params)
//   Brand.findOne({ _id: req.params.id})
//     .then(brand => {
//       res.json(brand)
//     });
// };
//
// exports.updateBrandApi = (req, res) => {
//   console.log('edit req.query: ', req.query)
//   Brand.findOneAndUpdate({ _id: req.params.id }, req.query, {
//     new: true // returns new ingredient
//   })
//   .then(brand => {
//     res.json(brand)
//   });
// };
//
// exports.deleteBrandApi = function(req, res){
// 	Brand.findByIdAndRemove({_id: req.params.id},
// 	   function(err){
// 		if(err) res.json(err);
// 		else {
//       Brand.find()
//         .then(brand => {
//           res.json(brand)
//         })
//     };
// 	});
// };
