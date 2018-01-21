const mongoose=require('mongoose');

const Schema =mongoose.Schema;

const userSchema=new Schema({
    email: String,
    username:String,
    mobile: String,
    password:String

});


module.exports=mongoose.model('user', userSchema,'users');
