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
            // categoryId: {
            //     type: Sequelize.INTEGER,
            //     allowNull: false,
            //     refe/rences: {
            //         model: 'categaries',
            //         key: 'id',
            //     },
            // },
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