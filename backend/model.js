const { timeStamp } = require('console');
const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    

    name:{
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        default:false,

    }
}, {
    timestamps: true
})

const Userdb = mongoose.model('userdb_2',schema);

module.exports = Userdb;