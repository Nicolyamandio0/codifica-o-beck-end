const express = require("express");
const bcrypt = require("bcrypt");
const Usuario = require('../models/Usuario.js');
const { where } = require("sequelize");

const router = express.Router();

router.post("/", async(req, res) => {
    try{
         
        const {email, senha} = req.body;
        const usuario = await usuario.findOne ({where:{email}})

       if(!usuario){
        return res.status(401).json({mensagem:"opa! email incorreto."})
       }

       const senhaValida = await bcrypt.compare(senha, usuario.senha);


       if(senhaValida){
          return res.status(200).json({mensagem:"login realizado."})
       }else {
        return res.status(401).json({mensagem: "opa!usuario incorreto."})
       }


    }catch (error){
        resizeBy.status(400).json({mensagem: "ocorreu um erro, tente novamente mais tarde."})
        console.log("erro:", error);

    }
});

module.exports = router;