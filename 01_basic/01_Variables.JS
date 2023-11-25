const accountId = 144553
let accountEmail = "Trilokinath@123.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed to changes if we assigned to Constant Variable

accountEmail = "hc@bc.com"
accountPassword = "21212121"
accountCity = "Bangluru"

console.log(accountId);

/*
Prefer not to use var
beacause of the issue on log scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])