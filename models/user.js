const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type : String,
        requried: true
    },
    email: {
        type: String,
        requried: true
    },
    password: {
        type: String,
        requried: true
    },
    isAdmin:{
        type: Boolean,  
        default: false
    }
},{
    timestamps: true,
});
const userModel = mongoose.model('users',userSchema);
module.exports = userModel;