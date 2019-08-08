const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikesSchema =  new Schema({
        idUsername: String,
        idPhoto: String,   
        url: String
});


module.exports = mongoose.model('Like', LikesSchema);