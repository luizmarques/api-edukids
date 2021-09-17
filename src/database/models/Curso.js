const { Model, DataTypes } = require("sequelize");

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        coordinator: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        tableName: "cursos",
      }
    );
  }

  static associate(models) {
     this.belongsToMany(models.User, {
      foreignKey: "curso_id",
      through: "curso_inscricao",
      as: "alunos",
    });
  }
}

module.exports = Curso;
