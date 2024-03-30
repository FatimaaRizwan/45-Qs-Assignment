//first we will make a list of guests
var guests = ["Park Jimin", "Min Yoongi", "Kim SoekJin", "Jeon Jungkook"];
console.log("Unfortunately, only two people can be invited for dinner");
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("Sorry ".concat(removedguest, ", I cannot ivite you to the dinner"));
}
guests.forEach(function (guests) {
    console.log("Mr. ".concat(guests, ", You are still invited to the dinner"));
});
