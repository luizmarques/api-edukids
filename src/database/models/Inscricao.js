const { Model, DataTypes } = require("sequelize");

class Inscricao extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: DataTypes.INTEGER,
        curso_id: DataTypes.INTEGER,
      },
      {
        tableName: "curso_inscricao",
        sequelize,
        createdAt: false,
        updatedAt: false,
      }
    );
  }
}

module.exports = Inscricao;
