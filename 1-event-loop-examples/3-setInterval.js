setInterval(() => {
  console.log("Hello world");
}, 2000);
console.log("I will run first.");
// process stays alive unless
// kill process Control + C
// unexpected error

// notice how this code is not exiting and stays alive until inturrupted.
// This is because setInterval is asynchronous.
// Also notice that "I will run first" console log runs first becuse again,
// the setInterval being asynchronus, offloads the task.
