'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('notes', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isactive: DataTypes.STRING,
  }, {});
  Notes.associate = function(models) {
    // associations can be defined here
  };
  return Notes;
};
