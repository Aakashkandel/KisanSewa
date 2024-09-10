const mongoose=require('mongoose')
const Schema=mongoose.Schema

const register=new Schema({
    name:{
        required:true,
        type:String,

    },
    email:{
        required:true,
        type:String,
        unique:[true,'email already registered']
    },

   
    password:{
        require:true,
        type:String,

    },
    role:{
        type:String,
        default:"user",
        enum:['user','admin']

    }
    
});
const Admin=mongoose.model('admin',register);

module.exports={Admin}