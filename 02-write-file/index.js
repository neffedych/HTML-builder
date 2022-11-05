const fs = require('fs');
const path = require('node:path');
const prompt = require('prompt-sync')({sigint: true});


const data = prompt('Hey there. Tell us something? ');
let writeFile = fs.createWriteStream(__dirname + '/text.txt', {flags : 'a'}); // creating txt file
writeFile.write(data);


process.on('exit', function (){
    console.log('See you later!');
});
