const numbers = [1, 2, 3, 4, 5];

// const myTotal = numbers.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc+currVal

// },1)

// const myTotal = numbers.reduce((acc, currVal)=> acc+currVal,2)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Laptop",
        price: 55000
    },
    {
        itemName: "Mobile Phone",
        price: 25000
    },
    {
        itemName: "Headphones",
        price: 3000
    },
    {
        itemName: "Keyboard",
        price: 1500
    },
    {
        itemName: "Mouse",
        price: 800
    },
    {
        itemName: "Monitor",
        price: 12000
    },
    {
        itemName: "Tablet",
        price: 18000
    },
    {
        itemName: "Smart Watch",
        price: 7000
    },
    {
        itemName: "Printer",
        price: 9500
    },
    {
        itemName: "Camera",
        price: 45000
    }
];

//const total = shoppingCart.map( (item) =>item.price).reduce((acc,currVal)=> acc+currVal,0)

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total)