const fs = require('fs');
const path = require('path');

// Reading data
const filePath = path.join('src','home','data.txt')
const filePathResolved = path.resolve('src','home','data.txt');
console.log(filePath);
console.log(filePathResolved);
console.log(path.extname(filePathResolved));

fs.readFile(filePath,(err, data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});



