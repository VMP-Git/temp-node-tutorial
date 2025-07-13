// local variable
const secret = "SUPER SECRET";

// shared variables
const john = "john";
const peter = "peter";

/* this will print the module object. find the 'exports' subobject, 
that is where the shared objects of the current file are displayed. */
// console.log(module);

// exporting
module.exports = { john, peter };

//console.log(module);
