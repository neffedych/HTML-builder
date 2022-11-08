const fs = require('fs');
const path = require('node:path');
const prompt = require('prompt-sync')({sigint: true});



let isTrue = true;
const filePath = __dirname + '/text.txt';

let data = prompt('Hey there. Tell us something? ');
let writeFile = fs.createWriteStream(filePath); // creating txt file
writeFile.write(data);

while(isTrue){
    let data1 = prompt('');
    fs.appendFileSync(filePath, data1);

      if(data1 === "exit"){
        isTrue = false;
        process.exit();
    };
}

process.on('exit', function (){
    console.log('See you later!');
});
