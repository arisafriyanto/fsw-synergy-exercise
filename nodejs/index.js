// //* ini akan mengimport module bernama "os"
// const os = require("os");
// console.log(`Free memory: ${os.freemem}`);

// //* import local module
// const luasSegitiga = require("./segitiga");
// console.log(luasSegitiga(3, 4));

//* mengimport core module bernama "fs"
const fs = require("fs");

// //* read file
// const isi = fs.readFileSync("./text.txt", "utf-8");
// console.log(isi);

// //* write file
// fs.writeFileSync("./test.txt", "I Love Binar");

//* read file person.json
const person = require("./person.json");
console.log(person);
