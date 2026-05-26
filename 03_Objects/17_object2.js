//const tinderUser = new Object();    //--> singleton object

const tinderUser ={} //--> non singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Shanu"
tinderUser.isLoggedIn = false


//console.log(tinderUser)

const regulerUser = {
    email : "abc@yopmail.com",
    fullName:{
       userFullName: {
        firstName : "Shailandra",
        lastName :  "Rathore"
        }
        
    }
}

// console.log(regulerUser.fullName)
// console.log(regulerUser.fullName.userFullName.firstName)

//console.log(regulerUser.fullName?.userFullName.firstName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1,...obj2}
console.log(obj3)

const user =[
    {
        id :1,
        email : "abc@gmail.com"
    },
    {
        id :2,
        email : "xyz@gmail.com"
    }
]

console.log(user[0].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))

console.log(Object.values(tinderUser))

console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))



