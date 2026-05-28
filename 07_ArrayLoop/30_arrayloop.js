const coding = ["Python", "Java", "C++", "JavaScript", "Go", "Rust", "Kotlin", "Swift", "Ruby", "TypeScript"]

// const value = coding.forEach(element => {
//     //console.log(element)
//     return element
// } )

// console.log(value)

// const newArray = coding.filter((name) => name.length > 3)
// console.log(newArray)

// const newArray = coding.filter((name) => {
//     if (name.length <= 3) { return name }

// })
// console.log(newArray)

const newArray =[] 
coding.forEach(
    (name) => {
        if (name.length > 4) {
            newArray.push(name)
        }
    }
)

console.log(newArray)