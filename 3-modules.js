// Common JS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// importing names from the file 4-names.js
const names = require("./4-names");
// console.log(names);

// importing sayHi from the file 5-utils.js which contains a function
// to print the names
const sayHi = require("./5-utils");

// exporting from file 6-alternative-flavour.js
const data = require("./6-alternative-flavour");
// console.log(data);

// directly importing from 7-mind-grenade.js
require("./7-mind-grenade");

//below line are commented just to understand the above line that directly exports module.
// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);
