var mongoose = require("mongoose");
var Schema = mongoose.Schema

var car = new Schema ({
  id_product: String, //corresponde con el ID del producto (colección Productos)
  name_product: String,
  unit_price: Number,
  amount: Number,
  total: Number,
  date: String,
},
{ versionKey: false}
);
module.exports = mongoose.model("Compras", car);