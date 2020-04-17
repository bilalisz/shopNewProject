'use strict';
module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define(
        'order', {
            productId: DataTypes.INTEGER,
            customerId: DataTypes.INTEGER,
            quntity: DataTypes.STRING,
        }, {}
    );
    order.associate = function(models) {
        // associations can be defined here
        order.hasMany(models.products, { as: 'products' });
        order.belongsTo(models.customers);
    };
    return order;
};