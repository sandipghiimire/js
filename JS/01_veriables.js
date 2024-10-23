const accountID = 1
let accountEmail = "sandip@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"
let accountState;

// accountID = 2 // not allowed

accountEmail = "sg@gmail.com"
accountPassword = "11111"
accountCity = "Lalitpur"

console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

/*
prefer not to use varm
because of issue in block scope and functional scope
*/

console.log([accountID, accountEmail, accountPassword, accountCity, accountState]);
