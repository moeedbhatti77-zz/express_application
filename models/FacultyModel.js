const mongoose = require('mongoose');

facultySchema = mongoose.Schema({
    name : String,
    age : Number,
    email: String,
    address : {
        street : Number,
        city : String,
        country : String
    },
    phone : [String]
});

const Faculty = mongoose.model('test',facultySchema);
module.exports = Faculty;