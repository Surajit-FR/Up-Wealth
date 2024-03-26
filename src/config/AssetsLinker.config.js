const fs = require('fs');
const path = require('path');

const folderPath = '../../public/assets/img'; // Replace this with the actual path to your folder
const outputFilePath = '../config/images.js'; // Replace this with the desired output file path

// Read files in the folder
const files = fs.readdirSync(folderPath);

// Create an object with file names as keys and file paths as values
const imageObject = {};
files.forEach(file => {
    const fileName = path.parse(file).name;
    const filePath = path.join('..', 'assets', 'img', file); // Adjust the path accordingly
    imageObject[fileName] = filePath;
});

// Create the output string
// const outputString = `const image = ${JSON.stringify(imageObject, null, 2)};\n\nmodule.exports = image;`;
const outputObject = `const image = ${JSON.stringify(imageObject, null, 2)};\n\nmodule.exports = image;`;
// Write the output to the specified file
fs.writeFileSync(outputFilePath, outputObject);