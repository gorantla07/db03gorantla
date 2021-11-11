const mongoose = require("mongoose") 
const penSchema = mongoose.Schema({ 
 pName: String, 
 pColor: String, 
 pPrice: Number 
}) 
 
module.exports = mongoose.model("pen", 
penSchema)