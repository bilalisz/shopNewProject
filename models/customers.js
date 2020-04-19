'use strict';
module.exports = (sequelize, DataTypes) => {
    const customers = sequelize.define(
        'customers', {
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        }, {}
    );
    customers.associate = function(models) {
        // associations can be defined here
        // customers.hasMany(models.order, { as: 'order' });
    };
    return customers;
};