function sayMyName (){

    console.log("S")
    console.log("H")
    console.log("A")
    console.log("N")
    console.log("U")
}
sayMyName()

// function addTwoNumber(number1, number2)
// {
//     console.log(number1+number2)
// }

// const result = addTwoNumber(8,10)
// console.log("Result Value: ", result);  undefined

function addTwoNumber(number1, number2)
{
//    let result = number1+number2
//    console.log("Shanu")
//    return result
//    console.log("Rathore")
      return number1+number2
}

const result = addTwoNumber(8,10)
console.log("Result Value: ", result);

function loginUserMessage(userName){
    if(!undefined)
   // if(userName === undefined)
    {
        console.log("Please Enter a username")
        return
    }
    return `${userName} just logged in`
    
}

console.log(loginUserMessage())