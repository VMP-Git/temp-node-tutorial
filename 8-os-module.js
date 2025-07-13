// os properties examples

// calling the built-in OS module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// this method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds.`);

//example of other properties
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
};

console.log(currentOS);
