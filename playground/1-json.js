const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
const dataString = dataBuffer.toString();
const parsedData = JSON.parse(dataString);

parsedData.name = 'Ismail';
parsedData.age = 18;
const Data = JSON.stringify(parsedData);
console.log(parsedData);

fs.writeFileSync('1-json.json', Data);


