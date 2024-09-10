const mongoose = require('mongoose');
const { Category } = require('./Category');
const { Type } = require('./Types');
const { Unit } = require('./Unit');
const { type } = require('os');
const Schema = mongoose.Schema
const SubsidySchema = new Schema({
   category: {
      type: Schema.Types.ObjectId,
      ref: Category
   },
    type:{
        type:Schema.Types.ObjectId,
        ref:Type
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    unit:{
        type:Schema.Types.ObjectId,
        ref:Unit
    },
    priority:{
        type:[Number,'Priority must be a number'],
        default:1
    },
    date:{
        type:Date,
        default:Date.now
    }
    
    
});

const Subsidy = mongoose.model('subsidies', SubsidySchema);
module.exports = { Subsidy }