const bcrypt = require("bcryptjs");
const saltRounds = 10;

const starterPass = "This is a long password but unencrypted";
const anotherPass = "BowWow19";

const salt = bcrypt.genSaltSync(saltRounds);
const starterHash = bcrypt.hashSync(starterPass, salt);
const anotherHash = bcrypt.hashSync(anotherPass, salt);

console.log("starterPass " + starterPass + " has changed to: " + starterHash);
console.log("anotherPass " + anotherPass + " has changed to: " + anotherHash);
