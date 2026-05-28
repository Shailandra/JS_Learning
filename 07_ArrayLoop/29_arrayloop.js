//for of

// ["", "", ""]
// [{}, {}, {}]

const array = [42, 7, 91, 13, 58, 26, 84, 3, 67, 19]

for (const i of array) {
    console.log(i)
    
}
for (const i in array) {
    console.log(i)
    
}


const name = "Shailandra Rathore"
for (const element of name)
{
    if(element != ' '){
    //console.log(element);
    }
    
}

const map = new Map() // Map store key value pair
// map = {
//   "apple": 42,
//   "banana": 7,
//   "orange": 91,
//   "grape": 13,
//   "mango": 58
// }

// map.set("IN", "INDIA")
// map.set("US", "United State")
// map.set("Fr","France")

//console.log(map)

// for (const [key, value] of map) {
//     console.log(key,":-",value)
// }

const myObject = {
    'game1' :"NFS",
    'game2': "Spiderman"
}

// for (const [key, value] of myObject) {
//     console.log(key,":-",value)
//     {
//         console.log(key,":-",value)
//     }
// }

for (const key in myObject) {
   console.log(myObject[key])
    
}


