//curry
const userLogs = user => message => 
    console.log(`${user} => ${message}`);

const log = userLogs("user1");

log("message!")