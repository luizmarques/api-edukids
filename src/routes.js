const express = require("express");
const CursoController = require("./controller/CursoController");
const { cursoSchema, cursoParams } = require("./schemas/cursoSchema");
const { inscricaoEmail, inscricao } = require("./schemas/inscricaoValidate");

const routes = express.Router();

routes.get("/cursos", CursoController.index);
routes.post("/cursos", [cursoSchema], CursoController.store);
routes.get("/cursos/:id", [cursoParams], CursoController.show);

routes.post(
  "/cursos/:id/inscricao/",
  [cursoParams, inscricao],
  CursoController.createInscricao
);

routes.post(
  "/cursos/:id/inscricao_email/",
  [cursoParams, inscricaoEmail],
  CursoController.createInscricaoEmail
);

routes.delete(
  "/cursos/:id/inscricoes/:user_id",
  [cursoParams],
  CursoController.deleteInscricao
);

module.exports = routes;
1;
