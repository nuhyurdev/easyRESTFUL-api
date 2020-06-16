const mongoose = require('mongoose')
const Schema= mongoose.Schema;

const UserSchema = new Schema({
    
    username:{
        type:String,
        required: true,
        unique:true, 
        maxlength:30,
        minlength:2
        
    },
  passwd:{
      type:String,
    required:true,
    unique:true

  },
    createdAt:{
        type:Date,
        default:Date.now
    } 

})

module.exports=mongoose.model('Users', UserSchema)