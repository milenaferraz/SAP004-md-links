const fs = require('fs');
const path = require('path');

const readDir = (pasta) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, dir) => {
      if (err) {
        reject(err.message);
      } else {
        // const teste = path.extname();
        // console.log(teste)
        resolve(dir);
        // reject(err);
      }
    });
  })
}
readDir("./src");
