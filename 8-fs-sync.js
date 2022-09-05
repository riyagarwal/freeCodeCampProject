// file system
// const {readFileSync, writeFileSync} = require('fs');   //this is called destructuring methods of the module

//   OR

const fs = require('fs');
//  fs.readFileSync()
//  fs.writeFileSync() 

 const first = fs.readFileSync('./content/first.txt', 'utf8')
 const second = fs.readFileSync('./content/second.txt', 'utf8')
 console.log(first, second);