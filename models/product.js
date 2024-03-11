
var mongoose= require("mongoose");

//write your schema Here with name of schema as productSchema
const productSchema = {
    name:{type:String,required:true},
    Quantity:{type:Number,required:true},
    name:{type:Number,required:true},
    name:{type:String,enum:['Yes','No']}

}
module.exports =mongoose.model("products",productSchema);