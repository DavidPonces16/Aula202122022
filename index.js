const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://DavidPonces:DavidPonces007@ac-4tplo4s-shard-00-00.wnujrq7.mongodb.net:27017,ac-4tplo4s-shard-00-01.wnujrq7.mongodb.net:27017,ac-4tplo4s-shard-00-02.wnujrq7.mongodb.net:27017/?ssl=true&replicaSet=atlas-99z4kb-shard-0&authSource=admin&retryWrites=true&w=majority";
const dbName = "ProjetoTDW";
const connect = mongoose.connect(url, { dbName, useNewUrlParser : true, useUnifiedTopology: true
});

connect.then((db) => {
    app.use(function(req,res,next){
        console.log("New request has been made")
        next()
    })
    var pratos = require("./Controllers/menu_do_dia");
    app.use("/pratos",pratos);
    app.listen(port, () => console.log('Restaurante'))
})