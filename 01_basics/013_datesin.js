

let todayDate= new Date()
// console.log(typeof todayDate)
// console.log(todayDate.toString())
// console.log(todayDate.toDateString())
// console.log(todayDate.toLocaleString())

let myCreatedDate = new Date(2023,0,24)

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Math.floor(Date.now()/1000);

console.log(myTimeStamp)


let newDate = new Date();
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1)
console.log(newDate.getUTCDay())
console.log(newDate.getFullYear())


console.log(newDate.toLocaleString('default',{weekday :"long"}))