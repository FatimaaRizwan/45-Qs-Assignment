//first we will make a list of guests
let guests:string[]=["Park Jimin" , "Min Yoongi", "Kim SoekJin" , "Jeon Jungkook"];
guests.forEach(guests=>{
    console.log(`Mr. ${guests}, would you like to come over for a dinner?`)
});

//one of the above guests can't make it to dinner.
let unabletoattend = "Kim SoekJin"
console.log(`Mr. ${unabletoattend} cannot make it to dinner`);

//we will now replace the guest
let newguest = "Jung Hoseok"
guests[guests.indexOf(unabletoattend)]=newguest;

//new invitations
guests.forEach(guests =>{
    console.log(`Mr. ${guests}, would you like to come over for dinner?`)
});