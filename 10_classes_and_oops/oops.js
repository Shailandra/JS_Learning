// const user = {
//     username : "Shailandra",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function()
//     {
//         //console.log("Got user Details");
//         console.log(this);
        
        
//     }
    
// }
// console.log(user.username);
// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}



const userOne =new User("Shaialndra", 12, true);
const userTwo =new User("Chai aur Code", 11, false);
// console.log(userOne.username);
// console.log(userOne.loginCount);
// console.log(userOne.isLoggedIn);

console.log(userOne);
console.log(userTwo);

