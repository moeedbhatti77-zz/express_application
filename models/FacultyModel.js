const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street : String,
    city : String,
    country : String
});

facultySchema = mongoose.Schema({
    name : String,
    age : Number,
    email: String,
    gender : String,
    course_code : String,
    address : {type : addressSchema},
    phone : [String]
});

const Faculty = mongoose.model('test',facultySchema);
module.exports = Faculty;