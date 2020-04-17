'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
            },
            unitPrice: {
                type: Sequelize.STRING,
            },
            purachasePrice: {
                type: Sequelize.STRING,
            },
            quntity: {
                type: Sequelize.STRING,
            },
            categariesId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'categaries',
                    key: 'id',
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products');
    },
};