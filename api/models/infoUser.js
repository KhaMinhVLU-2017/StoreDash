var mongoose = require('mongoose')
var Schema = mongoose.Schema
var model = mongoose.model

var infoUser = new Schema({
    fullname: String,
    hometown: String,
    birdthday: Date,
    indentify: String,
    phonenumber: String,
    resident: String,
    user: {type: Schema.Types.ObjectId, ref: 'Users'}
})

module.exports = model('infoUsers', infoUser)
