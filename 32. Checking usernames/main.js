var currentUsers = ["admin", "user1", "user2", "user3", "user4"];
var newUsers = ["User1", "User2", "User3", "User4", "admin"];
newUsers.forEach(function (newUsers) {
    if (currentUsers.some(function (currentUsers) { return currentUsers.toLowerCase() === newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, " need to enter a new username."));
    }
    else {
        console.log("".concat(newUsers, " is available"));
    }
});
