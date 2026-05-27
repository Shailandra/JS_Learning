//for

//let array = [2, 5,6,7, 9,96,1]

//let array = ['S','h','a','i','l','e','n','d','r','a']

let name = "Shailandra Rathore"
let array = name.split('')

for (let index = 0; index < array.length; index++) {
    if (array[index]!=' ') {
        const element = array[index];
        console.log(element)
    }

}
