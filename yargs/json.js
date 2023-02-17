const fs = require('fs')

// const book= {
//     title: 'For whom the bell tolls',
//     author: 'E Heminguey'
// }

// const bookJson=JSON.stringify(book);
// //console.log(bookJson)


// const bookParseData=JSON.parse(bookJson);
// //console.log(bookParseData.title)

// fs.writeFileSync('json.txt',bookJson);

const data = fs.readFileSync('json.txt');
console.log(data.toString());

