const myDB = require("../db/db");

myDB.create("user1", 10);
myDB.create("user2", 10);
myDB.create("user3", 10);
myDB.create("user4", 10);
myDB.create("user5", 10);

myDB.bulkCreate("user6", 10, 5);
const ticket = myDB.find();
console.log(ticket);

const winner = myDB.draw(3);
console.log(winner);
