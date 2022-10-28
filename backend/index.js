var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var dotenv = require("dotenv").config();


//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


//Mongoose

mongoose
  .connect(process.env.STRING_CONEXION)
  .then(function (db) {
    console.log("Conectado a la base de datos");
  })
  .catch(function (err) {
    console.log(err);
  });
//Modelos
var Prod = require("./models/productos");
var Comp = require("./models/compras")

//Obtener los productos en el HOME
app.get("/productos", async function(req,res){
  var p = await Prod.find();
  res.send(p);
});

//Obtener los detalles de cada producto en la ruta (detail)
app.get("/producto/:id", async function (req, res) {
  var id = req.params.id;
  var producto_seleccionado = await Prod.findById({_id: id});
  res.send(producto_seleccionado);
});

//Ruta comprar producto
app.post("/insertar_compra", async function (req, res) {
  var { id_product, amount, unit_price, name_product } = req.body;
  
  var c = {
    id_product: id_product,
    name_product: name_product,
    unit_price: parseInt(unit_price),
    amount: parseInt(amount),
    total: parseInt(unit_price) * parseInt(amount),
    date: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""), //fecha actual en formato yyyy-mm-dd hh:ii:ss
  };
  console.log(c)
  var cesta = new Comp(c);
  await cesta.save();
  res.send({mensaje: "Añadido al carrito"});
});

//Mostrar los documentos de la BD Compras en la tabla de la cesta
app.get("/cesta", async function (req, res) {
  var c = await Comp.find();
  res.send(c)
});

//Eliminiar Producto
app.delete("/eliminar/:id_producto", async function (req, res) {
  var id = req.params.id_producto;
  await Comp.findByIdAndRemove(id);
  res.send({mensaje: "Eliminado Correctamente"});
});


//Mostrar los producto según la categoria seleccionada en el nabvar
app.get("/categoria/:cat", async function (req, res) {
  var cate = req.params.cat;
  var prods = await Prod.find({ category: cate });
  res.send(prods)
});

//Listen
app.listen("4000", function (){
    console.log("Servidor iniciado");
});