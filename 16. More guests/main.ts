//first we will make a list of guests
let guests:string[]=["Park Jimin" , "Min Yoongi", "Kim SoekJin" , "Jeon Jungkook"];
console.log(`Great news everyone! I've found a bigger dinner table`);

//adding more guests
guests.unshift("Kim Namjoon");
guests.splice(guests.length/ 2,0, "Kim Taehyung");
guests.push("Cha Eunwoo")

guests.forEach(guests =>{
    console.log(`Mr. ${guests}, would you like to come over for a dinner?`)
});