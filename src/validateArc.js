const validation = require('./validate.js');

const validateArc = (option, links) => {
  console.log(links)
  return new Promise((resolve) => {
    if (option === '--validate') {
      const promises= links.map((link) => {
        return (validation(link));
      })      
      return Promise.all(promises).then(()=>resolve(links))        
    }
    return resolve(links);
  })
}
// validateArc('--validate', [{href:'https://www.google.com',text:'google'}]);
// // validation({href:'https://www.google.com'}).then(resposta=> console.log(resposta))
module.exports = validateArc
