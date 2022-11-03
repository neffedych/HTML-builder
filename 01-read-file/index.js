const fs = require('fs');
const path = require('node:path');

const txtPath = path.join( __dirname,'text.txt');

let readStream = fs.createReadStream(txtPath, 'utf8');

readStream.on('data', function(chunk){
    console.log(chunk);
});

