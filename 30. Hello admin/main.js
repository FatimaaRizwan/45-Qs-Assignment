var usernames = ["admin", "user1", "user2", "user3"];
usernames.forEach(function (usernames) {
    if (usernames === "admin") {
        console.log("Hello admin! would you like to see reports?");
    }
    else {
        console.log("Hello ".concat(usernames, " Thank you for signing up"));
    }
});
