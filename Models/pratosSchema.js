const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pratos = new Schema({
    codigo_prato:{
        type: Number,
        requeired: true,
        unique: true,
    },
    nome_prato:{
        type: Number,
        requeired: true,
        unique: true,
    },
    preco:{
        type: Number,
        requeired: true,
        unique: true,
    },
    regime:{
        type: Number,
        requeired: true,
        unique: true,
    },
    ingredientes:{
        type: Number,
        requeired: true,
        unique: true,
    }
},{
    timestamps: true
})

module.exports = mongoose.model("menu_do_dia", pratos, "menu_do_dia")