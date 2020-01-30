const {insertNote, getNotes, changeState, deleteNote} =
require('../../src/helpers/dbOperations');
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize();

describe('The db operations', () => {
//   beforeAll(() => {
//     sequelize.open();
//   });
  afterAll(() => {
    sequelize.close();
  });

  describe('The insertNotes function ', () =>{
    it('Should insert into notes table', async () => {
      const mockResult = {
        'title': 'Errands',
        'description': 'More work',
        'id': 'baa93845-cdd2-4af7-8ef3-1ca5fbcbb2d5',
        'active': true,
      };
      const mockSequelize = jest.spyOn(sequelize, 'query');
      mockSequelize.mockResolvedValue(mockResult);
      const result = await insertNote(mockResult);
      // console.log(result);
      expect(mockSequelize).toHaveBeenCalled();
      expect(result).toEqual(mockResult);
      sequelize.close();
    });
  });
  describe('The getNotes function ', () =>{
    it('Should retrive from the notes table', async () => {
      const mockResult = {
        'title': 'Errands',
        'description': 'More work',
        'id': 'baa93845-cdd2-4af7-8ef3-1ca5fbcbb2d5',
        'active': true,
      };
      const mockSequelize = jest.spyOn(sequelize, 'query');
      mockSequelize.mockResolvedValue(mockResult);
      const result = await getNotes();
      expect(mockSequelize).toHaveBeenCalled();
      expect(result).toEqual(mockResult);
      // sequelize.close();
    });
  });
  describe('The change state function ', () =>{
    it('Should toggle the state of isactive', async () => {
      const mockId = '69bdeb20-596e-4abd-985b-82dff67696f6';
      const mockSequelize = jest.spyOn(sequelize, 'query');
      mockSequelize.mockResolvedValue([[], 1]);
      const result = await changeState(mockId);
      expect(mockSequelize).toHaveBeenCalled();
      expect(result).toEqual(true);
    });
  });
  describe('The delete notesFunction function ', () =>{
    it('Should delete the note from the database', async () => {
      const mockId = 'ac93a90d-91e9-403a-96cb-a61ed59a5dcf';
      const mockSequelize = jest.spyOn(sequelize, 'query');
      mockSequelize.mockResolvedValue([[], 1]);
      const result = await deleteNote(mockId);
      expect(mockSequelize).toHaveBeenCalled();
      expect(result).toEqual(true);
    });
  });
});
