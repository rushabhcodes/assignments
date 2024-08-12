const fs = require('fs');


const content = 'Hello, world!';


fs.writeFile('a.txt', content, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully');
  }
});