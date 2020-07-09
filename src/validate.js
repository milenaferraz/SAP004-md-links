const url = require('node-fetch');

const validate = (path) => {
    return new Promise((resolve, reject) => {
        url(path).then((r) => {
             const urls = r.url,
             statusMsg = r.statusText,
             status = r.status,
             result =`${urls} -> ${statusMsg} -> ${status}`;
            resolve(result); 
            console.log(result);
        })
        .catch((err) => reject(err));
    });    
};

exports.module = {
    validate
}