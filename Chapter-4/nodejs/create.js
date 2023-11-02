const fs = require("fs");

const createPerson = (person) => {
  fs.writeFileSync("./person.json", JSON.stringify(person));
};

const sabrina = createPerson({
  name: "Sabrina",
  age: 22,
  address: "BSD Tangerang",
});
