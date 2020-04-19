'use strict';
module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define(
        'products', {
            title: DataTypes.STRING,
            unitPrice: DataTypes.STRING,
            purachasePrice: DataTypes.STRING,
            quntity: DataTypes.STRING,
            categoryId: DataTypes.INTEGER,
        }, {}
    );
    products.associate = function(models) {
        // products.belongsTo(models.categaries);
    };
    return products;
};