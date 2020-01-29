const sequelize = require('../connection');

const insertNote = async (todo) => {
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

const getNotes = async () => {
  return await sequelize.query(
      'SELECT * FROM NOTES', {type: sequelize.QueryTypes.SELECT});
};

const changeState = async (id) => {
  return await sequelize.query(
      'UPDATE NOTES SET isactive = NOT isactive where id = :id', {
        replacements: {
          id,
        }, type: sequelize.QueryTypes.UPDATE});
};

const deleteNote = async (id) => {
  return await sequelize.query(
      'DELETE FROM NOTES where id = :id', {
        replacements: {
          id,
        }, type: sequelize.QueryTypes.UPDATE});
};
module.exports = {insertNote, getNotes, changeState, deleteNote, sequelize};
