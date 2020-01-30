// const sequelize = require('../connection');

const insertNote = async (sequelize, todo) => {
  const {id, title, description, active} = todo;
  // console.log(id, title, description, active);
  return await sequelize.query(
      'INSERT INTO NOTES VALUES (:id, :title, :description, :status)', {
        replacements: {
          id: id,
          title: title,
          description: description,
          status: active,
        }, type: sequelize.QueryTypes.INSERT});
};

const getNotes = async (sequelize) => {
  return await sequelize.query(
      'SELECT * FROM NOTES', {type: sequelize.QueryTypes.SELECT});
};

const changeState = async (sequelize, id) => {
  const result = await sequelize.query(
      'UPDATE NOTES SET isactive = NOT isactive where id = :id', {
        replacements: {
          id,
        }, type: sequelize.QueryTypes.UPDATE});
  if (result[1] === 0) {
    return false;
  }
  return true;
};

const deleteNote = async (sequelize, id) => {
  const result = await sequelize.query(
      'DELETE FROM NOTES where id = :id', {
        replacements: {
          id,
        }, type: sequelize.QueryTypes.UPDATE});
  if (result[1] === 0) {
    return false;
  }
  return true;
};

module.exports = {insertNote, getNotes, changeState, deleteNote};
