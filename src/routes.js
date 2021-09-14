const express = require("express");
const CursoController = require("./controller/CursoController");

const routes = express.Router();

routes.get('/cursos', CursoController.index)

module.exports = routes;

