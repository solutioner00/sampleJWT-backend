'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('document', {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT,
              },
              document: {
                type: Sequelize.STRING,
              },
              createdAt: {
                type: Sequelize.DATE,
              },
              updatedAt: {
                type: Sequelize.DATE,
              },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('document');
    }
};
