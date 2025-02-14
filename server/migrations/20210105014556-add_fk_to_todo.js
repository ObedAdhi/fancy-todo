'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Todos", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: {
          tableName: "Users"
        },
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Todos", "userId");
  }
};
