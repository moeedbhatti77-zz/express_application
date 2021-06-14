const mongoose = require('mongoose');

facultySchema = mongoose.Schema({
    title : String,
    price : Number
});

const Product = mongoose.model('product',facultySchema);
module.exports = Product;