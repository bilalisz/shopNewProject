'use strict';
module.exports = (sequelize, DataTypes) => {
  const ledger = sequelize.define('ledger', {
    type: DataTypes.STRING,
    customerId: DataTypes.INTEGER
  }, {});
  ledger.associate = function(models) {
    // associations can be defined here
  };
  return ledger;
};