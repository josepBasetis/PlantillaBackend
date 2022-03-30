"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Colonies",
      [
        {
          name: "nom",
          adress: "adresa",
          cats: 4,
          alimentador: "alimentador",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "nom2",
          adress: "adresa2",
          cats: 12,
          alimentador: "alimentador2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "nom3",
          adress: "adresa3",
          cats: 18,
          alimentador: "alimentador3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colonies", null, {});
  },
};
