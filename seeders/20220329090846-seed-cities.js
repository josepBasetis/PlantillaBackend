"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: "Sarajevo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Istanbul",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Barcelona",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Los Angeles",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("City", null, {});
  },
};
