//first we will make a list of guests
let guests:string[]=["Park Jimin" , "Min Yoongi", "Kim SoekJin" , "Jeon Jungkook"];

console.log(`Unfortunately, only two people can be invited for dinner`);
while (guests.length > 2){
    let removedguest=guests.pop();
    console.log(`Sorry ${removedguest}, I cannot ivite you to the dinner`);
}
guests.forEach(guests =>{
    console.log(`Mr. ${guests}, You are still invited to the dinner`)
});