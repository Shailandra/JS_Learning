// ... Rest Operation or Spread Operator

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(400,500,600))


function calculateCartPrice(val1, val2, ...num1){
    return val1, val2, num1
}

console.log(calculateCartPrice(400,500,600, 2000))

const user = {
    name : "Shailandra",
    age : 31
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(user)