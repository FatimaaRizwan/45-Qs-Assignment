//first we will make a list of guests
var guests = ["Park Jimin", "Min Yoongi", "Kim SoekJin", "Jeon Jungkook"];
guests.forEach(function (guests) {
    console.log("Mr. ".concat(guests, ", would you like to come over for a dinner?"));
});
//one of the above guests can't make it to dinner.
var unabletoattend = "Kim SoekJin";
console.log("Mr. ".concat(unabletoattend, " cannot make it to dinner"));
//we will now replace the guest
var newguest = "Jung Hoseok";
guests[guests.indexOf(unabletoattend)] = newguest;
//new invitations
guests.forEach(function (guests) {
    console.log("Mr. ".concat(guests, ", would you like to come over for dinner?"));
});
