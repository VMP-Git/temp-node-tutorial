// this code also demonstrates the nested callback functions.

// calling the module
const { readFile, writeFile } = require("fs");

// this line is to understand the async approach of this module.
console.log("start");

// this reads the file.
readFile("./Content/first.txt", "utf8", (err, result) => {
  // utf8 needs to be included to fecth the letters in english
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result); // this line just printed the result directly without embeding it in any variable.
  const first = result;

  // reads the second file.
  readFile("./Content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    // creats a new file.
    writeFile(
      "./Content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // console.log(result);
        console.log("done with this task."); // this line is to demonstrate the asyn approach of this module.
      }
    );
  });
});

// this line is also for understanding the async approach of this module. This will demonstrate how async differs from sync approach.
console.log("Starting next task. ");
