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
    }
    ,
    phone:{
        required:true,
        type:Number,
        length:10,
       
    },

    citizenship:{
        requred:true,
        type:String,
        unique:[true,'citizenship should be unique']
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
const User=mongoose.model('users',register);
module.exports={User}