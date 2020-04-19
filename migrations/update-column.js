'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn(
            'products',
            'categariesId',
            'categoryId'
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.renameColumn(
            'products',
            'categariesId',
            'categoryId'
        );
    },
};