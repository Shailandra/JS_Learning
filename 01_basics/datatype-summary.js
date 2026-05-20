// Premitive Data Type

// 7 type --> String, number, Boolean, null, undefined, Symbol, BigInt

//Call by Value

//Statically typed language or Dynamically Typed language


// Reference Type Non premitive type)

// Array, Objects (Java Script Object and Browser Event to master javascript)


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber =234353534653465656577545377437n
console.log(bigNumber)

const heros= ["batman", "ironman", "spiderman", "dr"]

let myObj = {
    name : "Shailandra",
    age : 31,
}
console.log(myObj.name)
console.log(typeof myObj)

const newFunction = ()=>
{
    console.log("Hello, Mr. Rathore!!")
}
newFunction()

const myFunciton = function()
{
    console.log("Hello, World!!")
}
myFunciton()

console.log(typeof myFunciton)