// this code shows the alternative methods to export items.

// const items = ["item1", "item2"];
// another method to write the above line for exporting it right there is:
module.exports.items = ["item1", "item2"];

const person = {
  name: "bob",
};

// another method to export this is
module.exports.singlePerson = person;
