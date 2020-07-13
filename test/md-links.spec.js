const readFile = require('../src/readFile');
const fs = require('fs');

const readSpy = jest.spyOn(fs.promises, 'readFile');

describe('readFile', () => {

  const data = ``;

  it('should return files sucess', () => {
    const path = '';
    readSpy.mockResolvedValueOnce(data);
    return expect(readFile(path)).resolves.toEqual(data);
  });

});
