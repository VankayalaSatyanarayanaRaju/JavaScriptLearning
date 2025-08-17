const accountId = 123456
let accountEmail = "mail@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur"
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "hc@gmail.com"

//accountId = 2


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])