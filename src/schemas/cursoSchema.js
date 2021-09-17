const { body, param } = require("express-validator");
const { validateDto } = require("../utils/handler");


exports.cursoSchema = validateDto([
    body("name").notEmpty().withMessage("O nome do curso é obrigatório"),
    body("description").notEmpty().withMessage("A descricao curso é obrigatório"),
    body("coordinator")
      .notEmpty()
      .withMessage("Nome do coordenador é obrigatorio"),
    body("status").isBoolean().withMessage("Status do curso é obrigatório"),
])

exports.cursoParams = validateDto([
  param("id").notEmpty().isNumeric().withMessage("Informe um parametro numerico"),
])