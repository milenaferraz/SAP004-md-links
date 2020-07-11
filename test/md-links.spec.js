const readFile = require('../src/readFile');
const fs = require('fs');

// describe('mdLinks', () => {

//   it('should return 5', () => {
//     expect(5).toBe(5);

//   });

// });

const readSpy = jest.spyOn(fs.promises, 'readFile');

describe('readFile', () => {

  const data = ``;

  it('should return files sucess', () => {
    const path = '';
    readSpy.mockResolvedValueOnce(data);
    return expect(readFile(path)).resolves.toEqual(data);
  });

});
