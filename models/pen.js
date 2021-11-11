const mongoose = require("mongoose") 
const penSchema = mongoose.Schema({ 
 pen_type: String, 
 thickness: Number, 
 cost: Number 
}) 
 
module.exports = mongoose.model("pen", 
penSchema)