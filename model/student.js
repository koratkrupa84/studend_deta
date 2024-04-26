const mongoose = require('mongoose')


const studentSchema = mongoose.Schema({
    email: {type: String , required : true, unique:true},  //email is the username
    phone_no : {type: String},
    password:{type: String},
    fullName:{type: String },
    age: Number,  
    gender: String  // male or female
})


module.exports = mongoose.model('students', studentSchema)