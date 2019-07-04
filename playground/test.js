const fs = require('fs');

// const jsonObject = JSON.stringify({ title: 'Testy', author: 'bryan'});

// fs.writeFileSync('1-json.json', jsonObject);
const jsonObject = fs.readFileSync('1-json.json').toString();
const parsed = JSON.parse(jsonObject);

console.log(parsed.title)