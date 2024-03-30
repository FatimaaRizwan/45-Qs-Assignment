let currentUsers:string[]= ["admin","user1", "user2", "user3", "user4"];
let newUsers:string[]= ["User1", "User2", "User3" ,"User4" ,"admin"];

newUsers.forEach(newUsers =>{
   if (currentUsers.some(currentUsers=> currentUsers.toLowerCase()===newUsers.toLowerCase())){
    console.log(`${newUsers} need to enter a new username.`);
   } else {
    console.log(`${newUsers} is available`);
} })