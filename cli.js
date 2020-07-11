#!/usr/bin/env node

const fs = require('fs');
const readDir = require('./src/readDir.js');
const readFile = require('./src/readFile.js');
const validateArc = require('./src/validateArc.js');


const mdLinks = ([path, option]) => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
        reject(err)
      } else if (stats.isDirectory()) {
        readDir(path).then((linksFormated) => {
          validateArc(option, linksFormated).then((content) => {
            return resolve(content);
          })
        })
          .catch((err) => {
            err = 'Nenhum link foi encontrado ou a requisição não foi completada!'
            reject(err)
          })
      } else if (stats.isFile()) {
        readFile(path).then((linksFormated) => {
          validateArc(option, linksFormated).then((content) => {
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
