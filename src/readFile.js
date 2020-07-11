const fs = require('fs');

const readFile = (path) => {
  return fs.promises.readFile(path)
    .then(data=> data.toString());
};

module.export = {
  readFile
}

// const readFile = (path) => {
//   const array =[];
//   return new Promise((resolved, reject) => {
//     fs.readFile(path, 'utf-8', (err, file) => {
//       if (err) {
//         reject(err.message);
//       } else {
//         const reg = /\[(.[^\]]*)\]\((http.*)\)/gm;
//         const links = file.match(reg);
//         const onlyLinks = links.forEach(link => { 
//           const linkText = link.split("](");
//           const text = linkText[0].replace("[", "");
//           const href = linkText[1].replace(")", "");          
//           array.push({ text, href });
//           });
//           console.log(array);
//         resolved(array);
//       }
//     });
//   });
// };

// readFile("./README.md");
