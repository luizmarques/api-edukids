module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    username: "default",
    password: "secret",
    database: "projeto3",
    define: {
      timestamps: true, //  para incluir o created_at e updated_ad
      underscored: true, // modelo snackcase
    },
  },
  production: {},
};
