const Inscricao = require("../database/models/Inscricao");

exports.inscricaoService = (user_id, curso_id) =>
  Inscricao.create({ user_id, curso_id });
