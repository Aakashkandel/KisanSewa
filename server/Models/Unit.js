const mongoose=require('mongoose')
const Schema =mongoose.Schema
const UnitSchema= new Schema({
    name:{
        required:true,
        type:String,
        unique:[true,'Unit already exists']

    },
    priority:{
        required:true,
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }

    

});

const Unit=mongoose.model('units',UnitSchema)
module.exports={Unit}