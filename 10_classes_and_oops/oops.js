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



const userOne = User("Shaialndra", 12, true)
console.log(userOne.username);
console.log(userOne.loginCount);
console.log(userOne.isLoggedIn);