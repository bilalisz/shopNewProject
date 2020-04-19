'use strict';
module.exports = (sequelize, DataTypes) => {
    const categaries = sequelize.define(
        'categaries', {
            title: DataTypes.STRING,
        }, {}
    );
    categaries.associate = function(models) {
        // associations can be defined here
        // categaries.hasOne(models.products);
    };
    return categaries;
};