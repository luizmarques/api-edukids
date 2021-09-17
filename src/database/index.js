const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Curso = require("./models/Curso");
const User = require("./models/User");
const Inscricao = require("./models/Inscricao");

const connection = new Sequelize(dbConfig["development"]);

User.init(connection);
Curso.init(connection);
Inscricao.init(connection);

User.associate(connection.models);
Curso.associate(connection.models);

module.exports = connection;
