// GLOBALS - NO WINDOWS !!!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (CommonJS)
// modules      - info about current module (file)
// process      - info about env where the program is being executed

// example
console.log(__dirname);

// below code prints "hello world" every second

setInterval(() => {
  console.log("hello world");
}, 1000);

// to stop this program or any, press ^c (control c)
