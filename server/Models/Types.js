const mongoose=require('mongoose')
const { Category } = require('./Category')
const Schema=mongoose.Schema

const TypeSchema=new Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:Category
    },

    name:{
        type:String,
        required:true
    },

    priority:{
        type:Number,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }
})

const Type=mongoose.model('types',TypeSchema);
module.exports={Type}