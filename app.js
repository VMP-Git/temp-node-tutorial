// npm - global command, comes with node
// npm -- version or npm --v

// local dependency - use it only in this particular project. Install a package for the current project only.
// npm i <packageName> or npm install <packageName>

// global dependency - use it in any project. Install a package which can be used in all projects.
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

/* 
-> package.json - manifest file (stores important info about project/package)
-> manual approach (create package.json in the root, create properties etc)
-> npm init (step by step, press enter to skip)
-> npm init -y (everything default)
 */

// this code is just to demonstrate lodash.
const _ = require("lodash");

const items = [1, [2, [3, [4]]]]; // this is called array of arrays
const newItems = _.flattenDeep(items); // this function will flatten down the array of arrays into a single array.

console.log(newItems);
