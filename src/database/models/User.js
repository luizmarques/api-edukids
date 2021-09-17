const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        data_nascimento: DataTypes.DATE,
        user_type: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
      },
      {
        tableName: "users", 
        sequelize,
      
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Curso, {
      foreignKey: "user_id",
      through: "curso_inscricao",
      as: "cursos",
    });
  }
}

module.exports = User;
