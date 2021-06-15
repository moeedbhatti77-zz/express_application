const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street : String,
    city : String,
    country : String
});

const Address = mongoose.model('address',addressSchema);
module.exports = Address;