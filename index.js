const fs = require('fs');
const readDirectory = require('./src/readDir.js');
const readFileAt = require('./src/readFile.js');
const validateArchive = require('./src/validateArc.js');


const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
        reject(err)
      } else if (stats.isDirectory()) {
        readDirectory(path).then((linksFormated) => {
          validateArchive(option, linksFormated).then((content) => {
            return resolve(content);
          })
        })
          .catch((err) => {
            err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
            reject(err)
          })
      } else if (stats.isFile()) {
        readFileAt(path).then((linksFormated) => {
          validateArchive(option, linksFormated).then((content) => {
            return resolve(content);
          })
        }).catch((err) => {
          err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
          reject(err)
        })
      }
    });
  });
};

module.exports = mdLinks;