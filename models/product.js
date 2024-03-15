
var mongoose= require("mongoose");

//write your schema Here with name of schema as productSchema
const productSchema = new mongoose.Schema({
    name:{type:String,required:true},
    Quantity:{type:Number,required:true},
    Price:{type:Number,required:true},
    inStock:{type:String,enum:['Yes','No']}
})
module.exports =mongoose.model("product",productSchema);
