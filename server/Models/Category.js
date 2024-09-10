const mongoose=require('mongoose')
const Schema =mongoose.Schema
const CategorySchema= new Schema({
    name:{
        required:true,
        type:String

    },
    priority:{
        required:true,
        type:Number
    },

    

});

const Category=mongoose.model('categories',CategorySchema)
module.exports={Category}