'use strict';
module.exports = (sequelize, DataTypes) => {
    const vendor = sequelize.define(
        'vendor', {
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
        }, {}
    );
    vendor.associate = function(models) {
        // associations can be defined here
    };
    return vendor;
};