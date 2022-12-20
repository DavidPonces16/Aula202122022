var express = require("express");
var router = express.Router();
const pratos = require("../Models/pratosSchema");

router.get('/', (req, res) => {
    pratos.find().then((result) => {
        if (result != null) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send("Not Found")
        }
    })
})

router.get('/:id', (req,res)=> {
    const ID =  parseInt(req.params.id);
    pratos.find({codigo_prato: ID}).then(result => {
        if (result != null) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send("Not Found")
        }
    })
})

router.post("/", (req, res) => {
    if (req.body != null) {
        pratos.create(req.body).then((pratos) => {
            return res.status(200).send(pratos);
        }).catch((error) => {
            return res.status(400).send(error.message);
        })
    }
    return res.status(400);
})

router.patch('/:id',(req,res)=>{
     const ID =  parseInt(req.params.id);
    if (req.body != null && req.params.id != null) {
        pratos.updateOne({ codigo_prato: ID }, req.body).then((pratos) => {
            return res.status(200).send(pratos);
        }).catch((error) => {
            return res.status(400).send(error.message);
        })
    }
    return res.status(400);
})

router.delete('/:id',(req,res)=>{
    const ID =  parseInt(req.params.id);
    pratos.deleteOne({ codigo_prato: ID}).then(result => {
        if (result != null) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send("Not Found")
        }
    })
})

router.delete('/',(req,res)=>{
    pratos.drop().then(result => {
        if (result != null) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send("Not Found")
        }
    })
})

module.exports = router;