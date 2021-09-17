"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dataArray = [
      {
        name: "Liniquer Silva",
        email: "liniquer.silva@al.infnet.edu.br",
        password: 12345,
        user_type: 2,
        status: true,
        data_nascimento: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Juliano Moraes",
        email: "juliano.moraes@al.infnet.edu.br",
        password: 12345,
        user_type: 2,
        status: true,
        data_nascimento: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    return queryInterface.bulkInsert("users", dataArray);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("users", null, {});
  },
};
