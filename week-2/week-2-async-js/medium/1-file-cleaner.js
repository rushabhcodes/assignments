const fs = require('fs');


const filePath = 'a.txt';


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Remove extra spaces
  const cleanedData = data.replace(/\s+/g, ' ').trim();

  fs.writeFile(filePath, cleanedData, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File cleaned successfully');
    }
  });
});