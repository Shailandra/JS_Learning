// const user = {
//     userName : "Shailandra",
//     price : 999,

//     welcomeMessage : function()
//     {
//         console.log(`${this.userName}, Welcome to website`);
//         console.log(this);
        
        
//     }


// }

// user.welcomeMessage()
// user.userName = "Mr. Rathore"
// user.welcomeMessage()

// console.log(this);


// function chai()
// {
//     let userName = "Shailandra"
//     console.log(this)
// }
const chai=()=>
{
    let userName = "Shailandra"
    console.log(this)
}
// chai()

// const addTwo=(num1, num2)=>{
// return num1+num2
// }

//const addTwo = (num1, num2)=> (num1+num2)

const addTwo = (num1, num2)=> ({userName : "Shailandra"})

console.log(addTwo(3,4))


const myArray =[2,4,6,3,1]



