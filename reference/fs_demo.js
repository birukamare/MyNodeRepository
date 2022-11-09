const fs = require('fs')
const path = require('path')

// //creating a folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err=>{
//     if(err) throw err;
//     console.log('Folder created...');
// });


// //To create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'Appended.txt'),'Hello there you succesfuly wrote the text using file system!', err=>{
//     if(err) throw err;
//     console.log('File written to...');

//     //To append a text to a file
//     fs.appendFile(path.join(__dirname, '/test', 'Appended.txt'),' We are appending text.', err=>{
//         if(err) throw err;
//         console.log('File just got appended!')
//     })
// });

// //Reading a text from file
// fs.readFile(path.join(__dirname, '/test', 'Appended.txt'),'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

//Renaming a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'RenamedFile.txt'), err=>{
    if(err) throw err;
    console.log('File renamed');
});