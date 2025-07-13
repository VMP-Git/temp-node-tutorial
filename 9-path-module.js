// calling the built-in path module
const path = require("path");

console.log(path.sep); // this module returns the file path separator (/)

const filePath = path.join("Content", "subfolder", "test.txt"); // this module returns the mentioned file path with separator.
console.log(filePath);

const base = path.basename(filePath); //this module returns only the base file name from the entire filepath.
console.log(base);

//this method returns an absolute path which, will be needed while building applications
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
