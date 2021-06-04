const express = require("express");
const bcrypt = require("bcrypt");

function cifrar(req,res,next){
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    req.body = user;
    next();
}

module.exports = cifrar;