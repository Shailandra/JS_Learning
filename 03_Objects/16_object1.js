//singleton
// Object Literals

const mySym = Symbol("key1")

//Object.create
const jsUser = {
    name : "Shailandra",
    "full Name" : "Shailandra Rathore",
    [mySym] : "myKey1",
    age : 31,
    designation : "Quality Analyst",
    email : "rathore.shanu1996@yopmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Tuesday"]

}

// console.log(jsUser.name)
// console.log(jsUser.age)
// console.log(jsUser.lastLoginDays[0])
// console.log(jsUser["designation"])
// console.log(jsUser["full Name"])
// console.log(typeof jsUser["mySym"])
// console.log(jsUser[mySym])

// jsUser.email = "Shailnadra.rathore@yopmail.com"
// console.log(jsUser["email"])
// //console.log(jsUser["key1"])
// Object.freeze(jsUser)
// jsUser.email = "Shailnadra.rathore@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this["full Name"]}`);
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())