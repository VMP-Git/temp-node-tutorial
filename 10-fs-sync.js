// calling the modules for read and write tasks.
const { readFileSync, writeFileSync } = require("fs");

console.log("start"); // this line is used to understand the synchronus working of this module.
const first = readFileSync("./content/first.txt", "utf8"); // here the "utf8" is necessary for reading or writing the content.
const second = readFileSync("./content/second.txt", "utf8");

//this will print the content from the files.
// console.log(first, second);

// this will create a new file if not exist already, and add the given content
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" } // this will append the content again in the file.
);

// this two lines are also used to demonstrate the synchronus working of this fs-sync module.
console.log("Done with the task. ");
console.log("Starting the next one. ");
