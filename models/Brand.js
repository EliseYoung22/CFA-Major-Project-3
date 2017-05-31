const mongoose = require('mongoose');
//destructuring
const { Schema } = mongoose;

const brandSchema = new Schema ({
  name: {
    type: String,
    trim: true
  },
  ethical: {
    type: String,
    trim: true
  },
  sustainable: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  certificates: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    trim: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});


const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
