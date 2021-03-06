"use strict";
//router
const express = require("express");

const marcaController = require("../controllers/marcaController");

var api = express.Router();

api.post("/marcas", marcaController.guardar);
api.get("/marcas", marcaController.listar);
api.get("/marcas/:id", marcaController.listarPorId);
api.delete("/marcas/:id", marcaController.eliminar);

module.exports = api;
