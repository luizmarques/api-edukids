const { body } = require("express-validator");
const { param } = require("../routes");
const { validateDto } = require("../utils/handler");

exports.inscricao = validateDto([
  body("name")
    .notEmpty()
    .isString()
    .withMessage("Favor informe uma nome valido"),

  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Favor informe um e-mail válido"),

  body("password").isString().withMessage("Favor informe uma senha valida"),
  body("data_nascimento").isDate().withMessage("Favor informe uma data valida"),
  body("user_type").isNumeric().withMessage("Favor um tipo valido"),
  body("status").isBoolean().withMessage("Favor informe um status valido"),
]);

exports.inscricaoEmail = validateDto([
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("Favor informe um e-mail válido"),
]);
